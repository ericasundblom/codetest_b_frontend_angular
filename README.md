## SOME FROM ME

This version needs both the repository codetest_b_backend_spring and the repository codetest_b_frontend_angular. The readme tells about both.


I used Visual Studio Code for this assignment. Visual Studio Code gives some convenient help. Below are some bash commands that can be used from the terminal to handle this assignment. However the bash commands to require support for java maven and a suitable jdk or similar.

The frontend is made as an Angular application. The backend is made with Spring. And the database is MariaDB.

I have frontend on http://localhost:4200, backend on http://localhost:8080 and database on http://localhost:3306. If you use different ports you must edit the project files containing port info, fronend - environment file(s), backend application.properties. 

In application properties you must set up a connection to your database, using your credentials.

For running this project in development mode start both frontend and backend. The frontend is started with ng serve --open. This requires Angular support. The backend is started with mvn spring-boot:run. This requires support for spring boot projects in maven (java). The java version is set to 12.

Testing backend logic can be done with ./mvnw test from the root of the backend.

I have not seen any purpose of forwarding any more to production.




## THIS IS WHAT ANGULAR WRITES WHEN CREATING A PROJECT WITH THE ANGULAR CLI:

# CodetestFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).




## LICENSE

This project is only intended as a sample for Crosskey. Licencing follows what the dependecies and so on gives.
