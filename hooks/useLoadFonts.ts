import { useState, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
  Roboto_500Medium,
} from "@expo-google-fonts/roboto";

SplashScreen.hideAsync();

export function useLoadFonts() {
  const [appIsReady, setAppIsReady] = useState(false);

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_500Medium,
  });

  useEffect(() => {
    async function prepare() {
      try {
        await new Promise((resolve) => setTimeout(resolve, 4000));
      } catch (error) {
        console.warn("Error loading fonts:", error);
      } finally {
        setAppIsReady(true);
        await SplashScreen.hideAsync();
      }
    }

    if (fontsLoaded) {
      prepare();
    }
  }, [fontsLoaded]);

  return appIsReady;
}
