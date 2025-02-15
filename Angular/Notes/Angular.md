# Mastering Angular

## Installation
Install Angular CLI globally:

```bash
npm install -g @angular/cli
```

Check the installed version:

```bash
ng version
```

## Create Project
Create a new Angular project:

```bash
ng new wishlist
```

Run the application:

```bash
ng serve
```

---

## Components

Angular applications are built from individual components, much like how Next.js uses folders to create routes.

### Structure of a Component
A component consists of three files:

1. **`component.ts`** - For the logic and behavior (TypeScript code).

   ```typescript
   import { Component } from '@angular/core';
   import { RouterOutlet } from '@angular/router';

   @Component({
     selector: 'app-root',
     standalone: true,
     imports: [RouterOutlet],
     templateUrl: './app.component.html',
     styleUrl: './app.component.css',
   })
   export class AppComponent {
     title = 'Hydot';
   }
   ```

2. **`component.html`** - For the view (HTML).

   ```html
   <div class="test">
     Hi {{title}}
   </div>
   ```

3. **`component.css`** - For styles (CSS).

   ```css
   .test {
     background-color: red;
   }
   ```

### Key Properties of a Component
- **@Component Decorator**: Defines metadata for the component.
- **HTML Template**: Defines the DOM structure.
- **CSS Selector**: Identifies the component in HTML.
- **TypeScript Class**: Contains logic like state management and event handling.

To generate a component:

```bash
ng generate component ToDo
```

---

## Importing Components

### Example
**`ToDoComponent`**:
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css',
})
export class ToDoComponent {
  fullName = "Solomon ToDo";
}
```

**`AppComponent`**:
```typescript
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToDoComponent } from './to-do/to-do.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToDoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Hydot';
}
```

**`app.component.html`**:
```html
<app-to-do></app-to-do>
<div class="test">
  Hi {{title}}
</div>
```

---

## Conditional Rendering

**`component.ts`**:
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css',
})
export class ToDoComponent {
  fullName = "Solomon ToDo";
  formIsInvalid = false;
  isAdmin = false;
}
```

**`component.html`**:
```html
<p>To-do works! {{fullName}}</p>
<button type="submit" [disabled]="formIsInvalid">Submit</button>
<p *ngIf="isAdmin">Welcome Sir</p>
<p *ngIf="!isAdmin">Welcome Employee</p>
```

---

## Looping

**`component.ts`**:
```typescript
ingredientList = [
  { name: 'noodles', quantity: 1 },
  { name: 'miso broth', quantity: 1 },
  { name: 'egg', quantity: 2 },
];
```

**`component.html`**:
```html
<ul>
  <li *ngFor="let ingredient of ingredientList; trackBy: trackByFn">
    {{ ingredient.quantity }} - {{ ingredient.name }}
  </li>
</ul>
```

---

## User Interaction

**`component.html`**:
```html
<div style="display: flex; flex-direction: column; gap: 1rem; width: 10%; padding: 4rem;">
  <button *ngFor="let ingredient of ingredientList; trackBy: trackByFn" (click)="soloFunction(ingredient.name)">
    {{ ingredient.quantity }} - {{ ingredient.name }}
  </button>
</div>
```

**`component.ts`**:
```typescript
soloFunction(name: string) {
  alert(name);
}
```

---

## Sharing Logic with Services

### Creating a Service
```bash
ng generate service ChampionService
```

**`champion-service.service.ts`**:
```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChampionService {
  rollCall(qty: number) {
    alert(qty);
  }
}
```

### Using the Service
**`ToDoComponent.ts`**:
```typescript
import { Component } from '@angular/core';
import { ChampionService } from '../champion-service.service';

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css',
})
export class ToDoComponent {
  ingredientList = [
    { name: 'noodles', quantity: 1 },
    { name: 'miso broth', quantity: 1 },
    { name: 'egg', quantity: 2 },
  ];

  constructor(private rollCaller: ChampionService) {}

  quantity(qty: number) {
    this.rollCaller.rollCall(qty);
  }
}
```

---

## Inputs

Inputs are like React props, used to pass data to a child component.

**`UserComponent.ts`**:
```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <p>The user's name is {{ username }}</p>
  `,
  standalone: true,
})
export class UserComponent {
  @Input() username = '';
}
```

**`AppComponent.ts`**:
```typescript
import { Component } from '@angular/core';
import { UserComponent } from './user.component';

@Component({
  selector: 'app-root',
  template: `
    <app-user username="Solomon Money"></app-user>
  `,
  standalone: true,
  imports: [UserComponent],
})
export class AppComponent {}
```

---

## Outputs

Outputs pass events from child to parent.

**`ChildComponent.ts`**:
```typescript
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <button (click)="toggler()">Toggle Message</button>
  `,
  standalone: true,
})
export class ChildComponent {
  @Output() theEventer = new EventEmitter<boolean>();
  display = false;

  toggler() {
    this.display = !this.display;
    this.theEventer.emit(this.display);
  }
}
```

