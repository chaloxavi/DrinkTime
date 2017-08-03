import { Component, OnInit, Input } from '@angular/core';
import { Lugar } from "../shared/model/lugar";
import { Router } from '@angular/router';

@Component({
  selector: 'lugars-list',
  templateUrl: './lugars-list.component.html',
  styleUrls: ['./lugars-list.component.css']
})
export class LugarsListComponent implements OnInit {
  @Input()
  lugars: Lugar[];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToEdit(lugarObject){
    this.router.navigate(['edit-lugar', lugarObject.$key]);
  }

}
