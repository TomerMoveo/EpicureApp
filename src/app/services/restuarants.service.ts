import { Injectable } from '@angular/core';
import { HttpHandlerService } from './http-handler.service';

@Injectable({
  providedIn: 'root'
})
export class RestuarantsService extends HttpHandlerService {

  public getRestuarants() {
    const path = '/restuarants';
    return this.get(path, {});
  }
  public getPopularRes() {
    const path = '/popular';
    return this.get(path, {});
  }
}
