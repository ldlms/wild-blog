import { Injectable } from '@angular/core';
import { User } from '../../Models/User/user';
import { Address } from '../../Models/User/address';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  private users:User[] = [];

  public getUsers(){
    return this.users;
  }

  public addUser(username:string,email:string,password:string,street:string,number:number,city:string,postalCode:number){
    const address = new Address(street,number,postalCode,city);
    this.users.push(new User(username,email,password,address));
    console.log(this.users);
  }

}
