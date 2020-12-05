import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  regForm : FormGroup;
 data;
 isAdded =false;
  constructor(private fb :FormBuilder,private service:ProductService,) { }

  ngOnInit() {

    this.regForm = this.fb.group({


      name: this.fb.control('',[Validators.required]),
                 price:this.fb.control('',[Validators.required]),
                 quantity:this.fb.control('',[Validators.required]),
                 imgurl:this.fb.control('',[Validators.required]),
                 details:this.fb.control('',[Validators.required]),

  
     })
  }
  onSubmit()
{


this.data = this.regForm.value;
console.log(this.data);

this.service.addProduct(this.data).subscribe(data=>{

//  alert('Product Added successfully');
      this.isAdded =true;
       this.regForm.reset();

  
})
// this.http.post('http://localhost:8080/addProduct',data)


}
}
