import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanadianFoodComponent } from './component/canadian-food/canadian-food.component';
import { CartComponent } from './component/cart/cart.component';
import { ChickenComponent } from './component/chicken/chicken.component';
import { CookingComponent } from './component/cooking/cooking.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'fish', component: CookingComponent },
  { path: 'chicken', component: ChickenComponent },
  { path: 'canadian', component: CanadianFoodComponent },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
