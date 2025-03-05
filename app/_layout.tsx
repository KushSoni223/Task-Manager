import { Stack } from "expo-router";
import Layout from "./rootLayout";

export default function RootLayout() {
  return (
    <Layout>
      <Stack screenOptions={{ headerShown: false }} />
    </Layout>
  );
}
