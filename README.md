## WEBLY

**@itsjaviertech/webly** is a backend framework built on top of Express.js, designed to help developers build RESTful APIs quickly, consistently, and with a clean structure.

Webly provides a modular foundation for handling routing, configuration, middleware and logging. With a scalable and extensible architecture, it’s suitable for anything from small projects to enterprise-level systems.

- ✨ Key Features
- ⚡ Powered by Express.js — built on a fast, stable, and widely adopted Node.js framework.
- 🧩 Modular Architecture — clean separation of routes, controllers, and configuration.
- ⚙️ Flexible Configuration — supports environment-based settings and file-driven configuration.
- 🧠 Built-in Middleware — includes logging, error handling, CORS, body parsing, and more.
- 🚀 Production-Ready — optimized for performance and simple deployment.

### Get Started

Using **@itsjaviertech/webly** with Custom Middleware and Dynamic Route Loading
Below is an example setup using Webly, App, and Loader from the **@itsjaviertech/webly** framework.

#### This demonstrates how to:

- Initialize the application with a custom name and port
- Serve static files
- Automatically load routes and scrapers
- Apply global middleware

```
root/
├── index.js
├── routers/
│   ├── index.js
│   └── example.js
├── lib/
│   ├── scraper/
│   │   └── tempo.js
│   └── system/
│       └── middleware.js
└── public/
    ├── 404.html
    └── index.html
```

#### Create App

This is an example code for `app.js` :

```Javascript
import Webly, { App, Loader } from '@itsjaviertech/webly'
import middleware from './lib/system/middleware.js'

// Dynamically load scrapers from the folder
await Loader.scraper('./lib/scraper')

// Initialize the Webly application
const app = new App({
   name: 'Open-API',
   staticPath: ['public'],
   routePath: './routers',
   middleware,
   socket: false,
   socketOpts: {
      transports: ['websocket', 'polling'],
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
      pingInterval: 25000,
      pingTimeout: 5000
   },
   port: 3000,
   session: {
      name: 'token',
      keys: ['session'],
      maxAge: 72 * 60 * 60 * 1000, // 3 days
      httpOnly: false,
      sameSite: 'strict'
   },
   cors: {
      origin: '*',
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: '*',
      preflightContinue: false,
      optionsSuccessStatus: 204,
      exposedHeaders: '*',
      credentials: true
   },
   error: (req, res) => {
      res.status(404).sendFile('./public/404.html', { root: process.cwd() })
   }
})

// Start the server
app.start()
```

> For a full example project with advanced routing integration:
👉 [https://github.com/itsjaviertech/open-api](https://github.com/itsjaviertech/open-api)

### 📦 Ideal For

- Developers who want a ready-to-use, well-structured Express.js backend starter.
- Teams looking for a consistent framework across multiple services.
- Building APIs, internal tools, or microservice backends.
