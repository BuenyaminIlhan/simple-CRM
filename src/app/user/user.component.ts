import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { Observable } from 'rxjs';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  constructor(public dialog: MatDialog, private firestore: Firestore) {
    this.getUser()
  }
  @Input() users$ !: Observable<any[]>;
  usersCollection = collection(this.firestore, 'users');


  openDialog() {
    this.dialog.open(DialogAddUserComponent)
  }

  getUser() {
    this.users$ = collectionData(this.usersCollection, { idField: 'id' })
    this.users$.forEach(user => {
    });
  }
}
