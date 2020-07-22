import { Component, OnInit, Input } from '@angular/core';
import { Information} from '../information';

@Component({
  selector: 'app-info-detail',
  templateUrl: './info-detail.component.html',
  styleUrls: ['./info-detail.component.css']
})
export class InfoDetailComponent implements OnInit {
  @Input() info: Information;
  constructor() { }

  ngOnInit(): void {
  }

}
