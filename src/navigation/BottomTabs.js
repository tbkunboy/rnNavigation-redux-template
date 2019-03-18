import { Navigation } from "react-native-navigation";

export const BottomTab = () => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          { stack: { children: [{ component: { name: "Home" } }] } },
          { stack: { children: [{ component: { name: "Settings" } }] } }
        ]
      }
    }
  });
};
