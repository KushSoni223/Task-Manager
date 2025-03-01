import React from "react";
import {
  ActivityIndicator,
  Animated,
  Text,
  TouchableOpacity,
  Vibration,
  StyleProp,
  ViewStyle,
  TextStyle,
  Platform,
} from "react-native";
import { styles } from "./styles";
import { lightColors } from "@/theme/colors";

// Define Props for TypeScript
interface ButtonProps {
  title: string;
  buttonStyle?: StyleProp<ViewStyle>;
  buttonLabel?: StyleProp<TextStyle>;
  onPress?: () => void;
  activeOpacity?: number;
  loading?: boolean;
  disabled?: boolean;
  disabledButton?: boolean;
  buttonInnerStyle?: StyleProp<ViewStyle>;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  buttonStyle,
  buttonLabel,
  onPress,
  activeOpacity,
  loading = false,
  disabled = false,
  disabledButton = false,
  buttonInnerStyle,
}) => {
  const scale = new Animated.Value(1);

  // Fix: Correctly define Animated TouchableOpacity
  const AnimatedTouchableOpacity =
    Animated.createAnimatedComponent(TouchableOpacity);

  return (
    <AnimatedTouchableOpacity
      onPress={onPress}
      disabled={disabled || loading || disabledButton}
      onPressIn={() => {
        if (Platform.OS === "android") Vibration.vibrate(5);
        Animated.spring(scale, {
          toValue: 0.96,
          useNativeDriver: true,
        }).start();
      }}
      onPressOut={() => {
        if (Platform.OS === "android") Vibration.vibrate(5);
        Animated.spring(scale, {
          toValue: 1,
          useNativeDriver: true,
        }).start();
      }}
      activeOpacity={activeOpacity ?? 0.9}
      style={[styles.rootContainer(), buttonStyle, { transform: [{ scale }] }]}
    >
      {loading ? (
        <ActivityIndicator size="small" color={lightColors?.text} />
      ) : (
        <Text style={[styles.label(), buttonLabel]}>{title}</Text>
      )}
    </AnimatedTouchableOpacity>
  );
};
