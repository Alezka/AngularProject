import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {PostComponent} from './post/post.component';
import { ComentComponent } from './coment/coment.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    ComentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
