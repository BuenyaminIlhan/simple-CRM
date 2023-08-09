import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';
import { Firestore, collection, doc, updateDoc } from '@angular/fire/firestore';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-edit-address',
  templateUrl: './dialog-edit-address.component.html',
  styleUrls: ['./dialog-edit-address.component.scss']
})

export class DialogEditAddressComponent {
  user: User
  loading = false;
  userId: string;
  usersCollection = collection(this.firestore, 'users');

  constructor(public dialog: MatDialog,
    public dialogRef: MatDialogRef<DialogAddUserComponent>,
    private firestore: Firestore) { }

  editUserDetail() {
    const dialog = this.dialog.open(DialogEditAddressComponent);
    dialog.componentInstance.user = this.user;
  }

  editMenu() {
    this.dialog.open(DialogEditUserComponent)
  }

  saveUser() {
    this.loading = true;
    setTimeout(() => {
      const userDoc = doc(this.usersCollection, this.userId);
      updateDoc(userDoc, this.user.toJSON());
      this.dialogRef.close();
    }, 1500);
  }
}
