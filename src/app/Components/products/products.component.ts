import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Products } from '../../Service/Products/products.service';
import { ListproductsService } from '../../Service/Products/listproducts.service';

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'], 
  imports: [CommonModule] 
})
export class ProductsComponent implements OnInit {
  productsList: any;

  constructor(private api: Products, private list: ListproductsService) {}

  ngOnInit(): void {
    this.api.getProduct().subscribe(res => {
      this.productsList = res;
      this.productsList.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.price });
      });
    });
  }

  addToCart(item: any) {
    this.list.addToCart(item);
  }
}
