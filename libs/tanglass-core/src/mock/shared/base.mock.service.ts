import { of as observableOf,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {BaseModel} from '../../models/baseModel.model'


@Injectable({
  providedIn: "root",
})
export abstract class BaseMockService<T extends BaseModel>  {
   listData: T[];

  /** GET DATA from fake data */

  getAll(): Observable<T[]> {
    return  observableOf(this.listData);
  }
  /** GET DATA by id.  */

  getOneById(id: number): Observable<T> {
    return observableOf(this.listData.find(data =>data.id === id));

  }
  /** POST: add a new element to the fake data  */

  addNewOne(data: T): Observable<T>{
    let id=this.listData.length+1
    data.id=id
    this.listData.push(data)
    return observableOf(data)
  }
  addMany(data:T[]): Observable<T[]>{
    for(let item of data){
      this.addNewOne(item)
    }
    return observableOf(this.listData)
  }

  updateOne(data: T): Observable<T> {
    let id=data.id
    let index =this.listData.findIndex(item =>item.id === id)
    this.listData[index]=data
    return observableOf(data)
  }

}



