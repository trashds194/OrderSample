import {Component, OnInit} from '@angular/core';
import {OrderLine} from "../../model/order-line";
import {OrderLineService} from "../../service/order-line.service";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-order-line-list',
  templateUrl: './order-line-list.component.html',
  styleUrls: ['./order-line-list.component.css']
})
export class OrderLineListComponent implements OnInit {

  orderLine!: OrderLine[];

  constructor(private orderLineService: OrderLineService,
  public date: DatePipe) {
  }

  ngOnInit(): void {
    this.listUpdate();
  }

  onDelClick(event: any) {
    this.orderLineService.delete(event.target.value).subscribe(result => this.listUpdate());
  }

  listUpdate() {
    this.orderLineService.findAll().subscribe(data => {
      this.orderLine = data;
      for(let oneOrder of this.orderLine){
        oneOrder.order.date = this.date.transform(oneOrder.order.date, 'dd-MM-yyyy');
        console.log(oneOrder.order.date);
      }
      console.log("Our member contains: ", this.orderLine);
    })
  }

}
