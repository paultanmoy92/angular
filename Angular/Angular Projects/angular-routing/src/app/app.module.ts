import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { HomeComponent } from './home/home.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AllPostsComponent,
    HomeComponent,
    SinglePostComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    // RouterModule.forRoot([
    //   {path: '', component: HomeComponent},
    //   {path: 'posts', component: AllPostsComponent},
    //   {path: 'post/:id/:title', component: SinglePostComponent}
    // ]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
