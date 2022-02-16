import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName = '';
  userPassword = '';
  userRole = '';
  submitted = false;
  signUp = false;

  constructor(public global: GlobalService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(): void {
    this.submitted = false;
    if (!this.userName || !this.userName.trim()) {
      this.submitted = true;
    } else if (!this.userPassword) {
      this.submitted = true;
    } else {
      if (this.global.defaultLoginUserList.some(it => it.userName === this.userName && it.userPassword === this.userPassword)) {
        // tslint:disable-next-line:max-line-length
        const userDet = this.global.defaultLoginUserList.filter(it => it.userName === this.userName && it.userPassword === this.userPassword);
        alert('logged In successfully');
        this.global.selectedUser = {userName : this.userName , userRole: userDet[0].userRole};
        this.router.navigate(['/usermanagement']);
      } else {
        alert('Invalid userName or Password');
      }
    }
  }

  onRegister(): void {
    this.submitted = false;
    if (!this.userName || !this.userName.trim()) {
      this.submitted = true;
    } else if (!this.userPassword) {
      this.submitted = true;
    } else if (!this.userRole) {
      this.submitted = true;
    } else if (this.global.defaultLoginUserList.some(it => it.userName === this.userName)) {
      alert('User already exist, Please select a different User Name');
    }
    else {
      this.global.defaultLoginUserList.push(
        {
          id: Math.random().toString(36).substring(2),
          userName: this.userName,
          userPassword: this.userPassword,
          userRole: this.userRole,
          city: ''
        });
      alert('User registered sucessfully');
      this.signUp = false;
    }

  }

  onSignUp(): void {
    this.submitted = false;
    this.userName = '';
    this.userPassword = '';
    this.userRole = '';
    this.signUp = true;
  }

  onBack(): void {
    this.submitted = false;
    this.userName = '';
    this.userPassword = '';
    this.userRole = '';
    this.signUp = false;
  }

}
