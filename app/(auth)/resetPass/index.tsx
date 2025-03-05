import { authService } from "@/api/authServices";
import { Colors } from "@/app-example/constants/Colors";
import { Button } from "@/components/button";
import { lightColors } from "@/theme/colors";
import { size } from "@/theme/size";
import { router } from "expo-router";
import { useState } from "react";
import { View, TextInput, Text, Alert } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleResetPassword = async () => {
    const response = await authService.verifyOtpAndResetPassword(
      email,
      code,
      newPassword
    );

    if (response.status) {
      router.back();
    } else {
      Alert.alert("Error", response?.data.message);
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
        gap: size.moderateScale(15),
      }}
    >
      <Text
        style={{
          fontSize: size.moderateScale(22),
          fontFamily: "Roboto_700Bold",
          color: lightColors.primary,
        }}
      >
        Reset Password
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
          style={{
            height: size.moderateScale(50),
            paddingHorizontal: size.moderateScale(10),
            borderRadius: size.moderateScale(10),
            borderWidth: 1,
            width: "100%",
            borderColor: Colors.light.text,
          }}
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
        />
      </View>
      <View style={{ width: "90%", gap: size.moderateScale(10) }}>
        <Text
          style={{
            fontSize: size.moderateScale(16),
            fontFamily: "Roboto_400Regular",
            color: lightColors.text,
          }}
        >
          Enter the reset code:
        </Text>
        <TextInput
          style={{
            height: size.moderateScale(50),
            paddingHorizontal: size.moderateScale(10),
            borderRadius: size.moderateScale(10),
            borderWidth: 1,
            width: "100%",
            borderColor: Colors.light.text,
          }}
          value={code}
          onChangeText={setCode}
          placeholder="Reset Code"
        />
      </View>
      <View style={{ width: "90%", gap: size.moderateScale(10) }}>
        <Text
          style={{
            fontSize: size.moderateScale(16),
            fontFamily: "Roboto_400Regular",
            color: lightColors.text,
          }}
        >
          Enter new password:
        </Text>
        <TextInput
          value={newPassword}
          onChangeText={setNewPassword}
          placeholder="New Password"
          secureTextEntry
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
        buttonStyle={{ marginVertical: size.moderateScale(15) }}
        title="Reset Password"
        onPress={handleResetPassword}
      />
    </View>
  );
};

export default ResetPassword;
