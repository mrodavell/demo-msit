import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { PaperProvider } from "react-native-paper";
import theme from "./src/themes/theme";
import NavigationStack from "./src/components/navigation/NavigationStack";

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar style="auto" />
        <NavigationStack />
      </SafeAreaView>
    </PaperProvider>
  );
}
