import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppMaterialModule } from './app.material.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DummyComponent } from './dummy/dummy.component';

import { MenuService } from './shared/menu/menu.service';

export const ROUTES = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dummy', component: DummyComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DummyComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    AppMaterialModule
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
