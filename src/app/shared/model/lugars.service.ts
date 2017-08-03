import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { User} from './user';
import { Lugar } from './lugar';
import { AngularFire, FirebaseRef } from 'angularfire2';
import { Subject } from "rxjs/Rx";
import { Http } from '@angular/http';
import { firebaseConfig } from "../../../environments/firebase.config";

@Injectable()
export class LugarsService {

  sdkDb: any;
  currentUser: any;

  constructor(private af: AngularFire, @Inject(FirebaseRef) fb, private http:Http) {
    this.sdkDb = fb.database().ref();
  }


  findAllLugars(): Observable<Lugar[]> {
    return this.af.database.list('lugars')
      .do(console.log)
      .map(lugarsAsJson => Lugar.fromJsonList(lugarsAsJson));
  }

  createNewLugar(lugarData: any, userId: string): Observable<any> {
        const lugarToSave = Object.assign({}, lugarData, { userId: userId });
        const newLugarKey = this.sdkDb.child('lugars').push().key;
        let dataToSave = {};
        dataToSave["lugars/" + newLugarKey] = lugarToSave;
        dataToSave["lugarsPerUser/" + userId + "/" + newLugarKey] = true;
        // save into both tables at once. we will need this to edit lessons too, so separate function.
        return this.firebaseUpdate(dataToSave);
  }

  saveEditedLugar(lugarId, lugar):Observable<any>{
    // put the lugar data into a blank object
    const lugarToSave = Object.assign({}, lugar);
    //we don't want the key to be inside of the lugarToSave object because it's part of the url.
    delete(lugarToSave.$key); 
    let dataToSave = {};
    // then we save the lugar data inside of an object with key at lugars/lugarId
    dataToSave['lugars/' + lugarId] = lugarToSave;
    // this time we don't need to update the lugarsPerCourse because the association is already there.
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
  findLugarByKey(key){
    return this.af.database.object('lugars/' + key);
  }
  deleteLugar(key){
    const url = firebaseConfig.databaseURL + '/lessons/' + key + '.json';
    return this.http.delete(url);
  }
  deleteLugarPerUser(key, userId){
    console.log(key, userId);
    const urlLugarPerUser = firebaseConfig.databaseURL + '/lugarsPerUser/' + userId + '/' + key + '.json';
    return this.http.delete(urlLugarPerUser);
  }
}
