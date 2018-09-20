import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

class Repo extends React.Component {
  render() {
    return (
      <View style={styles.repo}>
        <Image
          style={styles.repoImage}
          source={{ uri: this.props.data.thumbnail }}
        />
        <View style={styles.repoInfo}>
          <Text style={styles.repoTitle}>{this.props.data.title}</Text>
          <Text style={styles.repoOwner}>{this.props.data.owner}</Text>
        </View>
      </View>
    );
  }
}

export default Repo;

const styles = StyleSheet.create({
  repo: {
    padding: 20,
    backgroundColor: "#FFF",
    marginBottom: 20,
    borderRadius: 5,
    borderColor: "#FF530D",
    borderBottomColor: "#FF530D",
    flexDirection: "row",
    alignItems: "center"
  },

  repoImage: {
    width: 50,
    height: 50,
    borderRadius: 25
  },

  repoInfo: {
    marginLeft: 10
  },

  repoTitle: {
    fontWeight: "bold",
    color: "#FF530D"
  },

  repoOwner: {
    fontSize: 12,
    color: "#333333"
  }
});
