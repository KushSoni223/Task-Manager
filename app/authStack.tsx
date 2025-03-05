import { Stack } from "expo-router";

export default function AuthStack() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(auth)/onboarding/index" />
      <Stack.Screen name="(auth)/login/index" />
      <Stack.Screen name="(auth)/signup/index" />
    </Stack>
  );
}
