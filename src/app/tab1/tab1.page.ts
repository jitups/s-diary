import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public Entry: string;

  constructor(private db: AngularFireDatabase) { }

  addItem() {
    let now = new Date();
    let date = new DatePipe('en-in').transform(now, 'dd MMM yy');
    let time = new DatePipe('en-in').transform(now, 'hh:mm');

    this.db.list('/Diary').push({ 'Date': date, 'Time': time, 'Details': this.Entry });
  }

}
