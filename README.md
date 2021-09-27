# GitHub Repository Listing Assessment

This project was made for Fyle Internship Assessment by Leo Adlakha. 

![Demo Image](src/assets/DemoImage.png)

## Modifications and Assumptions

- Default Size Taken - 20 ( for symmetric design purposes ).
- Modified the design a little to accomadate 4 repositories in a row in the grid layout.
- This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

```
$ ng build
```

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

```
$ ng build
```

## Running unit tests

Run `ng test` in terminal to execute the unit tests via [Karma](https://karma-runner.github.io).

```
$ ng test
```

Wrote 12 Unit Test to check the basic functionalities of the components. Components/Services Tested : 

- AppComponent
- MainComponent
- UserDataService

## To run this project on your local environment

Follow these steps to run the project on your local ( MacOS / Linux ) .

Prerequisites -

- [Angular CLI](https://github.com/angular/angular-cli) version 12.2.6.

1. Clone the github repository to your system and change the directory.

```
$ git clone https://github.com/Leo-Adlakha/GitHub-Repository-Listing.git
$ cd GitHub-Repository-Listing/
```

2. Install all the necessary packages. Install npm to run the following command.

```
$ npm install
```

3. Serve the application on your local.

```
$ ng serve
```

go to your preferred browser and route to localhost:4200 to open the application.

Thanks! Please take care not to make too many requests for which the Github API gives an exception ( Error Code: 403 ) for requests exceeded. 