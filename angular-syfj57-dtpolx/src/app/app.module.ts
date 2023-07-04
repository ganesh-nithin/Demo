import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { StoreModule } from "@ngrx/store";
import { MyCounterComponent } from "./my-counter/my-counter.component";
import { IncrementComponent } from "./increment/increment.component";
import { DecrementComponent } from "./decrement/decrement.component";
import { ResetComponent } from "./reset/reset.component";
import { InputComponent } from "./input/input.component";
import { CustomCounterInputComponent } from "./my-counter/custom-counter-input/custom-counter-input.component";
import { HomeComponent } from "./home/home.component";
import { AppRoutingModule } from "./app-routing-module";
import { HeaderComponent } from "./shared/component/header/header.component";
import { PostsListComponent } from "./posts/posts-list/posts-list.component";
import { appReducer } from "./store/app.state";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "src/environments/environment";
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    IncrementComponent,
    DecrementComponent,
    ResetComponent,
    InputComponent,
    CustomCounterInputComponent,
    HomeComponent,
    HeaderComponent,
    PostsListComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
