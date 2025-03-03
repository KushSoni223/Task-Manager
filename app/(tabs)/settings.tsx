import { Button } from "@/components/button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function Tab() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: "black" }}>index</Text>
      <Button
        title="Logout"
        onPress={() => {
          AsyncStorage.setItem("isUserLogin", "false");
          AsyncStorage.removeItem("auth_token");
          router.replace("/(auth)/login");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
