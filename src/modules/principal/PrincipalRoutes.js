import React from "React";
import { createBottomTabNavigator } from "react-navigation";
import MaterialICons from "react-native-vector-icons/MaterialIcons";

import Feed from "./components/Feed";
import NewCollect from "./components/NewCollect";
import Chat from "./components/Chat";
import Search from "./components/Search";
import { renderReporter } from "mobx-react";

export const PrincipalRoutes = createBottomTabNavigator(
  {
    Nova: {
      screen: NewCollect
    },
    Feed: {
      screen: Feed
    },
    Pesquisar: {
      screen: Search
    },
    Chat: {
      screen: Chat
    },
    Perfil: {
      screen: Search
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Feed") {
          iconName = "home";
        } else if (routeName === "Chat") {
          iconName = "chat";
        } else if (routeName === "Pesquisar") {
          iconName = "search";
        } else if (routeName === "Perfil") {
          iconName = "person";
        } else if (routeName === "Nova") {
          iconName = "add-circle-outline";
        }
        return <MaterialICons name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "#FF530D",
      inactiveTintColor: "#333333"
    }
  }
);
