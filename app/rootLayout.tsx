import { View, ActivityIndicator } from "react-native";
import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { useLoadFonts } from "../hooks/useLoadFonts";
import SplashScreen from "@/components/splashScreen";

export default function Layout({ children }: { children: React.ReactNode }) {
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
      {children}
    </>
  );
}
