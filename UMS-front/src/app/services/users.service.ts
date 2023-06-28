import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, ReplaySubject} from "rxjs";
import {UserInterface} from "../interfaces/user-interface";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http : HttpClient) { }

  baseUrl = 'http://127.0.0.1:8000/api'

  private usersSubject = new ReplaySubject<UserInterface[]>(1)
  private filterSubject = new BehaviorSubject<string>("")

  usersOf() : Observable<UserInterface[]>{
    return this.usersSubject
  }

  setUsers(filter = this.filterSubject.getValue()){
    let url = filter  ? `${this.baseUrl}/user/${filter}`
                            : `${this.baseUrl}/user`
    this.http.get<UserInterface[]>(`${this.baseUrl}/user`)
      .subscribe(res => {
        this.usersSubject.next(res)
      })
  }

  deleteUser(userId: number) {
    return this.http.delete(`${this.baseUrl}/user/${userId}`)
  }
}
