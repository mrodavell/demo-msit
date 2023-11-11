import { View, Text } from "react-native";
import Header from "../layout/Header";
import LoginForm from "../forms/LoginForm";

export default function LoginScreen(props) {
  return (
    <View>  
      <Header />
      <LoginForm {...props} />
    </View>
  );
}
