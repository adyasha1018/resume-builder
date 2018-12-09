import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { UserService } from './user.service';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgxWebstorageModule} from 'ngx-webstorage';
import { UploadComponent } from './upload/upload.component';
import { UploaderService } from './upload/uploader.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {
        dataEncapsulation: false,
        passThruUnknownUrl: true,
        put204: false
      }
    ),
    FormsModule,
    AppRoutingModule,
    AuthModule,
    NgxWebstorageModule.forRoot()
  ],
  providers: [UserService, UploaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
