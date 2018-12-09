import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NvD3Module } from 'ng2-nvd3';

import { UserService } from './user.service';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgxWebstorageModule} from 'ngx-webstorage';
import { UploadComponent } from './upload/upload.component';
import { UploaderService } from './upload/uploader.service';
import { PieChartComponent } from './pie-chart/pie-chart.component';

import 'd3';
import 'nvd3';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UploadComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    AuthModule,
    NgxWebstorageModule.forRoot(),
    NvD3Module
  ],
  providers: [UserService, UploaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
