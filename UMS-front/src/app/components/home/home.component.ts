import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../services/users.service";
import {Observable} from "rxjs";
import {UserInterface} from "../../interfaces/user-interface";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  users$? : Observable<UserInterface[]>
  actionMessage? : Object;

  constructor(private usersService : UsersService){ }

  ngOnInit() {
    this.users$ = this.usersService.usersOf()
    this.usersService.setUsers()
  }

  onDelete(userId: number) {
    this.usersService.deleteUser(userId)
      .subscribe(res => this.actionMessage = res)

    this.usersService.setUsers()
  }

  onSave(user: UserInterface) {
    this.usersService.updateUser(user).subscribe(
      res => console.log(res)
    );
    this.usersService.setUsers()

  }

  onPasswordReset(){

  }
}
