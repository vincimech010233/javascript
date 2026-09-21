const assert = require('node:assert/strict');
const http = require('node:http');
const test = require('node:test');

const { createServer } = require('./server');

test('serves the chat client from any working directory', async () => {
  const { server } = createServer();
  await new Promise((resolve) => server.listen(0, resolve));
  const { port } = server.address();

  const response = await new Promise((resolve, reject) => {
    http.get(`http://127.0.0.1:${port}/`, resolve).on('error', reject);
  });

  assert.equal(response.statusCode, 200);
  response.resume();
  await new Promise((resolve) => response.on('end', resolve));
  await new Promise((resolve) => server.close(resolve));
});
