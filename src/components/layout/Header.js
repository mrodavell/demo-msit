import { View, Image } from "react-native";
import Logo from "../../../assets/ustp.png";

export default function Header() {
  return (
    <View style={{ alignItems: 'center'}}>
      <Image source={Logo} style={{ width: 120, height: 120 }} />
    </View>
  );
}
