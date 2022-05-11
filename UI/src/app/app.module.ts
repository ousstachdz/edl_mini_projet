import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { AuthService} from './shared/Services/auth.service'
import { Project } from './shared/Services/progect.service'
import { Message } from './shared/Services/message.service';
import { AuthRouteGuard } from './shared/guard/auth.route.guard';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Interceptor } from './shared/interceptor/auth.inteceptor';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
    providers: [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: Interceptor,
        multi: true
      },
      AuthService,AuthRouteGuard,Project,Message],
  bootstrap: [AppComponent]
})
export class AppModule { }
