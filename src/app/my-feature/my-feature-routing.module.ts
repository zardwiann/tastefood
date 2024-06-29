import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyFeatureComponent } from './my-feature.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersComponent } from './orders/orders.component';
import { FriesComponent } from './fries/fries.component';
import { BurgerComponent } from './burger/burger.component';
import { PizzaComponent } from './pizza/pizza.component';
import { SweetsComponent } from './sweets/sweets.component';
import { DrinksComponent } from './drinks/drinks.component';
import { YourorderComponent } from './yourorder/yourorder.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '', component: MyFeatureComponent,
    children: [
      { path: '', component: DashboardComponent, pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'menu', component: OrdersComponent,
        children: [
          { path: '', component: FriesComponent, pathMatch: 'full' },
          { path: 'fries', component: FriesComponent },
          { path: 'burger', component: BurgerComponent },
          { path: 'pizza', component: PizzaComponent },
          { path: 'sweets', component: SweetsComponent },
          { path: 'drinks', component: DrinksComponent }


        ]
      },
      { path: 'order', component: YourorderComponent },
      { path: 'profile', component: UsersComponent },

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyFeatureRoutingModule { }
