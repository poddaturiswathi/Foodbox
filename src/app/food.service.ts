import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Food } from './food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private baseUrl="http://localhost:8080/api/fooditems";
  constructor(private serve:HttpClient) { }

  getfooditems():Observable<Food[]>{

    return this.serve.get<Food[]>(`${this.baseUrl}`);
    
  }
addfooditem(fdd:Food):Observable<Food[]>{
  return this.serve.post<Food[]>(`${this.baseUrl}`,fdd);
}
deleteitem(id:number):Observable<Object>{
  return this.serve.delete(`${this.baseUrl}/${id}`);
}

}
