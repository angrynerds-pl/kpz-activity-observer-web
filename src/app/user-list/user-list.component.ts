import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';

export interface User {
  number: number;
  name: string;
  surname: string;
}

const users: User[] = [
  {number: 1,name: 'Mike', surname: 'Tyson'},
  {number: 2,name: 'Joe', surname: 'Pesci'},
  {number: 3,name: 'Anna', surname: 'Kendrick'},
  {number: 4,name: 'Jordan', surname: 'Belfort'},
  {number: 5,name: 'Monica', surname: 'Belluci'},
  {number: 6,name: 'Monica', surname: 'Belluci'},
  {number: 7,name: 'Monica', surname: 'Belluci'},
  {number: 8,name: 'Monica', surname: 'Belluci'},
  {number: 9,name: 'Monica', surname: 'Belluci'},
  {number: 10,name: 'Monica', surname: 'Belluci'},
  {number: 11,name: 'Monica', surname: 'Belluci'},
  {number: 12,name: 'Monica', surname: 'Belluci'},
  {number: 13,name: 'Monica', surname: 'Belluci'}
];

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  initialSelection = [];
  allowMultiSelect = false;
  selection = new SelectionModel<User>(this.allowMultiSelect, this.initialSelection);


  constructor() { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  displayedColumns: string[] = ['number','name', 'surname', 'checkbox'];
  dataSource = new MatTableDataSource(users);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected == numRows;
  }
}
