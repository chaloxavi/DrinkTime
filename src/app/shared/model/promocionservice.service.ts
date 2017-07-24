import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { User} from './user';
import{Promociones} from './promociones';
import { AngularFire, FirebaseRef } from 'angularfire2';
import { Subject } from "rxjs/Rx";
import { Http } from '@angular/http';
import { firebaseConfig } from "../../../environments/firebase.config";



@Injectable()
export class PromocionserviceService {

  sdkDb: any;
  currentUser: any;
  constructor(private af: AngularFire, @Inject(FirebaseRef) fb, private http:Http) {
  this.sdkDb = fb.database().ref();

   }
  todas_promociones(): Observable<Promociones[]> {
    return this.af.database.list('promociones')
      .do(console.log)
      .map(promocionesJson => Promociones.fromJsonList(promocionesJson));
  }

  nuevas_promociones(promocionData: any, userId: string): Observable<any> {
        const promocion_guardar = Object.assign({}, promocionData, { userId: userId });
        const nueva_promocion_Key = this.sdkDb.child('promociones').push().key;
        let dataToSave = {};
        dataToSave["promociones/" + nueva_promocion_Key] = promocion_guardar;
        dataToSave["promociones_usuarios/" + userId + "/" + nueva_promocion_Key] = true;
        // save into both tables at once. we will need this to edit lessons too, so separate function.
        return this.firebaseUpdate(dataToSave);
  }

  editar_promocion(promocionId, promocion):Observable<any>{
    // put the skill data into a blank object
    const promocion_guardar = Object.assign({}, promocion);
    //we don't want the key to be inside of the skillToSave object because it's part of the url.
    delete(promocion_guardar.$key); 
    let dataToSave = {};
    // then we save the skill data inside of an object with key at skills/skillId
    dataToSave['promociones/' + promocionId] = promocion_guardar;
    // this time we don't need to update the skillsPerCourse because the association is already there.
    return this.firebaseUpdate(dataToSave);
  }



 firebaseUpdate(dataToSave) {
    // create rxjs subject so that we can convert it to an observable to return. we want to stay consistent and use observables rather than promises or callbacks. 
    const subject = new Subject();
    this.sdkDb.update(dataToSave)
      .then(
          val => {
            subject.next(val);
            subject.complete();
          },
          err => {
            subject.error(err);
            subject.complete();
          }
        );
    return subject.asObservable();
  }
  findSkillByKey(key){
    return this.af.database.object('promociones/' + key);
  }
  deleteSkill(key){
    const url = firebaseConfig.databaseURL + '/lessons/' + key + '.json';
    return this.http.delete(url);
  }
  deleteSkillPerUser(key, userId){
    console.log(key, userId);
    const url_promocion_usuario = firebaseConfig.databaseURL + '/promocion_usuario/' + userId + '/' + key + '.json';
    return this.http.delete(url_promocion_usuario);
  }
}