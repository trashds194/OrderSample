import {Component, OnInit} from '@angular/core';
import {Goods} from "../../model/goods";
import {GoodsService} from "../../service/goods.service";

@Component({
  selector: 'app-goods-list',
  templateUrl: './goods-list.component.html',
  styleUrls: ['./goods-list.component.css']
})
export class GoodsListComponent implements OnInit {

  goods!: Goods[];

  constructor(private goodsService: GoodsService) {
  }

  ngOnInit(): void {
    this.goodsService.findAll().subscribe(data => {
      this.goods = data;
      console.log("Our member contains: " + data);
    })
  }

}
