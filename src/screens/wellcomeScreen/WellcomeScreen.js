import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { loginFB } from "./";
import styles from "./styles";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes
} from "react-native-google-signin";
import configs from "../../configs";

class WellcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    GoogleSignin.configure({
      scopes: ["https://www.googleapis.com/auth/drive.readonly"], // what API you want to access on behalf of the user, default is email and profile
      // webClientId:
      //   "136943183578-4091igq3uv7pjdkv0mn2o83qe55u8ole.apps.googleusercontent.com", // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: false, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      hostedDomain: "", // specifies a hosted domain restriction
      loginHint: "", // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
      forceConsentPrompt: true, // [Android] if you want to show the authorization prompt at each login.
      accountName: "", // [Android] specifies an account name on the device that should be used
      iosClientId: configs.webClientId // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    });
  }
  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({ userInfo });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };
  render() {
    console.log(this.state);
    return (
      <View style={styles.container}>
        <Text> textInComponent </Text>
        <TouchableOpacity
          onPress={loginFB}
          style={{ backgroundColor: "green" }}
        >
          <Text>Login fb</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.signIn}
          style={{ backgroundColor: "red" }}
        >
          <Text>Login google</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default WellcomeScreen;
