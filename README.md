# @denis_bruns/core

> **A TypeScript library providing core interfaces and types for building modular, testable web applications.**

[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![npm version](https://img.shields.io/npm/v/@denis_bruns/core.svg?style=flat-square&logo=npm)](https://www.npmjs.com/package/@denis_bruns/core)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![GitHub](https://img.shields.io/badge/GitHub-181717.svg?style=flat-square&logo=github)](https://github.com/h3llf1r33/core)

---

## Overview

`@denis_bruns/core` contains **interfaces** and **types** that serve as foundational building blocks for multiple libraries in your ecosystem. Previously part of a larger monorepo, it’s now separated into smaller, more focused packages. This core library helps keep your codebase:

- **Modular** – By defining reusable contracts and abstractions.
- **Testable** – Through clearly separated concerns and consistent interfaces.
- **Extensible** – Encouraging a clean architecture approach with shared definitions.

---

## Installation

Using **npm**:

```bash
npm install @denis_bruns/core
```

Or **yarn**:

```bash
yarn add @denis_bruns/core
```

---

## Key Features

1. **Shared Contracts** – Common interfaces for HTTP clients, data filters, pagination, and more.
2. **Clean Architecture Support** – Define entity gateways, repositories, and domain models with reusable types.
3. **Type-Safe** – Written in TypeScript to provide robust type checking and IDE autocompletion.

---

## Related Packages

### 1. **@denis_bruns/reflection**
[![NPM](https://img.shields.io/npm/v/@denis_bruns/reflection?style=flat-square&logo=npm)](https://www.npmjs.com/package/@denis_bruns/reflection)  
[![GitHub](https://img.shields.io/badge/GitHub--181717.svg?style=flat-square&logo=github)](https://github.com/h3llf1r33/reflection)
> Type-safe data transformation and reflection utilities. Easily map complex data structures through JSON paths or custom schemas.

---

### 2. **@denis_bruns/nestjs-route-handler**
[![NPM](https://img.shields.io/npm/v/@denis_bruns/nestjs-route-handler?style=flat-square&logo=npm)](https://www.npmjs.com/package/@denis_bruns/nestjs-route-handler)  
[![GitHub](https://img.shields.io/badge/GitHub--181717.svg?style=flat-square&logo=github)](https://github.com/h3llf1r33/nestjs-route-handler)
> Streamlined route-handler generation for NestJS, reducing boilerplate and promoting organized, maintainable server code.

---

### 3. **@denis_bruns/aws-lambda-handler**
[![NPM](https://img.shields.io/npm/v/@denis_bruns/aws-lambda-handler?style=flat-square&logo=npm)](https://www.npmjs.com/package/@denis_bruns/aws-lambda-handler)  
[![GitHub](https://img.shields.io/badge/GitHub--181717.svg?style=flat-square&logo=github)](https://github.com/h3llf1r33/aws-lambda-handler)
> A composable Lambda handler builder with type-safe input/output, integrated error handling, and robust middleware support.

---

### 4. **@denis_bruns/http-axios**
[![NPM](https://img.shields.io/npm/v/@denis_bruns/http-axios?style=flat-square&logo=npm)](https://www.npmjs.com/package/@denis_bruns/http-axios)  
[![GitHub](https://img.shields.io/badge/GitHub--181717.svg?style=flat-square&logo=github)](https://github.com/h3llf1r33/http-axios)
> An RxJS-powered Axios client with clean architecture in mind—provides middleware, interceptors, and type-safe request options.

---

### 5. **@denis_bruns/http-axios**
[![NPM](https://img.shields.io/npm/v/@denis_bruns/http-axios?style=flat-square&logo=npm)](https://www.npmjs.com/package/@denis_bruns/http-axios)  
[![GitHub](https://img.shields.io/badge/GitHub--181717.svg?style=flat-square&logo=github)](https://github.com/h3llf1r33/http-axios)
> Angular-friendly HTTP client abstraction integrating RxJS and a clean middleware approach for easier, testable HTTP calls.

---

### 6. **@denis_bruns/http-middleware**
[![NPM](https://img.shields.io/npm/v/@denis_bruns/http-middleware?style=flat-square&logo=npm)](https://www.npmjs.com/package/@denis_bruns/http-middleware)  
[![GitHub](https://img.shields.io/badge/GitHub--181717.svg?style=flat-square&logo=github)](https://github.com/h3llf1r33/http-middleware)
> Middleware framework for building layered, configurable HTTP clients—supports AWS Secrets Manager, environment-based headers, caching, and more.

---

### 7. **@denis_bruns/nosql-mongodb**
[![NPM](https://img.shields.io/npm/v/@denis_bruns/nosql-mongodb?style=flat-square&logo=npm)](https://www.npmjs.com/package/@denis_bruns/nosql-mongodb)  
[![GitHub](https://img.shields.io/badge/GitHub--181717.svg?style=flat-square&logo=github)](https://github.com/h3llf1r33/nosql-mongodb)
> A ready-to-use NoSQL data service for MongoDB, offering common CRUD operations, query abstractions, and integration with your domain logic.

---

### 8. **@denis_bruns/nosql-dynamodb**
[![NPM](https://img.shields.io/npm/v/@denis_bruns/nosql-dynamodb?style=flat-square&logo=npm)](https://www.npmjs.com/package/@denis_bruns/nosql-dynamodb)  
[![GitHub](https://img.shields.io/badge/GitHub--181717.svg?style=flat-square&logo=github)](https://github.com/h3llf1r33/nosql-dynamodb)
> A DynamoDB-focused service layer built for clean architecture scenarios—handles expression building, advanced filtering, and RxJS integration.

---

### 9. **@denis_bruns/database-core**
[![NPM](https://img.shields.io/npm/v/@denis_bruns/database-core?style=flat-square&logo=npm)](https://www.npmjs.com/package/@denis_bruns/database-core)  
[![GitHub](https://img.shields.io/badge/GitHub--181717.svg?style=flat-square&logo=github)](https://github.com/h3llf1r33/database-core)
> A foundational database service for bridging domain models and data stores—abstracts CRUD operations, validations, and logging.

---

## Contributing

Contributions, feature requests, and bug reports are **welcome**! Please open an issue or submit a pull request on [GitHub](https://github.com/h3llf1r33/core).

---

## License

This project is licensed under the [MIT License](LICENSE).

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/h3llf1r33">h3llf1r33</a>
</p>