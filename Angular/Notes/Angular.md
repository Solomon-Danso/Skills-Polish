# Mastering Angular 

## Installation
npm install -g @angular/cli 
ng version 

## Create Project
ng new wishlist

Run the application with the following command [ng serve]


## Component 
Angular is like individual components combined into an app, just like individual  folders make a route in nextjs 

Every component consist of 
1. component.ts => For the Javascript Code

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hydot';
}


2. component.html => For the view

<div class="test">
Hi {{title}}

</div>



3. component.css => for the style

.test{
  background-color: red;
}

Every component has the following core properties:

- A @Componentdecorator that contains some configuration
- An HTML template that controls what renders into the DOM
- A CSS selector that defines how the component is used in HTML
- A TypeScript class with behaviors such as managing state, handling user input, or      fetching data from a server.

To create a component type this command [ng generate component ToDo]

## Importing 
We are going to import the ToDo component into the app component and call it in the app.component.html file using the todo selector 

- toDo Component
import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css'
})
export class ToDoComponent {
  fullName = "Solomon ToDo"
}

- app Component
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToDoComponent } from './to-do/to-do.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToDoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hydot';
}

- app html 
<app-to-do></app-to-do>

<div class="test">
Hi {{title}}

</div>

