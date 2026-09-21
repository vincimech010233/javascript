# JavaScript Experiments

[Español](README.es.md)

A collection of small browser and Node.js projects used to practise interface behaviour, state management, networking, and JavaScript fundamentals.

## Included projects

- `chat_app/` — a small Socket.IO chat prototype.
- `currency-converter/` — browser currency-conversion interface.
- `sync-tabs/` — cross-tab state synchronisation experiment.
- `Experimento-Doble-Rendija/` — interactive double-slit demonstration.
- `Lista-de-Tareas/`, `calculator/`, and `Rock-Paper-Scissors/` — focused UI exercises.

## Running a browser project

Open its `index.html` directly, or serve the repository locally:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Running the chat prototype

```bash
cd chat_app
npm ci
node server.js
```

## Security and privacy

Projects named as login or messaging demonstrations are local educational examples. Do not collect real credentials or deploy them as authentication systems. Dependencies are installed from the lockfile and are not committed to the repository.

## Portfolio status

This is an archive of small exercises rather than a single production application. The strongest projects may later be extracted into focused repositories with tests and deployment instructions.

## License

No repository-wide license has been selected.
