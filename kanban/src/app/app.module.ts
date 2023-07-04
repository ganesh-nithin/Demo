import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainviewComponent } from './pages/mainview/mainview.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AccordianComponent } from './accordian/accordian.component';

@NgModule({
  declarations: [AppComponent, MainviewComponent, AccordianComponent],
  imports: [BrowserModule, AppRoutingModule,DragDropModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
