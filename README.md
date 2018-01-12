Typescript && Express.js && Mongoose
=========================

An Express.js project implemented using Typescript with strongly typed objects:

# Installation

Clone the repository

```
npm install
```

For development (start in watch mode):
```
npm run dev (NODE_ENV=development)
```

Fro production:
```
npm run prod (NODE_ENV=production)
```

Browse to http://localhost:3000

# Folder structure

    ├── config
    │   ├── express.ts
    │   └── environments.ts
    ├── controllers
    │   └── index.server.controller.ts
    ├── index.ts
    ├── public
    │   └── stylesheets
    │       └── style.css
    ├── routes
    │   └── index.server.route.ts
    ├── tsconfig.json
    └── views
        ├── error.jade
        ├── index.jade
        └── layout.jade

# Typescript

Typescript will output the compiled code to the `dist` folder.

# License - MIT.

