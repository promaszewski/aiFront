import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DesktopComponent} from './component/desktop/desktop.component';
import {AdduserComponent} from './component/adduser/adduser.component';
import {AddvisitComponent} from './component/addvisit/addvisit.component';
import {MyvisitComponent} from './component/myvisit/myvisit.component';
import {UpvisitComponent} from './component/upvisit/upvisit.component';
import {UserlistComponent} from './component/userlist/userlist.component';
import {ManagerComponent} from './component/manager/manager.component';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'desktop',
    component: DesktopComponent,
  },
  {
    path: 'adduser',
    component: AdduserComponent,
  },
  {
    path: 'addvisit',
    component: AddvisitComponent,
  },
  {
    path: 'myvisit',
    component: MyvisitComponent,
  },
  {
    path: 'upvisit',
    component: UpvisitComponent,
  },
  {
    path: 'userlist',
    component: UserlistComponent,
  },
  {
    path: 'manager',
    component: ManagerComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only

      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

