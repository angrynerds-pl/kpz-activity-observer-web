import { Component, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

export interface User {
  name: string;
  surname: string;
}

const users: User[] = [
  {name: 'Mike', surname: 'Tyson'},
  {name: 'Joe', surname: 'Pesci'},
  {name: 'Anna', surname: 'Kendrick'},
  {name: 'Jordan', surname: 'Belfort'},
  {name: 'Monica', surname: 'Belluci'},
  {name: 'Monica', surname: 'Belluci'},{name: 'Monica', surname: 'Belluci'},{name: 'Monica', surname: 'Belluci'},{name: 'Monica', surname: 'Belluci'},{name: 'Monica', surname: 'Belluci'},{name: 'Monica', surname: 'Belluci'},{name: 'Monica', surname: 'Belluci'},{name: 'Monica', surname: 'Belluci'},{name: 'Monica', surname: 'Belluci'},{name: 'Monica', surname: 'Belluci'}
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
  }

  displayedColumns: string[] = ['name', 'surname', 'checkbox'];
  dataSource = new MatTableDataSource(users);

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
