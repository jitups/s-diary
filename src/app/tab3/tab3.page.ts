import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
 // public content: string;
  public date: string;
  public diary: any;

  constructor(private db: AngularFireDatabase) {
  }

  search() {
    this.db.list('/Diary', ref =>
      ref.orderByChild("date").equalTo(this.date))
      .valueChanges().subscribe(response => this.diary = response);
  }

}
