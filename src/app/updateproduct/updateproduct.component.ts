import { FormGroup,FormControl } from '@angular/forms';
import { asNativeElements, Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {
  productToUpdate;
  regForm:FormGroup;
  isUpdated =false;




  constructor(
   private service:ProductService,
   private activatedRouter:ActivatedRoute,
   private router:Router,



  ) {



    this.activatedRouter.params.subscribe(idData => {
      this.service.getProductById(idData.id).subscribe(data => {
        console.log(data);
         this.productToUpdate = data;
        console.log(this.productToUpdate);
        this.regForm = new FormGroup({
          id: new FormControl(this.productToUpdate.id),
          name: new FormControl(this.productToUpdate.name),
          imgurl: new FormControl(this.productToUpdate.imgurl),
          details: new FormControl(this.productToUpdate.details),
          quantity: new FormControl(this.productToUpdate.quantity),
          price: new FormControl(this.productToUpdate.price)
        });

       

      });
    });











   }

  ngOnInit() {
  }
  onSubmit() {
    this.service.updateProduct(this.regForm.value).subscribe(data => {
      // this.productResponse = data;
      this.isUpdated =true;
      alert("Product Updated Successfully")
      this.router.navigateByUrl('/home');
    
    });

}
}