**`AppComponent.ts`**:
```typescript
import { Component } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
  selector: 'app-root',
  template: `
    <app-child (theEventer)="EventGrabber($event)"></app-child>
    <p *ngIf="showMessage">Display this message</p>
  `,
  standalone: true,
  imports: [ChildComponent],
})
export class AppComponent {
  showMessage = false;

  EventGrabber(item: boolean) {
    this.showMessage = item;
  }
}
```


---

## Deferrable Views

we can load some of those resources later with deferrable views.

**`AppComponent.ts`**:
```typescript
import {Component} from '@angular/core';
import {CommentsComponent} from './comments.component';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>How I feel about Angular</h1>
      <article>
        <p>
          Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
        </p>
      </article>

      @defer (on viewport) {
      <comments />
      } @placeholder {
      <p>Future comments</p>
      } @loading (minimum 2s) {
      <p>Loading comments...</p>
      }
    </div>
  `,
  standalone: true,
  imports: [CommentsComponent],
})
export class AppComponent {}

```


**`CommentComponent.ts`**:
```typescript
import {Component} from '@angular/core';

@Component({
  selector: 'comments',
  template: `
    <ul>
      <li>Building for the web is fantastic!</li>
      <li>The new template syntax is great</li>
      <li>I agree with the other comments!</li>
    </ul>
  `,
  standalone: true,
})
export class CommentsComponent {}

```


---

## Optimizing images

we can load images faster.

**`AppComponent.ts`**:
```typescript
import {Component} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-user',
  template: `
    <p>Username: {{ username }}</p>
    <p>Preferred Framework:</p>
    <ul>
      <li>
        Static Image:
        <img ngSrc="/assets/logo.svg" alt="Angular logo" width="32" height="32" priority/>
      </li>
      <li>
        Dynamic Image:
        <img [ngSrc]="logoUrl" [alt]="logoAlt" width="32" height="32" priority/>
      </li>
    </ul>
  `,
  imports: [NgOptimizedImage],
})
export class UserComponent {
  logoUrl = '/assets/logo.svg';
  logoAlt = 'Angular logo';
  username = 'youngTech';
}


```

---

## Enabling Routing
With routing we can access different part of the application

**`app.routes.ts`**:

```typescript
import {Routes} from '@angular/router'
export const routes: Routes = [];
```

**`app.config.ts`**:

```typescript
import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';
import {routes} from './app.routes';
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
```

**`app.component.ts`**:

```typescript
import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a href="/">Home</a>
      |
      <a href="/user">User</a>
    </nav>
  `,
  standalone: true,
  imports: [RouterOutlet],
})
export class AppComponent {}

```
---

## Defining Routing
With routing we can access different part of the application

**`app.routes.ts`**:

```typescript
import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {UserComponent} from './user/user.component';

export const routes: Routes = [

   {
    path: '',
     title: 'App Home Page',
    component: HomeComponent,
  },

  {
    path: '/user',
    title: 'App User Page',
    component: UserComponent,
  },

  

  
];

```

**`app.config.ts`**:

```typescript
import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';
import {routes} from './app.routes';
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
```

**`app.component.ts`**:

```typescript
import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a href="/">Home</a>
      |
      <a href="/user">User</a>
    </nav>
  `,
  standalone: true,
  imports: [RouterOutlet],
})
export class AppComponent {}

```

---


## Linking Route
With routing we can access different part of the application

**`app.routes.ts`**:

```typescript
import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {UserComponent} from './user/user.component';

export const routes: Routes = [

   {
    path: '',
     title: 'App Home Page',
    component: HomeComponent,
  },

  {
    path: '/user',
    title: 'App User Page',
    component: UserComponent,
  },

  

  
];

```

**`app.config.ts`**:

```typescript
import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';
import {routes} from './app.routes';
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
```

**`app.component.ts`**:

```typescript
import {Component} from '@angular/core';
import {RouterOutlet, RouterLink} from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a routerLink="/">Home</a>
      |
      <a routerLink="/user">User</a>
    </nav>
    <router-outlet />
  `,
  standalone: true,
  imports: [RouterOutlet, RouterLink],
})
export class AppComponent {}


```

---



# Forms Overview

In Angular, there are two types of forms: template-driven and reactive.

### Template-driven approach.

**`app.component.ts`**:

```typescript
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-user',
  template: `
    <p>Username: {{ username }}</p>
    <p>{{ username }}'s favorite framework: {{ favoriteInput }}</p>
  
        <input  type="text" [(ngModel)]="favoriteInput" placeholder="Enter Favourite Framework"/>
  
  `,
  standalone: true,
  imports: [FormsModule],
})
export class UserComponent {
  favoriteInput = '';
  username = 'youngTech';
};



```

