import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { FetchallComponent } from './fetchall/fetchall.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
{path:'home',component:HomeComponent},
{path:'search-all',component:SearchComponent},
{path:'add-product',component:AddProductComponent},
{path:'fetchall',component:FetchallComponent},
{path:'update-product/:id',component:UpdateproductComponent},
{path:'login',component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
