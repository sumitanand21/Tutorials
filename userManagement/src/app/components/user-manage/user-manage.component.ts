import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.scss']
})
export class UserManageComponent implements OnInit {

  constructor(public global: GlobalService, private router: Router) { }
  userDetails = [];
  searchVal = '';
  ngOnInit(): void {
    this.userDetails = this.global.defaultLoginUserList.map(it => {
      return Object.assign({ ...it, frontEndID: Math.random().toString(36).substring(2), editable: false });
    });
  }

  onEdit(selectedObj): void {
    selectedObj.editable = true;
  }

  onSave(selectedObj): void {
    if (!selectedObj.userName || !selectedObj.userName.trim()) {
      alert('User Name is mandatory');
    } else if (!selectedObj.userPassword || !selectedObj.userPassword.trim()) {
      alert('User Password is mandatory');
    }
    else if (!selectedObj.userRole) {
      alert('User Role is mandatory');
    }
    else if (this.global.defaultLoginUserList.filter(it => it.userName === selectedObj.userName).length > 1) {
      alert('User name already exist, please try a different username');
    }
    else {
      const index = this.global.defaultLoginUserList.findIndex(it => it.id === selectedObj.id);
      if (index < 0) {
        this.global.defaultLoginUserList.push({
          id: Math.random().toString(36).substring(2),
          userName: selectedObj.userName,
          userPassword: selectedObj.userPassword,
          userRole: selectedObj.userRole,
          city: selectedObj.city,
        });
        alert('User Added successfully and mail has been triggered to user');
      } else {
        this.global.defaultLoginUserList[0].userName = selectedObj.userName;
        this.global.defaultLoginUserList[0].userPassword = selectedObj.userPassword;
        this.global.defaultLoginUserList[0].userRole = selectedObj.userRole;
        this.global.defaultLoginUserList[0].city = selectedObj.city;
        alert('User Edited successfully and mail has been triggered to user');
      }
      selectedObj.editable = false;

    }
  }

  // onRemove(selectedObj): void {
  //   debugger;
  //   const index = this.global.defaultLoginUserList.findIndex(it => it.id === selectedObj.id);
  //   const locIndex = this.userDetails.findIndex(it => it.id === selectedObj.id);
  //   if(index < 0){
  //     this.userDetails.splice(locIndex, 1);
  //   }else{
  //     this.userDetails.splice(locIndex, 1);
  //     this.global.defaultLoginUserList.splice(index, 1);
  //   }

  // }

  addUser(): void {
    const uniqueId = Math.random().toString(36).substring(2);
    this.userDetails.push({
      id: uniqueId,
      userName: '',
      userPassword: '',
      userRole: '',
      city: '',
      editable : true,
      frontEndID: uniqueId,
    });

  }

  togenView(): void{
    this.router.navigate(['/genView']);
  }

  toLogOut(): void {
    this.global.selectedUser = null;
    this.router.navigate(['/login']);
  }

}
