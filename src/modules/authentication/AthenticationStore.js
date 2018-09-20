import { observable, action } from "mobx";
import { AuthenticationService } from "./AuthenticationService";

class Store {
  @observable
  user = null;

  @action.bound
  async authenticateUser(email, senha) {
    // chama o service para fazer o login no firebase
    console.log("Autenticando...", email, senha);
    this.user = await AuthenticationService.authenticate(email, senha);

    return true;
  }

  @action.bound
  async signUpUser(email, senha) {
    console.log("Registrando...", email, senha);
    let response = await AuthenticationService.singup(email, senha);
    console.log("response:", response);

    return response;
  }
}

export const AuthenticationStore = new Store();
