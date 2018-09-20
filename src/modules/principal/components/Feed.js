import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

import Repo from "./Repo";

class Feed extends React.Component {
  state = {
    repos: [
      {
        id: 1,
        thumnail:
          "https://culturaalternativa.com.br/wp-content/uploads/2018/02/livros-e-filmes.png",
        title: "Velozes e Furiosos",
        owner: "Gabriel Morandim"
      },
      {
        id: 2,
        thumnail:
          "https://culturaalternativa.com.br/wp-content/uploads/2018/02/livros-e-filmes.png",
        title: "Harry Potter",
        owner: "Gabriel"
      }
    ]
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.repoList}>
          {this.state.repos.map(repo => (
            <Repo key={repo.id} data={repo} />
          ))}
        </ScrollView>
      </View>
    );
  }
}

export default Feed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333"
  },

  repoList: {
    padding: 20
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
