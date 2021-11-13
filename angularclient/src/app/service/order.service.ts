import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Order} from "../model/order";
import {Observable} from "rxjs";
import {OrderLine} from "../model/order-line";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private readonly orderUrl: string;
  endPoint!: number;

  constructor(private http: HttpClient) {
    this.orderUrl = 'http://localhost:8080/api/orders/';
  }

  public findAll(): Observable<Order[]> {
    return this.http.get<Order[]>(this.orderUrl);
  }

  public findLast(): Observable<Order>{
    return this.http.get<Order>(this.orderUrl + 'last');
  }

  public getOne(id: any): Observable<Order> {
    this.endPoint = id;
    return this.http.get<Order>(this.orderUrl + this.endPoint);
  }

  public update(order: Order, id: number) {
    this.endPoint = id;
    return this.http.put(this.orderUrl + this.endPoint, order);
  }

  public save(order: Order) {
    return this.http.post<Order>(this.orderUrl, order);
  }
}
