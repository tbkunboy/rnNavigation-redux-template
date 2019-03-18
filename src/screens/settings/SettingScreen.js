import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { LoginManager } from "react-native-fbsdk";

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  logoutFB = () => {
    LoginManager.logOut();
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text> Settings </Text>
        <TouchableOpacity
          style={{ backgroundColor: "red" }}
          onPress={this.logoutFB}
        >
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Settings;
