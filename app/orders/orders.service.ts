import { Injectable } from 'angular2/core';
import { IOrders } from './orders';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class OrdersService {
    private _ordersUrl = 'api/orders/orders.json';
    
    constructor(private _http: Http){} 
    getOrders(): Observable<IOrders[]> {
        return this._http.get(this._ordersUrl)
        .map((response: Response) => <IOrders[]>response.json())
        .do(data => console.log("All: " + JSON.stringify(data)))
        .catch(this.handleError);
    }
    
    private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}