import { Injectable } from '@angular/core';
import { IMessages } from './messages';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs';

@Injectable()
export class MessagesService {
    private _ordersUrl = 'api/messages/messages.json';
    
    constructor(private _http: Http){} 
    getMessages(): Observable<IMessages[]> {
        return this._http.get(this._ordersUrl)
        .map((response: Response) => <IMessages[]>response.json())
        .do(data => console.log("All: " + JSON.stringify(data)))
        .catch(this.handleError);
    }
    
    private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}