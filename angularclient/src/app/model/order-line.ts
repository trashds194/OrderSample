import {Goods} from "./goods";
import {Order} from "./order";

export class OrderLine {
  id: number | undefined;
  order: Order;
  goods: Goods;
  count: number;

  constructor(order: Order, goods: Goods, count: number) {
    this.order = order;
    this.goods = goods;
    this.count = count;
  }
}
