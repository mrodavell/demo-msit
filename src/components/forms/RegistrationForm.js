import { View } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";

export default function RegistrationForm({ navigation }) {
  return (
    <View
      style={{
        paddingLeft: 40,
        paddingRight: 40,
        marginTop: 25,
      }}
    >
      <View style={{ alignItems: "center", marginBottom: 10 }}>
        <Text variant="headlineSmall">Registration</Text>
      </View>
      <TextInput label="Email" />
      <TextInput label="Password" style={{ marginTop: 10 }} secureTextEntry />
      <TextInput
        label="Re-type Password"
        style={{ marginTop: 10 }}
        secureTextEntry
      />
      <Button
        mode="contained"
        labelStyle={{ fontSize: 18 }}
        style={{ borderRadius: 7, marginTop: 10 }}
        icon="account-check"
      >
        Register
      </Button>
      <Button
        mode="contained"
        labelStyle={{ fontSize: 18 }}
        style={{ borderRadius: 7, marginTop: 5 }}
        icon="arrow-left"
        onPress={() => navigation.pop()}
      >
        Go Back
      </Button>
    </View>
  );
}
