import {Component, Input} from '@angular/core';
import {UserInterface} from "../../interfaces/user-interface";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-users-cell',
  templateUrl: './users-cell.component.html',
  styleUrls: ['./users-cell.component.sass']
})
export class UsersCellComponent {
  constructor(private usersService : UsersService) { }
  @Input() user? : UserInterface

  onDelete(userId: number) {
    this.usersService.deleteUser(userId)
  }

  onSave(){
    console.log(this.user)
  }
}
