import { Injectable } from '@angular/core';
import { HttpHandlerService } from './http-handler.service';

@Injectable({
  providedIn: 'root'
})
export class MealsService extends HttpHandlerService {

  public getMeals() {
    let path = '/meals';
    return this.get(path, {});
  }
  public getSignatureMeals() {
    let path = '/signature';
    return this.get(path, {});
  }
}
