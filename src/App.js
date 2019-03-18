import { Navigation } from "react-native-navigation";

import { registerScreens } from "./screens/registerScreens";

registerScreens();
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        id: "WellcomeScreen",
        name: "WellcomeScreen"
      }
    }
  });
});
