import { Component, OnInit } from '@angular/core';
import {ActivatedRoute}from '@angular/router'
import {Router}from '@angular/router'
import{ ItemservService }from '../itemserv.service'
@Component({
  selector: 'app-deleteitem',
  templateUrl: './deleteitem.component.html',
  styleUrls: ['./deleteitem.component.css']
})
export class DeleteitemComponent implements OnInit {
id
m
  constructor(private r:ActivatedRoute,private ob:ItemservService,private rt: Router) { }

  ngOnInit() {
    this.id=this.r.snapshot.paramMap.get('id')
 this.ob.deletedata(this.id).subscribe(data=>this.m=data)
 this.rt.navigateByUrl("/view")

  }

}
