import { View, Text } from "react-native";
import React from "react";
import { Button } from "@/components/button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: "black" }}>index</Text>
      <Button
        title="Logout"
        onPress={() => {
          AsyncStorage.setItem("isUserLogin", "false");
          router.replace("/(auth)/login");
        }}
      />
    </View>
  );
}
