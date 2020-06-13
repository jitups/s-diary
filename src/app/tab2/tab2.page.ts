import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public diary: any;

  constructor(private db: AngularFireDatabase) {
    db.list('/Diary').valueChanges().subscribe(response => this.diary = response);
  }

}
