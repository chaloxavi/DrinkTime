import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import * as firebase from 'firebase';

@Component({
  selector: 'userprofile-form',
  templateUrl: './userprofile-form.component.html',
  styleUrls: ['./userprofile-form.component.css']
})
export class UserprofileFormComponent implements OnInit, OnChanges {

  @Input()
  initialValue: any;

  form: FormGroup;
  

  constructor(private formBuilder: FormBuilder) { 
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      photo: ['', Validators.required],
      occupation: ['', Validators.required],
      location: ['', Validators.required]
    });

  }

  ngOnInit(){}

  ngOnChanges(changes:SimpleChanges) {
    //make sure form is initialized and look for changes to initialValue input property
    if(this.form && changes['initialValue']) {
      this.form.patchValue(changes['initialValue'].currentValue)
    }

  }
    onChange(event) {
    var files = event.srcElement.files;
    var storage = firebase.storage();

  
    console.log(files);
  
  var storageRef = firebase.storage().ref();
  
  //dynamically set reference to the file name
  var thisRef = storageRef.child(files.name);

  //put request upload file to firebase storage
  thisRef.put(files).then(function(snapshot) {
    //console.log('Uploaded a blob or file!'+thisRef);
});


  
  //get request to get URL for uploaded file
 thisRef.getDownloadURL().then(function(url) {
  console.log(url);
  })
    console.log(files);
  }

  isErrorVisible(field: string, error:string) {
    return this.form.controls[field].dirty //has been touched
      && this.form.controls[field].errors //if form is associated with the field
      && this.form.controls[field].errors[error]; //if the error includes the given error.
  }

  // We need this to get the values from the form
  get value() {
    return this.form.value;
  }

  get valid() {
    return this.form.valid;
  }

  reset() {
    this.form.reset();
  }


}
