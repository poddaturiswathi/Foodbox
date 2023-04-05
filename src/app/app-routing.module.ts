import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddfoodComponent } from './addfood/addfood.component';
import { FoodlistComponent } from './foodlist/foodlist.component';

const routes: Routes = [
  {path:"res",component:FoodlistComponent},
  {path:"addd",component:AddfoodComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
