import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import * as XLSX from 'xlsx';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { Router } from '@angular/router';



@Component({
  standalone: true,
  selector: 'app-hydot-table',
  templateUrl: './hydot-table.component.html',
  styleUrls: ['./hydot-table.component.css'],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
  ],
})
export class HydotTableComponent implements OnInit {

  constructor(private router: Router) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  @Input() data: any[] = []; // Data to display in the table
  @Input() dataColumns: string[] = []; // Columns to display
  @Input() menuItems: any[] = []; // Actions


  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = [];

  ngOnInit(): void {
    this.dataSource.data = this.data;
    this.displayedColumns = [...this.dataColumns, 'action'];
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }

  getFileType(value: string): string {
    if (/\.(jpg|jpeg|png|gif)$/i.test(value)) return 'image';
    if (/\.(mp4|mov|avi)$/i.test(value)) return 'video';
    if (/\.(mp3|wav)$/i.test(value)) return 'audio';
    if (/\.(pdf)$/i.test(value)) return 'pdf';
    return 'text';
  }

  handleAction = (action: any, row: any) => {
    console.log("Handle Trigger");

    if (action.type === 'function') {
      // Handle function type actions
      const params = action.columnNames.map((col: string) => {
        return row[col];
      });
      action.onClick(...params);  // Pass parameters to the action handler
    } else if (action.type === 'route') {
      // Handle route type actions
      let routePath = action.path;
      // Replace the placeholders in the route path with the row's column data
      Object.keys(row).forEach((key) => {
        const value = row[key];
        const placeholder = `:${key}`;
        if (routePath.includes(placeholder)) {
          routePath = routePath.replace(placeholder, value);
        }
      });
      // Navigate to the dynamic route
      this.router.navigate([routePath]);
    }
  }




  now = new Date();
 datePart = this.now.toISOString().split('T')[0]; // YYYY-MM-DD
 timePart = this.now.toTimeString().split(' ')[0].replace(/:/g, '-'); // HH-MM-SS
 timestamp = `${this.datePart}_${this.timePart}`; // Combine date and time

 excelName = "HydotTech_"+this.timestamp+".xlsx"
 pdfName = "HydotTech_"+this.timestamp+".pdf"
 printName = "HydotTech_"+this.timestamp


  exportToExcel(): void {
    const tableData = this.dataSource.filteredData;
    const headers = Object.keys(tableData[0] || {});
    const rows = tableData.map(row => Object.values(row));

    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...rows]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Table Data');
    XLSX.writeFile(workbook,this.excelName);
  }

  exportToPDF(): void {
    const doc = new jsPDF();

    // Fetch headers and data
    const headers = this.displayedColumns.map(column => ({
      header: column.toUpperCase(),
      dataKey: column
    }));
    const data = this.dataSource.filteredData;

    // Generate the table
    autoTable(doc, {
      columns: headers,
      body: data,
      theme: 'striped',
      headStyles: { fillColor: [0, 123, 255] }, // Customize header color
    });

    // Save the PDF
    doc.save('table-data.pdf');
  }

  printTable(): void {
    const tableElement = document.querySelector('.table-Selector table') as HTMLElement;

    if (!tableElement) {
      console.error('Table not found!');
      return;
    }

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = tableElement.outerHTML;

    const actionIndex = Array.from(tempDiv.querySelectorAll('th')).findIndex(th =>
      th.textContent?.trim().toLowerCase() === 'action'
    ) + 1;

    if (actionIndex > 0) {
      tempDiv.querySelectorAll(`th:nth-child(${actionIndex})`).forEach(th => th.remove());
      tempDiv.querySelectorAll(`td:nth-child(${actionIndex})`).forEach(td => td.remove());
    }

    const modifiedTable = tempDiv.querySelector('table')?.outerHTML || '';

    const popupWin = window.open('', '_blank', 'width=1000,height=1000');
    popupWin?.document.write(`
      <html>
        <head>
          <style>
            @page {
              margin: 0; /* Remove default margins to suppress headers/footers */
            }
            body {
              font-family: Arial, sans-serif;
              margin: 20px;
            }
            table {
              width: 100%;
              border-collapse: collapse;
              margin: 20px 0;
            }
            th, td {
              border: 1px solid #ddd;
              padding: 8px;
              text-align: left;
            }
            th {
              background-color: #f2f2f2;
            }
            .header {
              text-align: center;
              margin-bottom: 20px;
            }
            .footer {
              margin-top: 20px;
              text-align: center;
              font-size: 12px;
            }
          </style>
          <title>${this.printName}</title>
        </head>
        <body>
          <div class="header">
            <h2>Hydot Tech</h2>
            <p>Address Line 1<br>Address Line 2<br>Contact: +123-456-7890</p>

          </div>
          ${modifiedTable}
          <div class="footer">
            <p>Thank you for shopping with us!</p>
          </div>
        </body>
      </html>
    `);
    popupWin?.document.close();
    popupWin?.print();
  }

















}
