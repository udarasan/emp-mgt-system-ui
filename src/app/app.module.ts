import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './auth/login/login.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatCardModule} from "@angular/material/card";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";
import {MatNativeDateModule} from "@angular/material/core";
import {MatTableModule} from "@angular/material/table";
import { EmployeeEditDialogComponent } from './employee/componets/employee-edit-dialog/employee-edit-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {DashboardModule} from "./dashboard/dashboard.module";
import { HomeComponent } from './home/home.component';
import {AuthModule} from "./auth/auth.module";
import { ChatComponent } from './chat/chat.component';
import {SocketIoConfig, SocketIoModule} from "ngx-socket-io";
import { AlertComponent } from './alert/alert.component';
import { LeaveComponent } from './leave/leave.component';
import { LeaveAcceptComponent } from './leave/leave-accept/leave-accept.component';

const config: SocketIoConfig = { url: 'http://localhost:3001', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChatComponent,
    AlertComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatSidenavModule,
        MatIconModule,
        MatMenuModule,
        MatToolbarModule,
        MatDatepickerModule,
        MatInputModule,
        MatSelectModule,
        MatCardModule,
        ReactiveFormsModule,
        MatListModule,
        MatButtonModule,
        HttpClientModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatTableModule,
        MatDialogModule,
        FormsModule,
        MatCheckboxModule,
      DashboardModule,
      AuthModule,
      SocketIoModule.forRoot(config),
    ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
