import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyFeatureRoutingModule } from './my-feature-routing.module';
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


@NgModule({
  declarations: [
    MyFeatureComponent,
    DashboardComponent,
    OrdersComponent,
    FriesComponent,
    BurgerComponent,
    PizzaComponent,
    SweetsComponent,
    DrinksComponent,
    YourorderComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    MyFeatureRoutingModule
  ]
})
export class MyFeatureModule { }
