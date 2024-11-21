import { Injectable } from '@angular/core';
import { produts } from './product';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products:any;
  constructor() { }

  productlist: produts[]=[

      {
        productId: 1,
        productName: "Asus",
        productType: "Laptop"
      },
      {
        productId: 2,
        productName: "Dell",
        productType: "Laptop"
      },
      {
        productId: 3,
        productName: "Hp",
        productType: "Laptop"
      },

  ]

  getproducts()
  {
    return of (this.productlist);
  }

  addprodutcs(pro:any)
  {
     this.productlist.push(pro);
     alert("product added");
  }
  deleteproduct(pid:any)
  {
    let index=this.productlist.findIndex((res)=>res.productId=pid);
    if(index != -1)
    {
      this.productlist.splice(index,1);
    }
  }
}
