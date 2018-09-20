import React from "react";
import { View, Text, StyleSheet } from "react-native";

class Chat extends React.Component {
  render() {
    return <View style={styles.container} />;
  }
}

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333"
  },
  header: {
    height: 30,
    alignContent: "center",
    alignItems: "center",
    paddingBottom: 20,
    backgroundColor: "#333333",
    borderBottomWidth: 1,
    borderColor: "#FF530D"
  },
  titleHeader: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF"
  }
});
