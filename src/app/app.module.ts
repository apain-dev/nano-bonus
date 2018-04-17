import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {FileDropModule} from "ngx-file-drop";
import { DropComponent } from './components/drop/drop.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { FileInfoComponent } from './components/file-info/file-info.component';
import { FileService } from './services/file.service'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DropComponent,
    BreadcrumbComponent,
    FileInfoComponent
  ],
  imports: [
    BrowserModule,
    FileDropModule
  ],
  providers: [FileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
