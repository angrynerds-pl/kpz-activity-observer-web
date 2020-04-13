import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarItemComponent } from './navbar-item/navbar-item.component';
import { MainComponent } from './main/main.component';
import { LoginViewComponent } from './login-view/login-view.component';
import { SingleDataViewComponent } from './single-data-view/single-data-view.component';
import { CombinedDataViewComponent } from './combined-data-view/combined-data-view.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { UserListComponent } from './user-list/user-list.component';
import { SingleUserDataComponent } from './single-user-data/single-user-data.component';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { UserListViewComponent } from './user-list-view/user-list-view.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { UserAccountDetailsComponent } from './user-account-details/user-account-details.component';
import {HttpClientModule} from '@angular/common/http';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatPaginatorModule} from '@angular/material/paginator';
import { VisitCounterComponent } from './charts/visit-counter/visit-counter.component';
import { UserCounterComponent } from './charts/user-counter/user-counter.component';
import { TimePercentageComponent } from './charts/time-percentage/time-percentage.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarItemComponent,
    MainComponent,
    LoginViewComponent,
    SingleDataViewComponent,
    CombinedDataViewComponent,
    UserListComponent,
    SingleUserDataComponent,
    UserListViewComponent,
    UserAccountDetailsComponent,
    VisitCounterComponent,
    UserCounterComponent,
    TimePercentageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatCheckboxModule,
    NgxChartsModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
