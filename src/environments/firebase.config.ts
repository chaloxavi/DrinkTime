
import {AuthMethods, AuthProviders} from "angularfire2";

export const firebaseConfig = {
  apiKey: "AIzaSyARwWpG7UzrYwy6A4-M6qtRf4UMG1QBR2o",
    authDomain: "drinktime-96c95.firebaseapp.com",
    databaseURL: "https://drinktime-96c95.firebaseio.com",
    projectId: "drinktime-96c95",
    storageBucket: "drinktime-96c95.appspot.com",
    messagingSenderId: "982552984630"
};



export const authConfig = {
    provider: AuthProviders.Password,
    method: AuthMethods.Password
};