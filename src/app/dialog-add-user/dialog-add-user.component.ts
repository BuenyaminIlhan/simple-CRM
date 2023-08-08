import { Observable } from 'rxjs';
import { Component, Input, inject } from '@angular/core';
import { Firestore, collection, collectionData, setDoc, doc, addDoc } from '@angular/fire/firestore';
import { User } from 'src/models/user.class';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent {
  firestore: Firestore = inject(Firestore)
  user = new User();
  birthDate: Date;
  loading: boolean = false;

  @Input() users$ !: Observable<any[]>;
  usersCollection = collection(this.firestore, 'users');

  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<DialogAddUserComponent>) {  }

  saveUser() {
    this.loading = true
    setTimeout(() => {
      this.user.birthDate = this.birthDate?.getTime();
      addDoc(this.usersCollection, this.user.toJSON())
      this.dialogRef.close();
    }, 1150);
  }
}
