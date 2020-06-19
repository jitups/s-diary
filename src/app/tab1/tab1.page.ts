import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { DatePipe } from '@angular/common';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  public Entry: string;
  public UserName: string;
  public IsUserNameSaved: boolean = false;


  constructor(private db: AngularFireDatabase,
    private nativeStorage: NativeStorage
  ) {

  }

  ngOnInit() {
    this.checkSavedName();
  }

  saveUserName() {
    this.nativeStorage.setItem("userName", this.UserName).then(value => console.log(value));
    this.checkSavedName();
  }

  private checkSavedName() {
    this.nativeStorage.getItem("userName").then(item => {
      if (!item) {
        this.IsUserNameSaved = false;
      }
      else {
        this.IsUserNameSaved = true;
        this.UserName = item;
      }
    });
  }

  addItem() {
    let now = new Date();
    let date = new DatePipe('en-in').transform(now, 'dd MMM yy');
    let time = new DatePipe('en-in').transform(now, 'hh:mm');
    let author = this.UserName;    

    this.db.list('/Diary').push({ 'Date': date, 'Time': time, 'Details': this.Entry, 'Author': author });
  }

}
