import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Goods} from "../model/goods";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GoodsService {

  private readonly goodsUrl: string;
  endPoint!: number;

  constructor(private http: HttpClient) {
    this.goodsUrl = 'http://localhost:8080/api/goods/'
  }

  public findAll(): Observable<Goods[]> {
    return this.http.get<Goods[]>(this.goodsUrl);
  }

  public getOne(id: number): Observable<Goods> {
    this.endPoint = id;
    return this.http.get<Goods>(this.goodsUrl + this.endPoint);
  }

  public save(goods: Goods) {
    return this.http.post<Goods>(this.goodsUrl, goods);
  }

  public update(goods: Goods, id: number) {
    this.endPoint = id;
    return this.http.put(this.goodsUrl + this.endPoint, goods);
  }

  public delete(id: any) {
    this.endPoint = id;
    return this.http.delete(this.goodsUrl + this.endPoint);
  }
}
