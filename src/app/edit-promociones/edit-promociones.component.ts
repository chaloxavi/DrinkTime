import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { PromocionserviceService } from '../shared/model/promocionservice.service';

@Component({
  selector: 'app-edit-promociones',
  templateUrl: './edit-promociones.component.html',
  styleUrls: ['./edit-promociones.component.css']
})
export class EditPromocionesComponent implements OnInit {

  current_promocion;

  constructor(private route: ActivatedRoute, private promocionService: PromocionserviceService, private router: Router) { }

  ngOnInit() {
     var skill$ = this.route.params.subscribe(params => {
      const skillKey = params['id'];
      return this.skillsService.findSkillByKey(skillKey).subscribe(
        skill => {
            this.current_promocion = skill;
            console.log('current skill', this.current_promocion);
          }
        );
    });
  }

}
