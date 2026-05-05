# 📘 Compte Rendu : TP3 – Angular 19 & Spring Boot REST API

## 1. Introduction
Ce TP porte sur le développement d'une application frontend avec **Angular 19** qui communique avec une **API REST Spring Boot** pour la gestion de produits. L'objectif principal est de mettre en pratique les concepts fondamentaux d'Angular : composants standalone, services, injection de dépendances, programmation réactive avec RxJS, et communication HTTP avec un backend.

## 2. Structure du Projet
L'organisation du projet Angular suit une architecture modulaire standard :

```text
EnsetAppTp3/
├── .vscode/                    # Configuration VS Code
├── public/                     # Assets publics
├── src/
│   ├── app/
│   │   ├── products/           # Composant d'affichage des produits
│   │   ├── services/           # Service d'appels API
│   │   ├── app.config.ts       # Configuration globale (HttpClient)
│   │   ├── app.routes.ts       # Configuration du routage
│   │   └── app.component.ts    # Composant racine
│   ├── assets/                 # Images, fonts, etc.
│   ├── index.html              # Page principale
│   └── main.ts                 # Point d'entrée
├── .editorconfig               # Configuration éditeur
├── .gitignore                  # Fichiers ignorés par Git
├── .prettierrc                 # Configuration formateur code
├── angular.json                # Configuration Angular CLI
├── enset-app-tp3.iml           # Fichier module IntelliJ
├── package.json                # Dépendances npm
├── package-lock.json           # Verrouillage versions
├── tsconfig.app.json           # Configuration TS app
├── tsconfig.json               # Configuration TS principale
├── tsconfig.spec.json          # Configuration TS tests
└── README.md                   # Ce fichier# 📘 Compte Rendu : TP3 – Angular 19 & Spring Boot REST API

## 1. Introduction
Ce TP porte sur le développement d'une application frontend avec **Angular 19** qui communique avec une **API REST Spring Boot** pour la gestion de produits. L'objectif principal est de mettre en pratique les concepts fondamentaux d'Angular : composants standalone, services, injection de dépendances, programmation réactive avec RxJS, et communication HTTP avec un backend.

## 2. Structure du Projet
L'organisation du projet Angular suit une architecture modulaire standard :

```text
EnsetAppTp3/
├── .vscode/                    # Configuration VS Code
├── public/                     # Assets publics
├── src/
│   ├── app/
│   │   ├── products/           # Composant d'affichage des produits
│   │   ├── services/           # Service d'appels API
│   │   ├── app.config.ts       # Configuration globale (HttpClient)
│   │   ├── app.routes.ts       # Configuration du routage
│   │   └── app.component.ts    # Composant racine
│   ├── assets/                 # Images, fonts, etc.
│   ├── index.html              # Page principale
│   └── main.ts                 # Point d'entrée
├── .editorconfig               # Configuration éditeur
├── .gitignore                  # Fichiers ignorés par Git
├── .prettierrc                 # Configuration formateur code
├── angular.json                # Configuration Angular CLI
├── enset-app-tp3.iml           # Fichier module IntelliJ
├── package.json                # Dépendances npm
├── package-lock.json           # Verrouillage versions
├── tsconfig.app.json           # Configuration TS app
├── tsconfig.json               # Configuration TS principale
├── tsconfig.spec.json          # Configuration TS tests
└── README.md                   # Ce fichier# EnsetAppTp3

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.9.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
