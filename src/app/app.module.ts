import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { HomeComponent } from './home/home.component';
import {SanitizeHtmlPipe} from './shared/pipes/sanitize-html.pipe';
import {CoreModule} from './shared/modules/core.module';
import {FooterComponent} from './shared/components/footer/footer.component';
import {HeaderComponent} from './shared/components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SanitizeHtmlPipe,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    CoreModule.forRoot(),
    ScrollToModule.forRoot()
  ],
  exports: [
    ScrollToModule
  ],
  
  providers: [SanitizeHtmlPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
