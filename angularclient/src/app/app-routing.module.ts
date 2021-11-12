import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GoodsListComponent} from "./component/goods-list/goods-list.component";
import {GoodsFormComponent} from "./component/goods-form/goods-form.component";
import {OrderLineListComponent} from "./component/order-line-list/order-line-list.component";
import {OrderFormComponent} from "./component/order-form/order-form.component";
import {GoodsUpdFormComponent} from "./component/goods-upd-form/goods-upd-form.component";

const routes: Routes = [
  {path: 'goods', component: GoodsListComponent},
  {path: 'goods/add', component: GoodsFormComponent},
  {path: 'orders', component: OrderLineListComponent},
  {path: 'orders/add', component: OrderFormComponent},
  {path: 'goods/update', component: GoodsUpdFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
