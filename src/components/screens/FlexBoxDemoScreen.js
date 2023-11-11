import { View, Text } from "react-native";
import React from "react";

export default function FlexBoxDemoScreen() {
  return (
    <View style={{ flex: 1, padding: 10 }}>
      <View
        style={{ 
          flex: 1,
          padding: 10,
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Text style={{ color: "black", fontSize: 30 }}>Item</Text>
        <Text style={{ color: "black", fontSize: 30 }}>Item 1</Text>
        <Text style={{ color: "black", fontSize: 30 }}>Item 2</Text>
      </View>
    </View>
  );
}
