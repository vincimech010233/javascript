# Experimentos con JavaScript

[English](README.md)

Colección de pequeños proyectos para navegador y Node.js con los que practicar interfaces, gestión de estado, redes y fundamentos de JavaScript.

## Proyectos incluidos

- `chat_app/` — prototipo pequeño de chat con Socket.IO.
- `currency-converter/` — interfaz de conversión de divisas.
- `sync-tabs/` — experimento de sincronización entre pestañas.
- `Experimento-Doble-Rendija/` — demostración interactiva de doble rendija.
- `Lista-de-Tareas/`, `calculator/` y `Rock-Paper-Scissors/` — ejercicios concretos de interfaz.

## Ejecución

Para proyectos de navegador, abre su `index.html` o sirve el repositorio:

```bash
python3 -m http.server 8000
```

Para el prototipo de chat:

```bash
cd chat_app
npm ci
node server.js
```

## Seguridad y privacidad

Los proyectos de inicio de sesión o mensajería son ejemplos educativos locales. No deben recopilar credenciales reales ni desplegarse como sistemas de autenticación. Las dependencias se instalan desde el archivo de bloqueo y no se guardan en Git.

## Estado del portfolio

Es un archivo de ejercicios pequeños, no una única aplicación de producción. Los proyectos más sólidos podrán separarse después en repositorios independientes con pruebas e instrucciones de despliegue.

## Licencia

No se ha seleccionado una licencia global.
