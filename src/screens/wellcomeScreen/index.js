//index làm container chứa logic đi
import WellcomeScreen from "./WellcomeScreen";
import { LoginManager } from "react-native-fbsdk";

import { BottomTab } from "../../navigation/BottomTabs";

export const loginFB = () => {
  LoginManager.logInWithReadPermissions(["public_profile"]).then(
    function(result) {
      if (result.isCancelled) {
        console.log("Login cancelled");
      } else {
        console.log(
          "Login success with permissions: " +
            result.grantedPermissions.toString()
        );
        BottomTab();
      }
    },
    function(error) {
      console.log("Login fail with error: " + error);
    }
  );
};
export default WellcomeScreen;
