import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { UsermgmtComponent } from './views/usermgmt/usermgmt.component';
import { OrdersComponent } from './views/orders/orders.component';
import { SerialnoComponent } from './views/serialno/serialno.component';
import { ProdlinecfgComponent } from './views/prodlinecfg/prodlinecfg.component';
import { ClientComponent } from './views/client/client.component';
import { StagecfgComponent } from './views/stagecfg/stagecfg.component';
import { MetersComponent } from './views/meters/meters.component';
import { ReportsComponent } from './views/reports/reports.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    DashboardComponent,
    UsermgmtComponent,
    OrdersComponent,
    SerialnoComponent,
    ProdlinecfgComponent,
    ClientComponent,
    StagecfgComponent,
    MetersComponent,
    ReportsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
