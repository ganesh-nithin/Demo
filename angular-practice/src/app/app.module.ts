import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentOneComponent } from './content-one/content-one.component';
import { ContentTwoComponent } from './content-two/content-two.component';
import { HideAfterDirective } from './hide-after.directive';
import { StrengthPipe } from './pipes/Strength/strength.pipe';
import { PostsComponent } from './components/posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './components/post/post.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { FormsModule } from '@angular/forms';
import { IfLoadedDirective } from './if-loaded.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentOneComponent,
    ContentTwoComponent,
    HideAfterDirective,
    StrengthPipe,
    PostsComponent,
    PostComponent,
    PostDetailComponent,
    IfLoadedDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
