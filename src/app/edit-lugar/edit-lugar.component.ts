import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { LugarsService } from '../shared/model/lugars.service';

@Component({
  selector: 'app-edit-lugar',
  templateUrl: './edit-lugar.component.html',
  styleUrls: ['./edit-lugar.component.css']
})
export class EditLugarComponent implements OnInit {

  currentLugar;

  constructor(private route: ActivatedRoute, private lugarsService: LugarsService, private router: Router) { }

  ngOnInit() {
    var lugar$ = this.route.params.subscribe(params => {
      const lugarKey = params['id'];
      return this.lugarsService.findLugarByKey(lugarKey).subscribe(
        lugar => {
            this.currentLugar = lugar;
            console.log('current lugar', this.currentLugar);
          }
        );
    });
  }

  save(lugarData) {

  // sends lugar key and data from form to service
    lugarData['userId'] = this.currentLugar.userId;
    this.lugarsService.saveEditedLugar(this.currentLugar.$key, lugarData)
      .subscribe(
        () => {
          this.router.navigate(['/user-profile']);
        },
        err => {
          alert('error saving user: ' + err);
        }
      )
  }

  delete() {
    this.lugarsService.deleteLugar(this.currentLugar.$key)
      .subscribe(
          () => {
            // alert('The selected lugar has been deleted!');
          },
          console.error
        );
  }
  deleteLugarPerUser() {
    this.lugarsService.deleteLugarPerUser(this.currentLugar.$key, this.currentLugar.userId)
      .subscribe(
          () => {
            this.router.navigate(['/user-profile']);
          },
          console.error
        );
  }

}
