import { Component, OnInit } from '@angular/core';
import {ItemservService}from '../itemserv.service'
import{NgModel}from '@angular/forms'
import {Router}from '@angular/router'

@Component({
  selector: 'app-newitem',
  templateUrl: './newitem.component.html',
  styleUrls: ['./newitem.component.css']
})
export class NewitemComponent implements OnInit {
iname:string
cname:string
iid:string
ip:string
iq:string
price 
qty
m
p=79789
view:boolean=false
  constructor(private ob1:ItemservService,private ob2:Router) { }

  ngOnInit() {
   
  }
public Additem(){
  this.view=true
  this.price=parseInt(this.ip)
  this.qty=parseInt(this.iq)
  this.ob1.dataadd(this.iname,this.cname,this.price,this.qty,this.iid).subscribe(data=>this.m=data)
  this.ob2.navigateByUrl("/view")
}
}
