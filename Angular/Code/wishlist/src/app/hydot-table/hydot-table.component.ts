import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
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


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.dataSource.data = this.getMockData();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getMockData() {
    return [
      { BatchId: '102', ChequeId: 'CHK001', AccountName: 'John Doe', Picture: 'https://glydetek.com/wp-content/uploads/2020/09/gt_only_logo.png' },
    { BatchId: '103', ChequeId: 'CHK002', AccountName: 'Jane Smith', Picture: 'https://glydetek.com/wp-content/uploads/2020/09/gt_only_logo.png' }
      // Add more mock data here
    ];
  }


  dataSource = new MatTableDataSource<any>([
    {
      BatchId: '102',
      ChequeId: 'CHK001',
      AccountName: 'John Doe',
      Picture: 'https://glydetek.com/wp-content/uploads/2020/09/gt_only_logo.png',
    },
    {
      BatchId: '103',
      ChequeId: 'CHK002',
      AccountName: 'Jane Smith',
      Picture: 'https://glydetek.com/wp-content/uploads/2020/09/gt_only_logo.png',
    },
  ]);

  displayedColumns: string[] = ['picture', 'action', 'batchId', 'chequeId', 'accountName'];

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



  viewDetails(row: any): void {
    alert('Viewing details for: ' + row.ChequeId);
  }

  stopBatch(row: any): void {
    alert('Stopping batch for: ' + row.BatchId);
  }
}
