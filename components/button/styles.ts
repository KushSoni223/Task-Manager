import { darkColors } from "@/theme/colors";
import { size } from "@/theme/size";
import { TextStyle, ViewStyle } from "react-native";

interface ButtonStyles {
  rootContainer: (disabled?: boolean) => ViewStyle;
  btnTextContainer: () => ViewStyle;
  label: () => TextStyle;
}

export const styles: ButtonStyles = {
  rootContainer: (disabled) => ({
    backgroundColor: disabled ? "#ccc" : darkColors?.primary,
    borderRadius: size.moderateScale(50),
    // marginHorizontal: size.moderateScale(10),
    paddingHorizontal: size.moderateScale(20),
    paddingVertical: size.moderateScale(12),
  }),
  btnTextContainer: () => ({
    paddingVertical: size.moderateScale(15),
    justifyContent: "center",
    alignItems: "center",
  }),
  label: () => ({
    color: darkColors?.text,
    fontSize: size.moderateScale(16),
    fontFamily: "Roboto_500Medium",
    textAlign: "center",
  }),
};
