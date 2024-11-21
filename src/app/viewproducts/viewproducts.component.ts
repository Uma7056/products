import { Component } from '@angular/core';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-viewproducts',
  standalone: false,
  
  templateUrl: './viewproducts.component.html',
  styleUrl: './viewproducts.component.css'
})
export class ViewproductsComponent {

    product:any;
    constructor(private service: ProductsService){}

    ngOnInit()
    {
      this.service.getproducts().subscribe((res)=>this.product=res);
    }
}
