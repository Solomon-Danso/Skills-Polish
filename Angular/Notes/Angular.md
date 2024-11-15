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

## Condifitonal Rendering

component.tsx
import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css'
})
export class ToDoComponent {
  fullName = "Solomon ToDo";
  formIsInvalid = false;
  isAdmin = false;
}

component.html
<p>to-do works! {{fullName}}</p>

<button type="submit" [disabled]="formIsInvalid">Submit</button>


@if(isAdmin){
  <p>Welcome Sir</p>
} @else{
<p>Welcome Employee</p>
}

## Looping

ingredientList = [
    {name: 'noodles', quantity: 1},
    {name: 'miso broth', quantity: 1},
    {name: 'egg', quantity: 2},
  ];


<ul>
  @for (ingredient of ingredientList; track ingredient.name) {
    <li>{{ ingredient.quantity }} - {{ ingredient.name }}</li>
  }
</ul>

The Track will be tracking the key





## User Interaction

<div style="display: flex; flex-direction: column; gap: 1rem; width: 10%; padding: 4rem;">
  @for (ingredient of ingredientList; track ingredient.name) {

    <button (click)="soloFunction(ingredient.name)">{{ ingredient.quantity }} - {{ ingredient.name }}</button>
  }
</div>

components.tsx
soloFunction = (hey:any) =>{
alert(hey)

  }

## Sharing Logic
What are services?
Services are reusable pieces of code that can be injected

Create one with the following command [ng g s ChampionService]

in the champion-service.service.tsx file add this 
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChampionServiceService {

  constructor() { }

rollCall = (qty: number) =>{
  alert(qty)
}



}


then call it in the ToDo class as this 
import { Component, Inject } from '@angular/core';
import { ChampionServiceService } from '../champion-service.service';

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css'
})
export class ToDoComponent {
  fullName = "Solomon ToDo";
  formIsInvalid = false;
  isAdmin = false;

  ingredientList = [
    {name: 'noodles', quantity: 1},
    {name: 'miso broth', quantity: 1},
    {name: 'egg', quantity: 2},
  ];


 soloFunction = (hey:any) =>{
alert(hey)

  }

  constructor(private rollCaller: ChampionServiceService) {}

  quantity = (qty:number) =>{
    this.rollCaller.rollCall(qty)
  }


}

Link it to the html as this 
<!-- ingredient-list.component.html -->
<div style="display: flex; flex-direction: column; gap: 1rem; width: 10%; padding: 4rem;">
Quantity

  @for (ingredient of ingredientList; track ingredient.name) {

    <button (click)="quantity(ingredient.quantity)">{{ ingredient.quantity }} - {{ ingredient.name }}</button>
  }
</div>







