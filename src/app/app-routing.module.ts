import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
	{ path: '', component: ProductComponent },
	{ path: 'products', component: ProductComponent },
	{ path: 'cart', component: CartComponent },
	{ path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }