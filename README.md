# NgNtpdGist

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## How to get started

To get started, generate a Personal Access Token by going to (https://github.com/settings/tokens)
then click on “Personal Access Tokens” from the left sidebar and click on the “Generate new token”
button on the top right. From here, enter “ActiveMeasure Test” as the “Token Description” and in the
“Select scopes” area check the checkbox for “gist - Create gists”. An access token will then be
generated for you, copy the access token and replace `xxx` in `env.ts` with that token

To start the application run
- ng serve


## How thing are done

- Used Angular 7 cli to generate blank application
- Refactored application to be modular and Robert friendly
- Each big component got its own module with routing (this is done to solve child route problem)
- Using ng-bootstrap to have the look and feel and to add responsiveness
- For graphs used the Angular-Highchart lib

## Core module

In core module application level modules are imported, styles are applied

## Notepad module

Notepad module is responsible for all the actions with notes. Notepad got title, which is saved with `Save` button in the main page. The `Delete`
button would reset the state of the notepad and `View Stats` would navigate to statistics page

Adding new note is done with note form. It validates user input length and uniqness of the title. Added note dynamically is saved in the localStorage.
Note can be deleted and its happening dynamically

Every action that notes nodepad is doing is happening inside notes.service file

## Stats module

Stats module is responsible for displaying statistics for gist. It is done with Angular-Highchart lib. First value is fetch 5second before the page is opened.
Every time that user would click load more, new statisitcs would added into graph. The interval is calculated from the last time data was fetch. This is done
to avoid discrete values.

`Close` button would navigate back to notepad

## Shared module

Here are components/services/pipes and everything that is shared inside the application.

- rest service implemented with authoriation mechanism
- storage service using localStorage
- utl service for common small functions

Enjoy