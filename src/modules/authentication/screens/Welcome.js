import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

export default props => (
  <View style={styles.container}>
    <View style={styles.container2}>
      <Text style={styles.title}>Welcome to</Text>
      <Image source={require("../images/Logo.png")} />
    </View>
    <View style={styles.container3}>
      <TouchableOpacity style={styles.buttonLogin}>
        <Text style={styles.buttonText}>Fazer Login</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#333333"
  },
  container2: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  container3: {
    flex: 3
  },
  buttonLogin: {
    backgroundColor: "#FF530D",
    paddingVertical: 15,
    borderRadius: 10
  },

  buttonText: {
    textAlign: "center",
    color: "#FFF",
    fontWeight: "700"
  },
  title: {
    color: "#FFF",
    padding: 50,
    fontSize: 18
  }
});
