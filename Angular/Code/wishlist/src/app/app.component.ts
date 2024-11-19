import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToDoComponent } from './to-do/to-do.component';
import { HydotTableComponent } from './hydot-table/hydot-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ToDoComponent,
    HydotTableComponent,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Corrected from `styleUrl` to `styleUrls`
})
export class AppComponent {
  title = 'Hydot';

  editUser = (id:any, name:any) => {
    console.log(`Edit User's ID: ${id}, Name: ${name}`);
  };


  menuItems = [
    {
      icon: 'edit',
      text: 'Edit',
      type: 'function',
      onClick: (Id: any, name:any) => {
        this.editUser(Id, name);
      },
      columnNames: ['id', "name"]
    },

    {
      icon: 'add',
      text: 'Add',
      type: 'route',
     path: "/user/:id",
    },
  ];



  dataColumns = ['id', 'name', 'Url','a','b','c','d','e','f']; // This is your dynamic list of columns

  // Define the order of columns, making sure 'action' comes first





  data = [
    { id: 1, name: 'John Doe', Url: 'https://adminpanel.hydottech.com/static/media/HydotLogo.04eff451eee1d8e110a9.png',a:"aLanga",b:"bLanga",c:"cLanga",d:"dLanga",e:"eLanga",f:"fLanga" },
    { id: 2, name: 'Jane Doe', Url: 'https://adminpanel.hydottech.com/static/media/HydotLogo.04eff451eee1d8e110a9.png',a:"aLanga",b:"bLanga",c:"cLanga",d:"dLanga",e:"eLanga",f:"fLanga" },
    { id: 3, name: 'Kofi Doe', Url: 'https://fashionapi.hydottech.com/storage/mmynXBosXA9MkiKUWbGoBBTSilmUITCNAkG1Z7sK.mp4',a:"aLanga",b:"bLanga",c:"cLanga",d:"dLanga",e:"eLanga",f:"fLanga" },
  ];




}
