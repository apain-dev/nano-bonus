import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {FileDropModule} from "ngx-file-drop";
import { DropComponent } from './components/drop/drop.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DropComponent,
    BreadcrumbComponent
  ],
  imports: [
    BrowserModule,
    FileDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
