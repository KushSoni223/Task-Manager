import { View, Text, TextInput, Button } from "react-native";
import { useState } from "react";
import styles from "./styles";
import { router, useRouter } from "expo-router";
import { authService } from "@/api/authServices";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleLogin = async () => {
    try {
      await authService.login(email, password);
      router.replace("/"); // Redirect to home after login
    } catch (err) {
      //   setError("Invalid credentials");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={() => handleLogin()} />
    </View>
  );
}
