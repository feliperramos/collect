import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "react-navigation";

import Login from "./screens/Login";
import SignUp from "./screens/SignUp";

export const AuthenticationRoutes = {
  Login: {
    screen: Login
  },
  SignUp: {
    screen: SignUp
  }
};
