import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Products {

  constructor(private http:HttpClient) { }
  
  getProduct(){
    return this.http.get("https://fakestoreapi.com/products").pipe(map((res:any)=>{
      return res;
    }))
  }
}