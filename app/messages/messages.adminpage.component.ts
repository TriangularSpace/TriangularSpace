import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { IMessages } from './messages';
import { MessagesService } from './messages.service';

@Component({
    selector: 'messages-component',
    templateUrl: 'app/messages/messages-adminpage.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class OrdersComponent implements OnInit {
    
    messages: IMessages[];
    errorMessage: string;
    
    constructor(private _messagesService: MessagesService) {
        
    }
    
    ngOnInit(): void {
        this._messagesService.getMessages()
        .subscribe(
            messages => this.messages = messages,
            error => this.errorMessage = <any>error);
    }
}