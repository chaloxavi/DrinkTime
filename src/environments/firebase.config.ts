
import {AuthMethods, AuthProviders} from "angularfire2";

export const firebaseConfig = {
   apiKey: "AIzaSyAW-cZ5cQjW0FRc53Zuya7BXf5Er5EHkeA",
    authDomain: "drinktime-f1b35.firebaseapp.com",
    databaseURL: "https://drinktime-f1b35.firebaseio.com",
    projectId: "drinktime-f1b35",
    storageBucket: "drinktime-f1b35.appspot.com",
    messagingSenderId: "19232824594"
};



export const authConfig = {
    provider: AuthProviders.Password,
    method: AuthMethods.Password
};