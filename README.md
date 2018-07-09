# My Notes App

@author stevelyall

Example of a simple notes app built with Angular.
Notes are retrieved from and sent to the REST API backend. 

Unit tests are written for components and services.

#### Features:
* View a list of all notes
* Create new notes, with a title and content

#### Validation rules:
* Title has a max length of 255 characters
* Note content has a max length of 1024 characters
 
### Requirements:
* [My Notes Api](https://github.com/stevelyall/my-notes-api) Running at http://localhost:8080/
* NPM

Tested in Chrome 67 on OSX. 

Uses  [Angular CLI](https://github.com/angular/angular-cli) and [Angular Material](https://material.angular.io/).


## Install dependencies

Run `npm install` to install the project's dependencies before running. 
## Development server

Run `ng serve` for a local dev server. By default it runs on port `9001`, this can be modified in `environment.ts`.

It can be accessed at http://localhost:4200/.

## Build

Run `ng build` to build.

## Running unit tests

`ng test` to run the unit tests.
