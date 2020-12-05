import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
products;
search:string;
  constructor(private service:ProductService) { }

  ngOnInit() {
    
  }
  onSubmit(){


    this.service.getAllProducts().subscribe(data=>{

      this.products =data;
     console.log(this.products);
  
      });


  }

  


}
