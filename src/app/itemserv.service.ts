import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ItemservService {


  constructor(private ob:HttpClient) { }
  public dataadd(a:string,b:string,c:number,d:number,e:string){
 var url="http://localhost:8000/add"
 var data={itemname:a,itemcmpny:b,itemid:e,itemprice:c,itemqty:d}
 return this.ob.post(url,data)
  }
  public getdata(){
    var url="http://localhost:8000/view"
    return this.ob.get(url)
  }
  public dataget(itemid){
    var url="http://localhost:8000/edit/"+itemid
    return this.ob.get(url)
  }
  public updatedata(a:string,b:string,c:string,d:number,e:number){
    var data={itemname:a,itemcmpny:b,itemid:c,itemprice:d,itemqty:e}
    var url="http://localhost:8000/update"
    return this.ob.post(url,data)
  }
  public deletedata(id){
    var url="http://localhost:8000/delete/"+id
    return this.ob.get(url)
  }
}
