import {Component, OnInit} from '@angular/core';
import {OrderLine} from "../../model/order-line";
import {OrderLineService} from "../../service/order-line.service";

@Component({
  selector: 'app-order-line-list',
  templateUrl: './order-line-list.component.html',
  styleUrls: ['./order-line-list.component.css']
})
export class OrderLineListComponent implements OnInit {

  orderLine!: OrderLine[];

  constructor(private orderLineService: OrderLineService) {
  }

  ngOnInit(): void {
    this.orderLineService.findAll().subscribe(data => {
      this.orderLine = data;
      console.log("Our member contains: ", this.orderLine);
    })
  }

}
