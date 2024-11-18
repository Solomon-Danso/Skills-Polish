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

  menuItems = [
    {
      icon: 'edit',
      text: 'Edit',
      type: 'function',
      onClick: (id:any) => console.log(`Edit ${id}`),
      columnNames: ['id']
    },
  ];

  dataColumns = ['id', 'name', 'imageUrl'];

  data = [
    { id: 1, name: 'John Doe', imageUrl: 'https://example.com/image1.jpg' },
    { id: 2, name: 'Jane Doe', imageUrl: 'https://example.com/image2.png' },
  ];



}
