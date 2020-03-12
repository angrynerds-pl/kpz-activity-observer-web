import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { UsersService } from '../users.service';

export interface User {
  number: number;
  admin: string;
  _id: string;
  name: string;
  surname: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  initialSelection = [];
  allowMultiSelect = false;
  selection = new SelectionModel<User>(this.allowMultiSelect, this.initialSelection);
  data: User[] = [];
  @Output() selectedUser = new EventEmitter();

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.userService.getUsers()
      .subscribe(res=>{
        res.data.forEach((element,index) => {
          element.number = index+1;
          this.data.push(element);
        });
        this.dataSource.paginator = this.paginator;
      },
      err=> {
        console.log(err);
      });
  }

  userChanged() {
    this.selectedUser.emit(this.selection.selected[0]);
  }

  displayedColumns: string[] = ['number','name', 'surname','email', 'checkbox'];
  dataSource = new MatTableDataSource(this.data);


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
