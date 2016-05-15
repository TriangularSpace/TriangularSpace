import {Component} from '@angular/core';
import {OrdersService} from './orders/orders.service';

import 'js/jquery.js';
import 'js/bootstrap.min.js';
import 'http://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js';
import 'js/classie.js';
import 'js/cbpAnimatedHeader.js';
import 'js/jqBootstrapValidation.js';
import 'js/contact_me.js';
import 'js/main.js';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['css/bootstrap.css', 'css/bootstrap.min.css', 'css/main.css']
})
export class AppComponent { }
