import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";

import { NavigationActions, withNavigation } from "react-navigation";

import SignUp from "./SignUp";
import Feed from "../../principal/components/Feed";

import AuthenticationRoutes from "../AuthenticationRoutes";
import PrincipalRoutes from "../../principal/PrincipalRoutes";
import { AuthenticationStore } from "../AthenticationStore";
import { observer } from "mobx-react";

@observer
class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "joao@joao.com",
      senha: "123456",
      isLoading: false
    };
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

  _handleSignUp() {
    let { navigation } = this.props;
    navigation.navigate("SignUp");
  }
  async _autenticarUsuario() {
    let { email, senha } = this.state;
    let { navigation } = this.props;

    this.setState({
      isLoading: true
    });

    await AuthenticationStore.authenticateUser(email, senha);
    this.setState({
      isLoading: false
    });
    if (AuthenticationStore.user == null) {
      alert(e);
    } else {
      navigation.navigate("Feed");
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require("../images/Logo.png")} />
        </View>
        <View style={styles.formContainer}>
          <TextInput
            value={this.state.email}
            placeholder="Usuário ou Email"
            placeholderTextColor="#FFF"
            returnKeyType="next"
            onSubmitEditing={() => this.passwordInput.focus()}
            KeyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            underlineColorAndroid="#FF530D"
            onChangeText={this._handleEmail.bind(this)}
          />
          <TextInput
            value={this.state.senha}
            placeholder="Password"
            placeholderTextColor="#FFF"
            returnKeyType="go"
            secureTextEntry
            style={styles.input}
            ref={input => (this.passwordInput = input)}
            underlineColorAndroid="#FF530D"
            onChangeText={this._handleSenha.bind(this)}
          />
          <Text style={styles.textError}>{this.props.erroLogin}</Text>

          {this.state.isLoading ? (
            <ActivityIndicator size="large" color="#FF530D" />
          ) : (
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={this._autenticarUsuario.bind(this)}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          )}
          <View style={styles.signupTextCont}>
            <Text style={styles.signupText}>Não possui cadastro?</Text>
            <Text
              style={styles.signupButton}
              onPress={this._handleSignUp.bind(this)}
            >
              Cadastre-se
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default withNavigation(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
    justifyContent: "center",
    alignItems: "center"
  },

  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center"
  },

  buttonContainer: {
    backgroundColor: "#FF530D",
    paddingVertical: 15,
    borderRadius: 10
  },

  input: {
    height: 40,
    width: 300,
    backgroundColor: "#333333",
    marginBottom: 20,
    color: "#FFF",
    paddingHorizontal: 10,
    borderRadius: 10
  },
  signupTextCont: {
    padding: 30,
    alignItems: "center"
  },
  signupText: {
    color: "#FFF",
    fontSize: 16,
    opacity: 0.6
  },
  signupButton: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "500"
  },
  textError: {
    color: "#FF0000",
    fontSize: 18
  },

  buttonText: {
    alignSelf: "center",
    color: "#FFF"
  }
});
