import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Order} from "../model/order";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private readonly orderUrl: string;

  constructor(private http: HttpClient) {
    this.orderUrl = 'http://localhost:8080/api/orders';
  }

  public findAll(): Observable<Order[]> {
    return this.http.get<Order[]>(this.orderUrl);
  }

  public findLast(): Observable<Order>{
    return this.http.get<Order>(this.orderUrl + '/last');
  }

  public save(order: Order) {
    return this.http.post<Order>(this.orderUrl, order);
  }
}
