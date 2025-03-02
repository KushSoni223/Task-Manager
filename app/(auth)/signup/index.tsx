import { View, Text, TextInput, Button } from "react-native";
import { useState } from "react";
import styles from "./styles";
import { authService } from "@/api/authServices";
import { useRouter } from "expo-router";

export default function SignupScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const router = useRouter();

  const handleLogin = async () => {
    try {
      await authService.signup(username, email, password);
      router.replace("/(auth)/login"); // Redirect to home after login
    } catch (err) {
      //   setError("Invalid credentials");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign up</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
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
