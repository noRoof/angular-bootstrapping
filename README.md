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
- Add unit test
- Forms feedback examples on validation
- Multi language

## Services

### facade

To have the code cleaner we want to have responsibilities well organized. So we have a facade service which will be the only one that will be used by components and resolvers. It allows us to decouple or implementation in specific data or sources, so if they change in the future, we'll only have to make changes in the facade service and not in all the application.

### data

We want to store our data so we don't need to go to the source to retrieve it every time we need it. To do that we implement the data service making use of the Signals which allow us to store that data and consume it in the application while having all their performance benefits.

### source

It's the one that will get the information from the specific source in the future. By now we only store the information in memory, but in the future we can call our API, or use Firestore, Supabese or other cloud service.

### spinner

Spinner service to handle the spinner information, it's called to notify with the spinner needs to be shown or not.

## Guards

Basic and dummy guard to check that the user is logged in before letting the user enter to private pages.

## Resolvers

It's called in the app route configuration. It checks if the data is already in available, and if it's available returns it, if not, it loads needed data and returns it.

## Pages

### Dummy Login

Simple example of a login which is dummy and only expects to have some information entered in the form.

### Example List

List page that use the CRUD Handler component and render the data in it. It also has create and edit functionalities using a dialog.

### Example Detail

Dummy detail components as an example of a detail page showing how to use a form group and form array.

## Components

### CRUD Handler

Component to be used for general CRUDs, it render a table with the information provided and the actions according to the inputs. View, Edit, Delete and Edit are supported and calls the specific outputs.

### Confirm Dialog

Reusable dialog component used for actions confirmation

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
- Linkedin - [@noroof-development](https://www.linkedin.com/company/noroof-development)
