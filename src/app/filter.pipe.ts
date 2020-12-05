import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(products,search:string): any {

        if(search){

          return products.filter(product=>{

             return product.name.toLowerCase().includes(search.toLowerCase());
          });

        }else{


        return products;


        }




  }


}