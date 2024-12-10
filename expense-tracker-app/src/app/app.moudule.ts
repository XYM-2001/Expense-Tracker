import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { ReportsComponent } from './reports/reports.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    ExpenseListComponent,
    ReportsComponent,
    AddExpenseComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
