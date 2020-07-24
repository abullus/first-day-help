import { Component, OnInit } from '@angular/core';
import { Information} from '../information';
import { InfoService} from '../info.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {
  information: Information[];
  constructor(private infoService: InfoService) { }

  getInfo(): void {
    this.infoService.getInfos()
      .subscribe(information => this.information = information);
  }

  ngOnInit(): void {
    this.getInfo();
  }

}
