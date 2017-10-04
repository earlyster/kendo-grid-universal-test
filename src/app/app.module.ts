import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GridModule } from "@progress/kendo-angular-grid";
import { GroupingComponent } from './grouping/grouping.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GroupingComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full'},
      { path: 'grouping', component: GroupingComponent},
      { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule'},
      { path: 'lazy/nested', loadChildren: './lazy/lazy.module#LazyModule'}
    ]),
    GridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
