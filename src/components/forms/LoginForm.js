import { View, TextInput, Button, Text, StyleSheet } from "react-native";
import React from "react";
import styles from "../../themes/styles";
// Stateful
export default function LoginForm(props) {
  const [count, setCount] = React.useState(0);
  const [textData, setTextData] = React.useState("");

  const handlePress = () => {
    setCount((prev) => prev + 1);
  };

  React.useEffect(() => {
    // process
  }, []);

  return (
    <View>
      <Text style={styled.textContainer}>
        Number of Characters: {textData.length}
      </Text>
      <TextInput
        placeholder="Text"
        value={props.date}
        style={{
          borderWidth: 1,
          paddingLeft: 10,
          marginTop: 10,
          marginBottom: 10,
          height: 50,
          width: 200,
        }}
        onChangeText={setTextData}
        onFocus={() => console.debug("Focused")}
        onBlur={() => console.debug("Blur")}
      />
      <Text style={styled.textContainer}>
        Typed Text: {textData}
      </Text>
      <Button title="Press me" onPress={handlePress} />
    </View>
  );
}

const styled = StyleSheet.create(styles);
