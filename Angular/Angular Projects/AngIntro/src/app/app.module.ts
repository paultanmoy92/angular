import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostFormComponent } from './post-form/post-form.component';
import { NgSwitchCaseComponent } from './ng-switch-case/ng-switch-case.component';
import { StyleDirectiveComponent } from './style-directive/style-directive.component';
import { ClassDirectiveComponent } from './class-directive/class-directive.component';
import { DirectiveTaskComponent } from './directive-task/directive-task.component';
import { NgPipeComponent } from './ng-pipe/ng-pipe.component';
import { AppendPipe } from './Pipe/append.pipe';
import { AppendCLIPipe } from './Pipe/append-cli.pipe';
import { SummeryPipe } from './Pipe/summery.pipe';
import { PostService } from './Service/post.service';
import { NgFormComponent } from './ng-form/ng-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostComponent,
    PostListComponent,
    PostFormComponent,
    NgSwitchCaseComponent,
    StyleDirectiveComponent,
    ClassDirectiveComponent,
    DirectiveTaskComponent,
    NgPipeComponent,
    AppendPipe,
    AppendCLIPipe,
    SummeryPipe,
    NgFormComponent,
    ReactiveFormComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
