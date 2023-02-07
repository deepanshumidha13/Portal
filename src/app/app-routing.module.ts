import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component'
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ClientComponent } from './views/client/client.component';
import { UsermgmtComponent } from './views/usermgmt/usermgmt.component';
import { OrdersComponent } from './views/orders/orders.component';
import { SerialnoComponent } from './views/serialno/serialno.component';
import { ProdlinecfgComponent } from './views/prodlinecfg/prodlinecfg.component';
import { StagecfgComponent } from './views/stagecfg/stagecfg.component';
import { MetersComponent } from './views/meters/meters.component';
import { ReportsComponent } from './views/reports/reports.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', redirectTo: '', pathMatch:'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'usermgmt', component: UsermgmtComponent},
  {path: 'client', component: ClientComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'serialno', component: SerialnoComponent},
  {path: 'prodlinecfg', component: ProdlinecfgComponent},
  {path: 'stagecfg', component: StagecfgComponent},
  {path: 'meters', component: MetersComponent},
  {path: 'reports', component: ReportsComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
