import { Injectable } from '@angular/core';
import {Information, InformationData} from './information';
import {COLL_INFORMATION, INFORMATION, JCR_INFORMATION, OTHER_INFORMATION} from './mock-page-text';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  getInfos(): Observable<Information[]> {
    return of(INFORMATION);
  }
  getInfo(name: string): Observable<Information> {
    return of(INFORMATION.find(info => info.name === name));
  }

  getJCRDatas(): Observable<InformationData[]> {
    return of(JCR_INFORMATION);
  }
  getCollegeDatas(): Observable<InformationData[]> {
    return of(COLL_INFORMATION);
  }
  getOtherDatas(): Observable<InformationData[]> {
    return of(JCR_INFORMATION);
  }

 constructor() { }
}
