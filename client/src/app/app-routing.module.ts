import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StockListComponent } from './stocks/stock-list/stock-list.component';
import { StockDetailComponent } from './stocks/stock-detail/stock-detail.component';
import { SalesOrderComponent } from './sales-order/sales-order.component';
import { ListsComponent } from './lists/lists.component';
import { authGuard } from './_guards/auth.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: "",
    runGuardsAndResolvers: 'always',
    canActivate: [authGuard],
    children: [
      {path: 'stocks', component: StockListComponent},
      {path: 'stocks/:id', component: StockDetailComponent},
      {path: 'salesorder', component: SalesOrderComponent},
      {path: 'lists', component: ListsComponent}    
    ]
  },
  {path: '**', component: HomeComponent,pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
