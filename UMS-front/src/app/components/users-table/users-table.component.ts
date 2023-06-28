import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {UserInterface} from "../../interfaces/user-interface";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.sass']
})
export class UsersTableComponent implements OnInit {
  users$? : Observable<UserInterface[]>
  actionMessage? : Object;

  constructor(private usersService : UsersService){ }

  ngOnInit() {
    this.users$ = this.usersService.usersOf()
    this.usersService.setUsers()
  }

  protected readonly Object = Object;
}
