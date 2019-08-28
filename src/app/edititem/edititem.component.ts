import { Component, OnInit } from '@angular/core';
import{ ItemservService }from '../itemserv.service'
import {ActivatedRoute,Router}from '@angular/router'
@Component({
  selector: 'app-edititem',
  templateUrl: './edititem.component.html',
  styleUrls: ['./edititem.component.css']
})
export class EdititemComponent implements OnInit {
itemid
m
id
iname
cname
iprice
iqty

  constructor(private ob:ItemservService, private ob1:ActivatedRoute ,private r:Router) { }

  ngOnInit() {
    this.itemid=this.ob1.snapshot.paramMap.get('id')
    if(!(this.itemid==0)){
      this.ob.dataget(this.itemid).subscribe(data=>{this.m=data
        this.iname=this.m.itemname
        this.cname=this.m.itemcmpny
        this.id=this.m.itemid
        this.iprice=this.m.itemprice
        this.iqty=this.m.itemqty
      })
     
    }
  }
public Update(){
  this.ob.updatedata(this.iname,this.cname,this.id,this.iprice,this.iqty).subscribe(data=>this.m=data)
 this.r.navigateByUrl("/view")
}




}
