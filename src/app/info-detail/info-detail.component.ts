import { Component, OnInit, Input } from '@angular/core';
import { Information} from '../information';
import { InformationData} from '../information';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {InfoService} from '../info.service';

@Component({
  selector: 'app-info-detail',
  templateUrl: './info-detail.component.html',
  styleUrls: ['./info-detail.component.css']
})
export class InfoDetailComponent implements OnInit {
  @Input() info: Information;
  datas: InformationData[] = [];
  constructor(
    private route: ActivatedRoute,
    private infoService: InfoService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getInfo();
  }
  getInfo(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.infoService.getInfo(name)
      .subscribe(information => this.info = information);
    if (this.info.name === 'JCR Information') {
      this.infoService.getJCRDatas().subscribe(datas => this.datas = datas);
    } else if (this.info.name === 'College Information') {
      this.infoService.getCollegeDatas().subscribe(datas => this.datas = datas);
    } else if (this.info.name === 'Other Useful Links') {
      this.infoService.getOtherDatas().subscribe(datas => this.datas = datas);
    }
  }
}
