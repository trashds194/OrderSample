import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Goods} from "../model/goods";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GoodsService {

  private readonly goodsUrl: string;

  constructor(private http: HttpClient) {
    this.goodsUrl = 'http://localhost:8080/api/goods'
  }

  public findAll(): Observable<Goods[]> {
    return this.http.get<Goods[]>(this.goodsUrl);
  }

  public save(goods: Goods) {
    return this.http.post<Goods>(this.goodsUrl, goods);
  }
}
