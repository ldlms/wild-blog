import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../Models/User/user';
import { UserService } from '../../shared/classServices/user.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {

  constructor(private userService:UserService){}
  users:User[] = [];

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }


}
