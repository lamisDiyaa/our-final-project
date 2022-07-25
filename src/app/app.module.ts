import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import {AngularFireModule} from '@angular/fire';
import { AngularFireModule } from "@angular/fire/compat";
// import {AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
// import {AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
// import { FormsModule } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {CrudService} from './service/crud.service';
import { ShowRestrentsComponent } from './components/show-restrents/show-restrents.component';
import { AddRestrantsComponent } from './components/add-restrants/add-restrants.component';
import { SearchFilterPipe } from './Pipe/search-filter.pipe';
import { AsideComponent } from './components/aside/aside.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OrdersComponent } from './components/orders/orders.component';
import { RecentOrdersComponent } from './components/recent-orders/recent-orders.component';
import { SalesComponent } from './components/sales/sales.component';
import { SalesAnalyticsComponent } from './components/sales-analytics/sales-analytics.component';
import { ShowDataComponent } from './components/show-data/show-data.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DisplayRestrantComponent } from './components/display-restrant/display-restrant.component';
import { TestComponent } from './components/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowRestrentsComponent,
    AddRestrantsComponent,
    SearchFilterPipe,
    AsideComponent,
    DashboardComponent,
    OrdersComponent,
    RecentOrdersComponent,
    SalesComponent,
    SalesAnalyticsComponent,
    ShowDataComponent,
    DisplayRestrantComponent,
    TestComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FontAwesomeModule
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
