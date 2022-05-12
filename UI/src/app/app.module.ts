import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AngularFileUploaderModule } from "angular-file-uploader";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { AuthService} from './shared/Services/auth.service'
import { AcademicYearsService } from './shared/Services/academic_year.service';
import { AuthRouteGuard } from './shared/guard/auth.route.guard';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Interceptor } from './shared/interceptor/auth.inteceptor';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularFileUploaderModule
  ],
    providers: [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: Interceptor,
        multi: true
      },
      AuthService,
      AuthRouteGuard,
      AcademicYearsService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
