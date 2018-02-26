Typescript + Express.js + Mongoose
=========================

An Express.js project implemented using Typescript with strongly typed objects. It's really easy and extensible starter with examples for base CRUD operations.


# Features
- **Typescript**
- **Nodemon**
- **Mongoose**
- **ExpressJS**

# Installation

Clone the repository

```
npm install
```

For development (start in watch mode):
```
npm run dev (NODE_ENV = development)
```

Fro production:
```
npm run prod (NODE_ENV = production)
```

Browse to http://localhost:3000

# Folder structure

	├── LICENSE
	├── README.md
	├── package.json
	├── src
	│   ├── api
	│   │   └── expert
	│   │       ├── expert.controller.ts
	│   │       ├── expert.route.ts
	│   │       └── expert.schema.ts
	│   ├── common
	│   │   ├── entities
	│   │   │   ├── expert.ts
	│   │   │   └── namedEntity.ts
	│   │   └── interfaces
	│   │       ├── IExpert.ts
	│   │       └── INamedEntity.ts
	│   ├── config
	│   │   ├── environments.ts
	│   │   └── express.ts
	│   └── index.ts
	└── tsconfig.json

# Typescript

Typescript will output the compiled code to the `dist` folder.

# License
MIT

