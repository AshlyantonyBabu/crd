import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule}from '@angular/common/http'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NewitemComponent } from './newitem/newitem.component';
import { EdititemComponent } from './edititem/edititem.component';
import { DeleteitemComponent } from './deleteitem/deleteitem.component';
import { ViewitemComponent } from './viewitem/viewitem.component';
import {RouterModule,Routes}from '@angular/router'
import {ItemservService}from './itemserv.service'
import {FormsModule}from '@angular/forms'
const arr_rut:Routes=[{path:"add",component:NewitemComponent},{path:"view",component:ViewitemComponent},{path:"delete/:id",component:DeleteitemComponent},{path:"edit/:id",component:EdititemComponent}]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewitemComponent,
    EdititemComponent,
    DeleteitemComponent,
    ViewitemComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,RouterModule.forRoot(arr_rut),FormsModule
  ],
  providers: [ItemservService],
  bootstrap: [AppComponent]
})
export class AppModule { }
