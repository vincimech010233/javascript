const assert = require('node:assert/strict');
const http = require('node:http');
const os = require('node:os');
const path = require('node:path');
const { spawn } = require('node:child_process');
const { once } = require('node:events');
const test = require('node:test');
const { io: connect } = require('socket.io-client');
const { createServer } = require('./server');

async function start(t) {
  const { io, server } = createServer();
  t.after(() => new Promise((resolve) => io.close(resolve)));
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  return `http://127.0.0.1:${server.address().port}`;
}

function get(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (response) => {
      let body = '';
      response.setEncoding('utf8');
      response.on('data', (chunk) => { body += chunk; });
      response.on('end', () => resolve({ status: response.statusCode, body }));
      response.on('error', reject);
    }).on('error', reject);
  });
}

test('serves the chat client from another working directory', { timeout: 5000 }, async (t) => {
  const modulePath = path.join(__dirname, 'server.js');
  const child = spawn(process.execPath, ['-e', `const {server} = require(${JSON.stringify(modulePath)}).createServer(); server.listen(0, '127.0.0.1', () => process.send(server.address().port));`], { cwd: os.tmpdir(), stdio: ['ignore', 'ignore', 'pipe', 'ipc'] });
  t.after(async () => {
    if (child.exitCode === null) {
      const exited = once(child, 'exit');
      child.kill();
      await exited;
    }
  });
  const [port] = await once(child, 'message');
  const response = await get(`http://127.0.0.1:${port}/`);
  assert.equal(response.status, 200);
  assert.match(response.body, /<h1>Chat en Tiempo Real<\/h1>/);
  assert.match(response.body, /\/socket.io\/socket.io.js/);
});

test('does not expose missing files or server source', { timeout: 5000 }, async (t) => {
  const base = await start(t);
  for (const route of ['/missing', '/server.js', '/package.json']) {
    const response = await get(base + route);
    assert.equal(response.status, 404);
    assert.doesNotMatch(response.body, /function createServer/);
  }
});

test('broadcasts a message to sender and another client', { timeout: 5000 }, async (t) => {
  const base = await start(t);
  const clients = [connect(base, { forceNew: true, reconnection: false }), connect(base, { forceNew: true, reconnection: false })];
  t.after(() => clients.forEach((client) => client.close()));
  await Promise.all(clients.map((client) => once(client, 'connect')));
  const received = clients.map((client) => once(client, 'chat message'));
  clients[0].emit('chat message', 'Synthetic local message');
  assert.deepEqual(await Promise.all(received), [['Synthetic local message'], ['Synthetic local message']]);
  clients.forEach((client) => client.close());
});
