import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {
  data = [
    {label: 'name', value: 'OthmanGX'},
    {label: 'tags', value: ['gx', 'dx', 'fx'], type: 'view'},
    {label: 'companies', value: ['mi', 'na', 'ha'], type: 'view'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

  login(param: {password: string; username: string}) {

  }
}
