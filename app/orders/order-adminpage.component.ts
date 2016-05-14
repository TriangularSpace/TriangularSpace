import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { IOrders } from './orders';
import { OrdersService } from './orders.service';

@Component({
    selector: 'orders-component',
    templateUrl: 'app/orders/order-adminpage.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class OrdersComponent implements OnInit {
    
    orders: IOrders[];
    errorMessage: string;
    
    constructor(private _ordersService: OrdersService) {
        
    }
    
    ngOnInit(): void {
        this._ordersService.getOrders()
        .subscribe(
            orders => this.orders = orders,
            error => this.errorMessage = <any>error);
    }
}