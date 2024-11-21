import { Component } from '@angular/core';
import { ProductsService } from '../service/products.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addproducts',
  standalone: false,
  
  templateUrl: './addproducts.component.html',
  styleUrl: './addproducts.component.css'
})
export class AddproductsComponent {

    responsemg:any;
    addForm: FormGroup=new FormGroup({})
    constructor(private service: ProductsService,private fb:FormBuilder){
      this.addForm=this.fb.group({
        productId:['',Validators.required],
        productName:['',Validators.required],
        productType:['',Validators.required]
      })
    }

    addnow()
    {
      this.responsemg=this.service.addprodutcs(this.addForm.value);
    }
    
}
