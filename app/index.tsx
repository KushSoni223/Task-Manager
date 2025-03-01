import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontFamily: "Roboto_400Regular", fontSize: 20 }}>
        Hello, Expo!
      </Text>
      <Text style={{ fontFamily: "Roboto_700Bold", fontSize: 24 }}>
        Bold Text
      </Text>
    </View>
  );
}
