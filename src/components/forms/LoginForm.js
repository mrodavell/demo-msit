import { View } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";

export default function LoginForm({ navigation }) {
  return (
    <View
      style={{
        paddingLeft: 40,
        paddingRight: 40,
        marginTop: 25,
      }}
    >
      <TextInput label="Email" />
      <TextInput label="Password" style={{ marginTop: 10 }} secureTextEntry />
      <Button
        mode="contained"
        labelStyle={{ fontSize: 18 }}
        style={{ borderRadius: 7, marginTop: 10 }}
        icon="login"
      >
        Login
      </Button>
      <Button
        mode="contained"
        labelStyle={{ fontSize: 18 }}
        style={{ borderRadius: 7, marginTop: 5 }}
        icon="account-plus"
        onPress={() => navigation.navigate("Registration")}
      >
        Sign up
      </Button>
      <View style={{ alignItems: "center", marginTop: 10 }}>
        <Text variant="labelLarge">or</Text>
      </View>
      <Button
        mode="contained-tonal"
        labelStyle={{ fontSize: 18 }}
        style={{ borderRadius: 7, marginTop: 10 }}
        icon="lock"
      >
        Recover Access
      </Button>
    </View>
  );
}
