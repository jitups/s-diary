import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { registerLocaleData } from '@angular/common';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public diary: any;

  constructor(private db: AngularFireDatabase) {
    db.list('/Diary', ref => ref.limitToLast(5)).valueChanges().subscribe(response => this.diary = response);
  }

}
