import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ListproductsService } from '../../Service/Products/listproducts.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  imports: [CommonModule] 
})
export class CartComponent implements OnInit {
  products:any =[];
  allProducts:any =0;
  constructor(private cart:ListproductsService) { }

  ngOnInit(): void {
    this.cart.getProductData().subscribe(res=>{
      this.products = res;
      this.allProducts = this.cart.getTotalAmount();
    })
  }
  removeProduct(item:any){
    this.cart.removeCartData(item);
  }
  removeAllProduct(){
    this.cart.removeAllCart();
  }
} 