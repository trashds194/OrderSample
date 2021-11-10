import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AppComponent} from './app.component';
import {GoodsListComponent} from './component/goods-list/goods-list.component';
import {GoodsFormComponent} from './component/goods-form/goods-form.component';
import {GoodsService} from "./service/goods.service";
import { OrderLineListComponent } from './component/order-line-list/order-line-list.component';
import {OrderLineService} from "./service/order-line.service";

@NgModule({
  declarations: [
    AppComponent,
    GoodsListComponent,
    GoodsFormComponent,
    OrderLineListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GoodsService, OrderLineService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
