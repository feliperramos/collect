import firebase from "react-native-firebase";
import { AuthenticationStore } from "./AthenticationStore";

class Service {
  async authenticate(email, senha) {
    try {
      let auth = await firebase.auth().signInWithEmailAndPassword(email, senha);

      return auth;
    } catch (e) {
      alert(e);
    }
  }

  async singup(email, senha) {
    try {
      let signup = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, senha);

      return signup;
    } catch (e) {
      alert(e);
    }
  }
}

export const AuthenticationService = new Service();
