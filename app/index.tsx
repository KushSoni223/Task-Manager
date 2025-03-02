import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, ActivityIndicator } from "react-native";
import HomeStack from "./homeStack";
import AuthStack from "./authStack";

export default function Index() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = await AsyncStorage.getItem("isUserLogin");

        setIsLoggedIn(!!token);

        if (token) {
          router.replace("/(auth)/signup");
        } else {
          router.replace("/(auth)/onboarding");
        }
      } catch (error) {
        setIsLoggedIn(false);
        router.replace("/(auth)/onboarding");
      }
    };

    checkAuth();
  }, []);

  if (isLoggedIn === null) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return isLoggedIn ? <HomeStack /> : <AuthStack />;
}
