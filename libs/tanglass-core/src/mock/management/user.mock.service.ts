
import { Injectable } from '@angular/core';
import {User} from '../../models/management/users'
import { users } from "../../data/management/users.data";
import { BaseMockService } from "../shared/base.mock.service";


@Injectable({
  providedIn: "root",
})
export class UserMockService extends BaseMockService<User>{
  constructor() {
    super();
    this.listData = users;
  }
}
