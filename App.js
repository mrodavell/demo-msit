import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LoginScreen from "./src/components/screens/LoginScreen";

export default function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StatusBar style="auto" />
      <LoginScreen />
    </SafeAreaView>
  );
}
