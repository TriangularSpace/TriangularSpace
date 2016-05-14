import { bootstrapStatic } from '@angular/platform-browser';

// Our main component
import { AppComponent } from './app.component';

import {ROUTER_PROVIDERS} from '@angular/router';

bootstrapStatic(AppComponent, [ROUTER_PROVIDERS]);