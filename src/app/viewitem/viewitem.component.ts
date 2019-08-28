import { Component, OnInit } from '@angular/core';
import {ItemservService}from '../itemserv.service'
import {Router}from '@angular/router'
@Component({
  selector: 'app-viewitem',
  templateUrl: './viewitem.component.html',
  styleUrls: ['./viewitem.component.css']
})
export class ViewitemComponent implements OnInit {
m
  constructor(private ob:ItemservService ,private r:Router ) {
    
   }

  ngOnInit() {
    this.ob.getdata().subscribe(data=>this.m=data)
  }
  public Editdata(itemid){
    this.r.navigate(['/edit/',itemid])
  }
  public Deletedata(itemid){
    this.r.navigate(['/delete/',itemid])
  }

}
