import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListproductsService {
  private cartDataList: any = []

  private productList = new BehaviorSubject<any>([]);

  getProductData() {
    return this.productList.asObservable();
  }
  
  setProduct(product: any){
    this.cartDataList.push(product);
    this.productList.next(product)
  }

  addToCart(product:any){
    this.cartDataList.push(product);
    this.productList.next(this.cartDataList);
  }

  getTotalAmount(){
    let grandTotal = 0;
    this.cartDataList.map((a:any)=>{
      grandTotal+= a.total;
    });
    return grandTotal;
  }

  removeCartData(product:any){
    this.cartDataList.map((a:any, index:any)=>{
      if(product.id === a.id){
        this.cartDataList.splice(index,1)
      }
    })
    this.productList.next(this.cartDataList)
  }

  removeAllCart(){
    this.cartDataList = []
    this.productList.next(this.cartDataList)
  }

}
