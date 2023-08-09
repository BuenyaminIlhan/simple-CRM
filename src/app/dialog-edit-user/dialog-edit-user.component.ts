import { Firestore, collection, doc, updateDoc } from '@angular/fire/firestore';
import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { update } from '@angular/fire/database';
import { User } from 'c:/Users/me/Documents/webentwickler/Angular/simple-CRM/src/models/user.class';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss']
})
export class DialogEditUserComponent {
  birthDate: Date;
  loading = false;
  userId: string;
  usersCollection = collection(this.firestore, 'users');
  user: User;



  constructor(public dialog: MatDialog,
    public dialogRef: MatDialogRef<DialogAddUserComponent>,
    private firestore: Firestore) { }


    saveUser() {
      this.loading = true;
      setTimeout(() => {
        const userDoc = doc(this.usersCollection, this.userId);
        updateDoc(userDoc, this.user.toJSON())
        this.dialogRef.close();
      }, 1500);
    }
}
