import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";
import LoginScreen from "./src/components/screens/LoginScreen";
import RegistrationScreen from "./src/components/screens/RegistrationScreen";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "tomato",
    secondary: "yellow",
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar style="auto" />
        <RegistrationScreen />
      </SafeAreaView>
    </PaperProvider>
  );
}
