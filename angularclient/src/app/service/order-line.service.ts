import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {OrderLine} from "../model/order-line";
import {Observable} from "rxjs";
import {Goods} from "../model/goods";

@Injectable({
  providedIn: 'root'
})
export class OrderLineService {

  private readonly orderLineUrl: string;
  endPoint!: number;

  constructor(private http: HttpClient) {
    this.orderLineUrl = 'http://localhost:8080/api/order-lines/'
  }

  public findAll(): Observable<OrderLine[]> {
    return this.http.get<OrderLine[]>(this.orderLineUrl);
  }

  public getOne(id: any): Observable<OrderLine> {
    this.endPoint = id;
    return this.http.get<OrderLine>(this.orderLineUrl + this.endPoint);
  }

  public save(orderLine: OrderLine) {
    return this.http.post<OrderLine>(this.orderLineUrl, orderLine);
  }

  public update(orderLine: OrderLine, id: number) {
    this.endPoint = id;
    return this.http.put(this.orderLineUrl + this.endPoint, orderLine);
  }

  public delete(id: any) {
    this.endPoint = id;
    return this.http.delete(this.orderLineUrl + this.endPoint);
  }
}
