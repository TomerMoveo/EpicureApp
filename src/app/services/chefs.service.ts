import { Injectable } from '@angular/core';
import { HttpHandlerService } from './http-handler.service';

@Injectable({
  providedIn: 'root'
})
export class ChefsService extends HttpHandlerService {

  // public getChefs() {
  //   let path = '/chefs';
  //   return this.get(path, {});
  // }
  public getRestuarantsByChef() {
    let path = '/resbychef';
    return this.get(path, {});
  }
}
