import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {FileDropModule} from "ngx-file-drop";
import { DropComponent } from './components/drop/drop.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { FileInfoComponent } from './components/file-info/file-info.component';
import { FileService } from './services/file.service'
import {RequestService} from "./services/request.service";
import {Http} from "@angular/http";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { CodemirrorModule } from 'ng2-codemirror'
import {FormsModule} from "@angular/forms";
import {NotificationService} from "./services/notification.service";
import {ToastyModule} from "ng2-toasty";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BreadcrumbComponent,
    FileInfoComponent
  ],
  imports: [
    BrowserModule,
    FileDropModule,
    HttpClientModule,
    CodemirrorModule,
    FormsModule,
    ToastyModule.forRoot()

  ],
  providers: [RequestService, FileService, NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
