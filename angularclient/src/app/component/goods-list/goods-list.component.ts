import {Component, OnInit} from '@angular/core';
import {Goods} from "../../model/goods";
import {GoodsService} from "../../service/goods.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-goods-list',
  templateUrl: './goods-list.component.html',
  styleUrls: ['./goods-list.component.css']
})
export class GoodsListComponent implements OnInit {

  goods!: Goods[];

  constructor(private goodsService: GoodsService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.listUpdate();
  }

  onDelClick(event: any) {
    this.goodsService.delete(event.target.value).subscribe(result => this.listUpdate());
  }

  onUpdClick(event: any) {
    this.router.navigate(['/goods/update'], {
      state: event.target.value
    });
  }

  listUpdate() {
    this.goodsService.findAll().subscribe(data => {
      this.goods = data;
      console.log("Our member contains: " + data);
    })
  }
}
