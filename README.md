<p align="center">
  <a href="https://noroof.dev/" target="blank"><img src="https://noroof.dev/assets/img/logo.png" height="120" alt="noRoof Logo" /></a>
</p>

# AngularTemplate

Angular Template is a boilerplate project for [Angular](https://angular.dev/) applications using [Angular Material](https://material.angular.io/) as the UI Components library. It will have some common features required in most Angular projects and will follows best coding practices. Every project have specifics needs regarding UI and external libraries needed, so this template won't cover that leaving it to each project implementation.

## Features

- Public & Private routes
- Layout with header, footer and side menu for private pages
- Lazy loading for components
- General project structure
  - pages: components that will be routed, and subfolders with components only used by specific page
  - components: reusable components. 
  - services: facade service (to handle all logic and being used by components and resolvers), data service to store data with signals and source service with mocked data to be changed with real source like an API, firestore or other
  - resolvers: to load needed data if it's not already in the data service
  - guards: to protect routes and with an example of roles verification
- Reusable list component, to be used in any simple CRUD feature. It also has a confirm dialog to prevent one click deletes.
- Example list page, using reusable component, implementing edit and create through a material dialog.
- Pages connected to facade service serving as an example of implementation and usage.
- Spinner
- Toaster
- Dummy Login

## Next steps

Next features to be added:

- Custom Form Controls
- Forms feedback examples on validation
- Multi language

## Services

### facade

### data

### source

## Guards

## Resolvers

## Pages

### Dummy Login

### Example List

### Example Detail

## Components

### CRUD Handler

### Confirm Dialog

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Stay in touch

- Website - [https://noroof.dev](https://noroof.dev/)
- Twitter - [@noroofdev](https://twitter.com/noroofdev)
