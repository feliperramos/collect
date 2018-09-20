import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput
} from "react-native";

import { observer } from "mobx-react";
import { AuthenticationStore } from "../AthenticationStore";

@observer
class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: "",
      email: "",
      senha: "",
      errorMessage: null,
      isLoading: false
    };
  }

  _handleNome(text) {
    console.log(text);
    this.setState({
      nome: text
    });
  }
  _handleEmail(text) {
    console.log(text);
    this.setState({
      email: text
    });
  }

  _handleSenha(text) {
    console.log("Cheguei");
    console.log(text);
    this.setState({
      senha: text
    });
  }
  async _cadastrarUsuario() {
    let { email, senha } = this.state;
    let { navigation } = this.props;

    this.setState({
      isLoading: true
    });

    await AuthenticationStore.signUpUser(email, senha);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Cadastre-se</Text>
        </View>
        <View style={styles.boxInput}>
          <TextInput
            placeholder="Nome"
            placeholderTextColor="#FFF"
            returnKeyType="next"
            autoCapitalize="none"
            underlineColorAndroid={"transparent"}
            style={styles.input}
            onChangeText={this._handleNome.bind(this)}
            value={this.state.nome}
          />
          <TextInput
            value={this.state.email}
            placeholder="Usuário ou Email"
            placeholderTextColor="#FFF"
            returnKeyType="next"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            underlineColorAndroid={"transparent"}
            onChangeText={this._handleEmail.bind(this)}
          />
          <TextInput
            value={this.state.senha}
            placeholder="Password"
            placeholderTextColor="#FFF"
            returnKeyType="go"
            secureTextEntry
            style={styles.input}
            underlineColorAndroid={"transparent"}
            onChangeText={this._handleSenha.bind(this)}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={this._cadastrarUsuario.bind(this)}
          >
            <Text style={styles.textButon}>Continuar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: "#333333",
    justifyContent: "center"
  },
  header: {
    alignSelf: "stretch"
  },
  headerText: {
    fontSize: 24,
    color: "#FFF",
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#FF700D"
  },
  boxInput: {
    backgroundColor: "#333333"
  },
  input: {
    alignSelf: "stretch",
    height: 40,
    marginBottom: 30,
    color: "#FFF",
    borderBottomColor: "#FF530D",
    borderBottomWidth: 1
  },
  button: {
    alignSelf: "stretch",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#FF530D",
    marginTop: 30,
    borderRadius: 10
  },
  textButon: {
    color: "#FFF",
    fontWeight: "bold"
  }
});
