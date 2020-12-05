import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProducts(){

  return this.http.get('http://localhost:8080/products');


  }

 addProduct(data){


  return  this.http.post('http://localhost:8080/addProduct',data);



 }

 deleteProduct(id){

  
  return this.http.delete(`http://localhost:8080/delete/${id}`,{responseType: 'text'})


 }


 getProductById(id) {
  return this.http.get(`http://localhost:8080//productById/${id}`);
}

updateProduct(data){
  return this.http.put(`http://localhost:8080//update`,data);


}









}
