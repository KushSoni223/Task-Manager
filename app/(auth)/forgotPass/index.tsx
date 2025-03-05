import { authService } from "@/api/authServices";
import { Colors } from "@/app-example/constants/Colors";
import { Button } from "@/components/button";
import { lightColors } from "@/theme/colors";
import { size } from "@/theme/size";
import { router } from "expo-router";
import { useState } from "react";
import { View, TextInput, Text, Alert } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const RequestPasswordReset = () => {
  const [email, setEmail] = useState("");

  const handleRequestReset = async () => {
    const response = await authService.requestPasswordReset(email);

    if (response.status) {
      router.push("/(auth)/resetPass");
    } else {
      Alert.alert("Error", response.data.message);
    }
  };

  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        alignItems: "center",
        flex: 1,
        paddingTop: insets.top + size.moderateScale(20),
        backgroundColor: Colors.light.background,
        gap: size.moderateScale(20),
      }}
    >
      <Text
        style={{
          fontSize: size.moderateScale(22),
          paddingHorizontal: size.moderateScale(30),
          fontFamily: "Roboto_700Bold",
          color: lightColors.primary,
          textAlign: "center",
        }}
      >
        Request Reset Password Code
      </Text>
      <View style={{ width: "90%", gap: size.moderateScale(10) }}>
        <Text
          style={{
            fontSize: size.moderateScale(16),
            fontFamily: "Roboto_400Regular",
            color: lightColors.text,
          }}
        >
          Enter your email:
        </Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          style={{
            height: size.moderateScale(50),
            paddingHorizontal: size.moderateScale(10),
            borderRadius: size.moderateScale(10),
            borderWidth: 1,
            width: "100%",
            borderColor: Colors.light.text,
          }}
        />
      </View>

      <Button
        title="Send Reset Code"
        onPress={handleRequestReset}
        buttonStyle={{ marginHorizontal: size.moderateScale(15) }}
      />
    </View>
  );
};

export default RequestPasswordReset;
