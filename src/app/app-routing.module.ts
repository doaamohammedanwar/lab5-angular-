import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:"",component:ProductListComponent},
  {path:"product-add",component:ProductAddComponent,canActivate:[AuthGuard]},
  {path:"product-details/:id",component:ProductDetailsComponent},
  {path: "cart", component: CartComponent },
  //canActivate: [AuthGuard]
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"**",component:NotFoundComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
