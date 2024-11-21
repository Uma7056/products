import { Component } from '@angular/core';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-manage',
  standalone: false,
  
  templateUrl: './manage.component.html',
  styleUrl: './manage.component.css'
})
export class ManageComponent {

  product:any;
    constructor(private service: ProductsService){}

    ngOnInit()
    {
      this.service.getproducts().subscribe((res)=>this.product=res);
    }

    deletenow(pid:any)
    {
        this.service.deleteproduct(pid);
    }
}
