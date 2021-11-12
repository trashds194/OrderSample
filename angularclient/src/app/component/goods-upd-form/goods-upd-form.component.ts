import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Goods} from "../../model/goods";
import {GoodsService} from "../../service/goods.service";

@Component({
  selector: 'app-goods-upd-form',
  templateUrl: './goods-upd-form.component.html',
  styleUrls: ['./goods-upd-form.component.css']
})
export class GoodsUpdFormComponent implements OnInit {

  goods!: Goods;
  newGoods!: Goods;
  inputGoods: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private goodsService: GoodsService) {
    this.inputGoods = this.router.getCurrentNavigation()?.extras.state;
    console.log(this.inputGoods);
  }

  ngOnInit(): void {
    this.goodsService.getOne(this.inputGoods).subscribe(data => {
      this.goods = data;
      console.log("Our member contains: ", this.goods);
    })
  }


  onSubmit() {
    console.log(this.goods.id);
    this.newGoods = new Goods();
    this.newGoods.id = this.goods.id;
    this.newGoods.name = this.goods.name;
    this.newGoods.price = this.goods.price;
    console.log(this.newGoods);
    this.goodsService.update(this.newGoods, this.newGoods.id).subscribe(result => this.gotoGoodsList());
  }

  gotoGoodsList() {
    this.router.navigate(['/goods']);
  }
}
