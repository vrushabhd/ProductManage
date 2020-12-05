import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-fetchall',
  templateUrl: './fetchall.component.html',
  styleUrls: ['./fetchall.component.css']
})
export class FetchallComponent implements OnInit {
products;
interval;
  constructor(private service:ProductService,private router:Router) { }

  ngOnInit() {
    this.refreshData();
    this.interval = setInterval(() => { 
        this.refreshData(); 
    }, 1000);
      
  }
onDelete(id){


  this.service.deleteProduct(id).subscribe(data=>{

    this.products =data;
   console.log(this.products);

    });
    


}
refreshData(){
  this.service.getAllProducts().subscribe(data=>{

    this.products =data;
   console.log(this.products);

    });
}

onUpdate(id)

{
  this.router.navigateByUrl(`update-product/${id}`);

}

}
