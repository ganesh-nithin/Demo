import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MyCounterComponent } from "./my-counter/my-counter.component";
import { HomeComponent } from "./home/home.component";
import { PostsListComponent } from "./posts/posts-list/posts-list.component";
import { InputComponent } from "./input/input.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "counter",
    component: MyCounterComponent,
  },
  {
    path: "posts",
    component: PostsListComponent,
    children: [
      { path: "input", component: InputComponent },
      { path: "home", component: HomeComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
