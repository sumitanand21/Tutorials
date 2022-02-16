import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-gen-view',
  templateUrl: './gen-view.component.html',
  styleUrls: ['./gen-view.component.scss']
})
export class GenViewComponent implements OnInit {

  constructor(private router: Router, public global: GlobalService) { }
  cityDet = [{
    city: 'Bangalore',
  },
  {
    city: 'Chennai',
  },
  {
    city: 'Jaipur',
  },
  {
    city: 'Mumbai',
  }];
  ngOnInit(): void {
  }

  toLogOut(): void {
    this.global.selectedUser = null;
    this.router.navigate(['/login']);
  }

  toUserManagement(): void {
    this.router.navigate(['/usermanagement']);
  }

}
