import { useAuth } from "@clerk/expo";

import { Redirect } from "expo-router";
import { NativeTabs, Icon, Label } from "expo-router/unstable-native-tabs";

import { useColorScheme } from "react-native";
export default function TabsLayout() {
  const { isSignedIn, isLoaded } = useAuth();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const tabTintColor = isDark ? "hsl(142 70% 54%)" : "hsl(147 75% 33%)";

  if (!isLoaded) {
    return null;
  }

  if (!isSignedIn) {
    return <Redirect href="/(auth)/sign-in" />;
  }

  return (
    <NativeTabs tintColor={tabTintColor}>
      <NativeTabs.Trigger name="index">
        <Label>List</Label>
        <Icon
          src={{
            default: require("../../assets/images/tabIcons/clipboard.png"),
            selected: require("../../assets/images/tabIcons/clipboard-filled.png"),
          }}
        />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="planner">
        <Icon src={require("../../assets/images/tabIcons/add.png")} />
        <Label>Planner</Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="insights">
        <Icon src={require("../../assets/images/tabIcons/insights.png")} />
        <Label>Insights</Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
