import { View, Text } from "react-native";
import Header from "../layout/Header";
import LoginForm from "../forms/LoginForm";

export default function LoginScreen(props) {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Header />
      <LoginForm {...props} />
    </View>
  );
}
