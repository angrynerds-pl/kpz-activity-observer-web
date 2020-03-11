import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { UsersService } from '../users.service';

export interface User {
  number: number;
  admin: string;
  id: string;
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

  constructor(private userService: UsersService) { 
    
  }

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

  displayedColumns: string[] = ['number','name', 'surname','email', 'checkbox'];
  dataSource = new MatTableDataSource(this.data);

  log() {
    console.log(this.selection.selected[0]);
  }

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
