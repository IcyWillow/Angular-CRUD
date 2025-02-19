import { HeaderData } from './HeaderData';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private _headerData = new BehaviorSubject<HeaderData>({
    title: 'Start',
    icon: 'home',
    routeUrl: ''
  })

  constructor() { }

  get headerData(): HeaderData{
    return this._headerData.value;
  }

  set HeaderData(headerData: HeaderData) {
    this._headerData.next(headerData);
  }
}
