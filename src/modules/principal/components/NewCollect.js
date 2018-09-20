import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";

class NewCollect extends React.Component {
  _handleBook() {
    let { navigation } = this.props;
    navigation.navigate("SignUp");
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.titleHeader}>Nova Coleção</Text>
        </View>
        <View style={styles.containerButton}>
          <View style={styles.containerButton}>
            <TouchableOpacity
              style={styles.buttonOptions}
              onPress={this._handleBook.bind(this)}
            >
              <View style={styles.buttonView}>
                <Text style={styles.textButton}>Criar Coleção de Livros</Text>
                <MaterialIcons
                  name="book"
                  size={40}
                  color="#333333"
                  style={styles.styleIcon}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonOptions}
              onPress={this._handleMovie.bind(this)}
            >
              <View style={styles.buttonView}>
                <Text style={styles.textButton}>Criar Coleção de Filmes</Text>
                <MaterialIcons
                  name="movie"
                  size={40}
                  color="#333333"
                  style={styles.styleIcon}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default NewCollect;

const styles = StyleSheet.create({
  header: {
    height: 60,
    alignContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#333333",
    borderBottomWidth: 1,
    borderColor: "#FF530D"
  },
  titleHeader: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF"
  },
  containerButton: {
    backgroundColor: "#333333",
    flexGrow: 1,
    justifyContent: "center"
  },
  buttonOptions: {
    alignSelf: "stretch",
    height: 60,
    backgroundColor: "#FFF",
    marginTop: 30,
    borderRadius: 10,
    justifyContent: "center"
  },
  textButton: {
    alignSelf: "center",
    fontSize: 17,
    color: "#333333"
  },
  container: {
    flex: 1
  },
  styleIcon: {
    alignSelf: "flex-end"
  },
  buttonView: {
    flex: 1,
    justifyContent: "center"
  }
});