### Reactive Forms.

**`app.component.ts`**:

```typescript
import {Component} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <form [formGroup]="profileForm" (ngSubmit)="handleSubmit()">
      <input type="text" formControlName="name" />
      <input type="email" formControlName="email" />
      <button type="submit">Submit</button>
    </form>

    <h2>Profile Form</h2>
    <p>Name: {{ profileForm.value.name }}</p>
    <p>Email: {{ profileForm.value.email }}</p>
  `,
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class AppComponent {
  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  });

  handleSubmit() {
    alert(this.profileForm.value.name + ' | ' + this.profileForm.value.email);
  }
}



```

---

## Validation

**`app.component.ts`**:

```typescript
import {Component} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <form [formGroup]="profileForm">
      <input type="text" formControlName="name" name="name" />
      <input type="email" formControlName="email" name="email" />
      <button type="submit" [disabled]="!profileForm.valid">Submit</button>
    </form>
  `,
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class AppComponent {
  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
}


```

---

# Injectable Services

**`car.service.ts`**:

```typescript
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  cars = ['Sunflower GT', 'Flexus Sport', 'Sprout Mach One'];

  getCars(): string[] {
    return this.cars;
  }

  getCar(id: number) {
    return this.cars[id];
  }
}

```

**`app.component.ts`**:

```typescript
import {Component, inject} from '@angular/core';
import {CarService} from './car.service';

@Component({
  selector: 'app-root',
  template: '<p> {{ carService.getCars() }} </p>',
  standalone: true,
})
export class AppComponent {
  carService = inject(CarService);
}
```
---




## Inject-based dependency injection Services

**`car.service.ts`**:

```typescript
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  cars = ['Sunflower GT', 'Flexus Sport', 'Sprout Mach One'];

  getCars(): string[] {
    return this.cars;
  }

  getCar(id: number) {
    return this.cars[id];
  }
}

```

**`app.component.ts`**:

```typescript
import {Component, inject} from '@angular/core';
import {CarService} from './car.service';

@Component({
  selector: 'app-root',
  template: `
    <p>Car Listing: {{ display }}</p>
  `,
  standalone: true,
})
export class AppComponent {
  display = '';
  carService = inject(CarService);

  constructor() {
    this.display = this.carService.getCars().join(' ⭐️ ');
  }
}


```
---


## Constructor-based dependency injectio

**`car.service.ts`**:

```typescript
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  cars = ['Sunflower GT', 'Flexus Sport', 'Sprout Mach One'];

  getCars(): string[] {
    return this.cars;
  }

  getCar(id: number) {
    return this.cars[id];
  }
}

```

**`app.component.ts`**:

```typescript
import {Component} from '@angular/core';
import {CarService} from './car.service';

@Component({
  selector: 'app-root',
  template: `
    <p>Car Listing: {{ display }}</p>
  `,
  standalone: true,
})
export class AppComponent {
  display = '';

  constructor(private carService: CarService) {
    this.display = this.carService.getCars().join(' ⭐️ ');
  }
}



```
---
# Pipes

Pipes are functions that are used to transform data in templates

**`app.component.ts`**:

```typescript
import {Component} from '@angular/core';
import {LowerCasePipe} from '@angular/common';

@Component({
  selector: 'app-root',
  template: `
    {{ username | lowercase }}
  `,
  standalone: true,
  imports: [LowerCasePipe],
})
export class AppComponent {
  username = 'yOunGTECh';
}


```

## Formatting data with pipes

**`app.component.ts`**:

```typescript
import {Component} from '@angular/core';
import {DecimalPipe, DatePipe, CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li>Number with "decimal" {{ num | number : '3.2-2' }}</li>
      <li>Date with "date" {{ birthday | date : 'medium' }}</li>
      <li>Currency with "currency" {{ cost | currency }}</li>
    </ul>
  `,
  standalone: true,
  imports: [DecimalPipe, DatePipe, CurrencyPipe],
})
export class AppComponent {
  num = 103.1234;
  birthday = new Date(2023, 3, 2);
  cost = 4560.34;
}



```
---


## Create a pipe

**`app.component.ts`**:

```typescript
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'reverse',
  standalone: true,
})
export class ReversePipe implements PipeTransform {
  transform(value: string): string {
    let reverse = '';

    for (let i = value.length - 1; i >= 0; i--) {
      reverse += value[i];
    }

    return reverse;
  }
}


```

**`reverse.pipe.ts`**:

```typescript
import {Component} from '@angular/core';
import {ReversePipe} from './reverse.pipe';

@Component({
  selector: 'app-root',
  template: `
    Reverse Machine: {{ word | reverse }}
  `,
  standalone: true,
  imports: [ReversePipe],
})
export class AppComponent {
  word = 'You are a champion';
}


```

---

Production Command 
ng build --configuration production



