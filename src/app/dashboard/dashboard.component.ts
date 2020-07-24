import { Component, OnInit } from '@angular/core';
import {Information} from '../information';
import {InfoService} from '../info.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  information: Information[] = [];

  constructor(private infoService: InfoService) { }

  ngOnInit() {
    this.getInfo();
  }

  getInfo(): void {
    this.infoService.getInfos()
      .subscribe(information => this.information = information);
  }
}
