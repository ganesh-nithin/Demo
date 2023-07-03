import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StarRatingComponent } from './star-rating/star-rating.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent, StarRatingComponent],
  imports: [BrowserModule, AppRoutingModule, NgxStarRatingModule, FormsModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
