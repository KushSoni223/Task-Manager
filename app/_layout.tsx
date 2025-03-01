import { Stack } from "expo-router";
import { View, ActivityIndicator } from "react-native";
import { useLoadFonts } from "../hooks/useLoadFonts";
import { useState } from "react";
import SplashScreen from "../components/splashScreen";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  const appIsReady = useLoadFonts();
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  if (!appIsReady) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <StatusBar style="dark" backgroundColor="#ffffff" />
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return (
    <>
      <StatusBar style="dark" backgroundColor="#ffffff" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        {/* <Stack.Screen name="auth/login" />
      <Stack.Screen name="auth/signup" /> */}
      </Stack>
    </>
  );
}
