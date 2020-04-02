import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { UsersService } from '../users.service';
import { AuthService } from '../auth.service';

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

  length = 0;
  initialSelection = [];
  allowMultiSelect = false;
  selection = new SelectionModel<User>(this.allowMultiSelect, this.initialSelection);
  data: User[] = [];
  dataSource;
  @Output() selectedUser = new EventEmitter();
  

  constructor(private userService: UsersService,private auth: AuthService) {}

  ngOnInit(): void {
    this.userService.getUsers(5,1)
      .subscribe(res=>{
          res.data.docs.forEach((element,index) => {
            element.number = index+1;
            this.data.push(element);
          });
          this.length = res.data.total;
          this.dataSource = new MatTableDataSource(this.data);
        },
          err=> {
            console.log(err);
      });
  }


  paginatorChanged($event) {
    this.auth.logoutIfExpired();
    this.userService.getUsers($event.pageSize,$event.pageIndex+1)
      .subscribe(res=>{
          this.data.length = 0;
          res.data.docs.forEach((element,index) => {
            element.number = ($event.pageIndex*$event.pageSize)+index+1;
            this.data.push(element);
          });
          this.dataSource = new MatTableDataSource(this.data);
        },
        err => {
          console.log(err);
      })
  }

  userChanged() {
    this.auth.logoutIfExpired();
    this.selectedUser.emit(this.selection.selected[0]);
  }

  displayedColumns: string[] = ['number','name', 'surname','email', 'checkbox'];

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
