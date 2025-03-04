import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import styles from "./styles";
import { authService } from "@/api/authServices";
import { useRouter } from "expo-router";
import { Entypo, EvilIcons, Feather, Fontisto } from "@expo/vector-icons";
import { size } from "@/theme/size";
import { Button } from "@/components/button";

export default function SignupScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });

  const router = useRouter();

  const validateInputs = () => {
    let valid = true;
    let newErrors = { email: "", password: "" };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Enter a valid email address";
      valid = false;
    }

    if (!password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleLogin = async () => {
    if (!validateInputs()) return;
    try {
      await authService.signup(username, email, password);
      router.replace("/(auth)/login");
    } catch (err) {
      //   setError("Invalid credentials");
      setErrors((prev) => ({ ...prev, password: "Invalid email or password" }));
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.welcomeText}>Create Account</Text>
      </View>
      <Text style={styles.title}>Sign up</Text>
      <View style={{ gap: size.moderateScale(12) }}>
        <View style={styles.textInputContainer}>
          <View style={styles.labelMainView}>
            <Fontisto name="email" size={12} color="black" />
            <Text style={styles.labelText}>Your Email</Text>
          </View>
          <View style={{ gap: size.moderateScale(0) }}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                setErrors((prev) => ({ ...prev, email: "" }));
              }}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            {errors.email ? (
              <Text style={styles.errorText}>{errors.email}</Text>
            ) : null}
          </View>
        </View>
      </View>
      <View style={{ gap: size.moderateScale(12) }}>
        <View style={styles.textInputContainer}>
          <View style={styles.labelMainView}>
            <Entypo name="user" size={12} color="black" />
            <Text style={styles.labelText}>Your Username</Text>
          </View>
          <View style={{ gap: size.moderateScale(0) }}>
            <TextInput
              style={styles.input}
              placeholder="Username"
              value={username}
              onChangeText={setUsername}
            />
          </View>
        </View>
      </View>
      <View style={{ gap: size.moderateScale(12) }}>
        <View style={styles.textInputContainer}>
          <View style={styles.labelMainView}>
            <EvilIcons name="lock" size={18} color="black" />
            <Text style={styles.labelText}>Your Password</Text>
          </View>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Password"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={(text) => {
                setPassword(text);
                setErrors((prev) => ({ ...prev, password: "" })); // Clear error on input change
              }}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              {!showPassword ? (
                <Feather name="eye-off" size={16} color="black" />
              ) : (
                <Feather name="eye" size={16} color="black" />
              )}
            </TouchableOpacity>
          </View>
          {errors.password ? (
            <Text style={styles.errorText}>{errors.password}</Text>
          ) : null}
        </View>
      </View>
      <Button
        title="Create Account"
        onPress={() => handleLogin()}
        disabled={
          email?.length == 0 || password?.length == 0 || username?.length == 0
        }
        buttonStyle={{ marginTop: size.moderateScale(30) }}
      />

      <View style={styles.signUpView}>
        <Text style={styles.labelText}>Already a user?</Text>
        <Text
          onPress={() => {
            router.replace("/(auth)/login");
          }}
          style={styles.signUpText}
        >
          Sign in
        </Text>
      </View>
    </View>
  );
}
