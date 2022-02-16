import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  defaultLoginUserList = [
    {id: '1', userName: 'admin' , userPassword: 'admin', userRole: 'admin', city: 'Bangalore'},
    {id: '2', userName: 'sumit' , userPassword: 'sumit', userRole: 'general' , city: 'chennai'}
  ];
  selectedUser: any = null;
  constructor() { }
}
