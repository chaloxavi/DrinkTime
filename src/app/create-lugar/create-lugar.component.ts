import { Component, OnInit } from '@angular/core';
import { AuthService } from "../shared/security/auth.service";
import { LugarsService } from "../shared/model/lugars.service";
import { UsersService } from "../shared/model/users.service";
import { Router } from '@angular/router';

@Component({
  selector: 'create-lugar',
  templateUrl: './create-lugar.component.html',
  styleUrls: ['./create-lugar.component.css']
})
export class CreateLugarComponent implements OnInit {

  constructor(private auth: AuthService, private lugarsService: LugarsService, private router: Router, private usersService: UsersService) { }

  private email: string;
  private userId: string;

  ngOnInit() {
    this.email = this.auth.userEmail;
    this.usersService.findUserByEmail(this.email).subscribe(
      val => {
        console.log(val);
        this.userId = val[0] ? val[0].$key : 'anonymous';
      }
    );

  }

saveLugar(form){
  this.lugarsService.createNewLugar(form.value, this.userId)
    .subscribe(
      () => {
          form.reset();
          this.router.navigateByUrl('user-profile');
       },
       err => {
         alert('error:' + err);
       }
    );

  }

}
