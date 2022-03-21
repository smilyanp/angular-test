# Test Angular App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.
Node v14.17.3
NPM v8.1.4

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Overview

The project has 3 tasks. First we will list a set of images from an API. We will then introduce searching functionality, so that when a user searches the list of images will update. Finally, we will create a new page so that when you click a given image, it will take you to that page and it will display more details about the image.

### Task 1

Use API endpoint to list all images for the star search result https://images-api.nasa.gov/search?q=star

For each image display
- The image
- The title

### Task 2

On the original page from Task 1, add a search box at the top of the page. When a user types make an updated API call to https://images-api.nasa.gov/search?q={searchTerm} and display the new results on the page.

### Task 3

Add functionality to be able to click on an image and go to a separate page where you can see more details about the image. Use https://images-api.nasa.gov/asset/{nasa_id} endpoint.

On the new page display additional information for the image. Display
- The image
- The title
- Description
- Date it was created
