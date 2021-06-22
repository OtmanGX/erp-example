import { Component, Inject, OnInit } from '@angular/core';

import * as _moment from 'moment';

import {default as _rollupMoment, Moment} from 'moment';
import {fr} from "date-fns/locale";
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


const moment = _rollupMoment || _moment;


@Component({
  selector: 'ngx-date-filter',
  templateUrl: './date-filter.component.html',
  styleUrls: ['./date-filter.component.scss'],
})
export class DateFilterComponent implements OnInit {
  months:Array<string> = [];
  weeks;
  date = moment();

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    for (let i = 0; i < 12; i++) {
      this.months.push( fr.localize.month(i, { width: 'abbreviated' }) )
    }
    this.weeks = Array(52).fill(0).map((x,i)=>i+1);
  }

  ngOnInit(): void {
  }

  closePopup(data?: {date: Date, dateText: String}) {
    this.dialogRef.close(data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  async fetchMonth(year, month) {
    const date = new Date(year=year, month=month);
    this.closePopup({date, dateText: `${year} ${this.months[month]}`})
  }

  async fetchYear(year) {
    const date = new Date(year=year);
    this.closePopup({date, dateText: year})

  }

  async fetchWeek(year, week) {
    const date = new Date(year, 0, 7*(week-1));
    this.closePopup({date, dateText: `${year}, Semaine ${week}`})
  }

}
