import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../shared/model/user';
import { UsersService } from "../shared/model/users.service";
import { AuthService } from "../shared/security/auth.service";
import{AngularFire, AngularFireDatabase,FirebaseListObservable} from 'angularfire2';


import { Observable } from 'rxjs';
import * as firebase from 'firebase';

 var config = {
   apiKey: "AIzaSyAW-cZ5cQjW0FRc53Zuya7BXf5Er5EHkeA",
    authDomain: "drinktime-f1b35.firebaseapp.com",
    databaseURL: "https://drinktime-f1b35.firebaseio.com",
    projectId: "drinktime-f1b35",
    storageBucket: "drinktime-f1b35.appspot.com",
    messagingSenderId: "19232824594"
  };


@Component({
  selector: 'app-edit-userprofile',
  templateUrl: './edit-userprofile.component.html',
  styleUrls: ['./edit-userprofile.component.css']
})
export class EditUserprofileComponent implements OnInit {

  user: User;

  constructor(private route: ActivatedRoute, private usersService: UsersService, private router: Router, private auth: AuthService) {  
    //receives input data for the component before component was created by router.
    route.data.subscribe(
      data => this.user = data['user']
    )
  }

  ngOnInit() {
  }


  save(userData) {
  // sends user key and data from form to service
    userData['email'] = this.auth.userEmail;
    
    console.log(userData['photo']);
  
    this.usersService.saveEditedUser(this.user.$key, userData)
      .subscribe(
        () => {
          this.router.navigate(['/user-profile']);
        },
        err => {
          alert('error saving user: ' + err);
        }
      )
  }

 
  



}
