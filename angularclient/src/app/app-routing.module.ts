import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GoodsListComponent} from "./component/goods-list/goods-list.component";
import {GoodsFormComponent} from "./component/goods-form/goods-form.component";
import {OrderLineListComponent} from "./component/order-line-list/order-line-list.component";

const routes: Routes = [
  {path: 'goods', component: GoodsListComponent},
  {path: 'goods/add', component: GoodsFormComponent},
  {path: 'orders', component: OrderLineListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
