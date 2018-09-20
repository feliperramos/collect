import { createStackNavigator } from "react-navigation";
import { AuthenticationRoutes } from "./modules/authentication/AuthenticationRoutes";
import { PrincipalRoutes } from "./modules/principal/PrincipalRoutes";

let Routes = Object.assign({}, AuthenticationRoutes, {
  Principal: PrincipalRoutes
});

const Navigation = createStackNavigator(Routes, {
  initialRouteName: "Login",
  headerMode: "none"
});

export default Navigation;
