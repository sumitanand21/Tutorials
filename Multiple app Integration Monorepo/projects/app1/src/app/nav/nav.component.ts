import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from "../../../../../src/app/shared-service.service";
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(public sharedService : SharedServiceService) { }

  ngOnInit(): void {
    this.sharedService.data = 'App1 Service';
  }

}
