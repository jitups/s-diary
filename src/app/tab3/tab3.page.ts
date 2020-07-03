import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  // public content: string;
  public date: string;
  public diary: any;

  constructor(private db: AngularFireDatabase,
   private datepipe: DatePipe) {

  }

  search() {
    var formattedDate = this.datepipe.transform(this.date, 'dd MMM yy');

    this.db.list('/Diary', ref =>
      ref.orderByChild("Date").equalTo(formattedDate)) // added indexon rule on Date in database
      .valueChanges().subscribe(response => {
        console.log(formattedDate, response);
        this.diary = response;
      });
  }

}
