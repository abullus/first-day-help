import { Component, OnInit } from '@angular/core';
import { Information} from '../information';
import { INFORMATION} from '../mock-page-text';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {
  information = INFORMATION;

  constructor() { }

  ngOnInit(): void {
  }
  selectedInfo: Information;
  onSelect(info: Information): void {
    this.selectedInfo = info;
  }

}
