import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {OrderService} from "../../service/order.service";
import {GoodsService} from "../../service/goods.service";
import {OrderLineService} from "../../service/order-line.service";
import {Order} from "../../model/order";
import {Goods} from "../../model/goods";
import {OrderLine} from "../../model/order-line";

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  order: Order;
  goods!: Goods[];
  orderLine: OrderLine;
  good!: Goods;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private orderService: OrderService,
              private goodsService: GoodsService,
              private orderLineService: OrderLineService) {
    this.order = new Order();
    // @ts-ignore
    this.orderLine = new OrderLine();
  }

  onSubmit() {
    this.orderService.save(this.order).subscribe(result => this.addOrderLine());
  }

  addOrderLine() {
    this.orderService.findLast().subscribe(data => {
      this.order = data;
      console.log("ID: ", this.order);
      this.orderLine = new OrderLine(this.order, this.good, this.orderLine.count)
      console.log(this.orderLine);
      this.orderLineService.save(this.orderLine).subscribe(result => this.gotoOrdersList())
    });
  }

  ngOnInit(): void {
    this.goodsService.findAll().subscribe(data => {
      this.goods = data;
    });
  }

  selectOption(selectedValue: any) {
    this.good = selectedValue;
    console.log("Good ", this.good);
  }

  gotoOrdersList() {
    this.router.navigate(['/orders']);
  }
}
