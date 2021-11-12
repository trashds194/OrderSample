import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {GoodsService} from "../../service/goods.service";
import {Goods} from "../../model/goods";

@Component({
  selector: 'app-goods-form',
  templateUrl: './goods-form.component.html',
  styleUrls: ['./goods-form.component.css']
})
export class GoodsFormComponent implements OnInit {

  goods: Goods;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private goodsService: GoodsService) {
    this.goods = new Goods();
  }

  onSubmit() {
    this.goodsService.save(this.goods).subscribe(result => this.gotoGoodsList());
    console.log(this.goods);
  }

  gotoGoodsList() {
    this.router.navigate(['/goods']);
  }

  ngOnInit(): void {
  }

}
