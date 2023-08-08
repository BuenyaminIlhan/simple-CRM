import { Component, OnInit } from '@angular/core';
import { Firestore, collection, collectionData, doc, getDoc } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  usersCollection = collection(this.firestore, 'users');
  userId: any = '';
  user: User = new User()

  constructor(private route: ActivatedRoute, public firestore: Firestore, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.userId = paramMap.get('id');
      this.getUser()
    })
  }

  async getUser() {
    const userDoc = doc(this.usersCollection, this.userId)
    const userData = await getDoc(userDoc);
    this.user = new User(userData.data());
    console.log(this.user);
  }

  editUserDetail() {

  }
}
