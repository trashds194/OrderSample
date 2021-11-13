import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AppComponent} from './app.component';
import {GoodsListComponent} from './component/goods-list/goods-list.component';
import {GoodsFormComponent} from './component/goods-form/goods-form.component';
import {GoodsService} from "./service/goods.service";
import {OrderLineListComponent} from './component/order-line-list/order-line-list.component';
import {OrderLineService} from "./service/order-line.service";
import {OrderFormComponent} from './component/order-form/order-form.component';
import {OrderService} from "./service/order.service";
import {GoodsUpdFormComponent} from './component/goods-upd-form/goods-upd-form.component';
import {DatePipe} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    GoodsListComponent,
    GoodsFormComponent,
    OrderLineListComponent,
    OrderFormComponent,
    GoodsUpdFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GoodsService, OrderLineService, OrderService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
