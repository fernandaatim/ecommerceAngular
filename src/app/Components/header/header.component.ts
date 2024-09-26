import { Component, OnInit } from '@angular/core';
import { ListproductsService } from '../../Service/Products/listproducts.service';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  totalInCart: number = 0;
  constructor(private cartDataList: ListproductsService){}
  
  ngOnInit(): void{
    this.cartDataList.getProductData().subscribe(res=>{
      this.totalInCart = res.length;
    })
  }
}
