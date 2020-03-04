import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CombinedDataViewComponent } from './combined-data-view/combined-data-view.component';
import { SingleDataViewComponent } from './single-data-view/single-data-view.component';
import { UserListViewComponent } from './user-list-view/user-list-view.component';
import { LoginViewComponent } from './login-view/login-view.component';
import { MainComponent } from './main/main.component';
import { AuthGuard } from './auth-guard.service';


const routes: Routes = [
  { path: 'login', component: LoginViewComponent},
  { 
    path: 'main', 
    component: MainComponent, canActivate: [AuthGuard],
      children: [
        { path: 'combined', component: CombinedDataViewComponent},
        { path: 'single', component: SingleDataViewComponent},
        { path: 'users', component: UserListViewComponent}
      ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
