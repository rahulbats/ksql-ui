import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { CreateStreamFromTopicComponent } from './create-stream-from-topic/create-stream-from-topic.component';
import { CreateStreamFromStreamComponent } from './create-stream-from-stream/create-stream-from-stream.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateStreamFromTopicComponent,
    CreateStreamFromStreamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
