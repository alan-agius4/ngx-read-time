import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { NgxReadTimeModule } from 'projects/ngx-read-time/src/lib/ngx-read-time.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxReadTimeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
