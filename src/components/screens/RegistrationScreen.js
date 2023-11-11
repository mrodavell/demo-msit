import { View, Text } from "react-native";
import React from "react";
import RegistrationForm from "../forms/RegistrationForm";
import Header from "../layout/Header";

export default function RegistrationScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Header />
      <RegistrationForm />
    </View>
  );
}
