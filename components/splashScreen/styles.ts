import { size } from "../../theme/size"; // Import responsive size helpers
import { lightColors, darkColors } from "../../theme/colors"; // Import theme colors
import { ImageStyle, TextStyle, ViewStyle } from "react-native";

const styles = {
  mainView: (theme = "light"): ViewStyle => ({
    flexGrow: 1,
    backgroundColor:
      theme === "dark" ? darkColors.background : lightColors.background,
    // alignItems: "center",
    justifyContent: "center",
    gap: size.moderateScale(50),
    marginHorizontal: size.moderateScale(10),
  }),
  logo: (): ImageStyle => ({
    width: size.deviceWidth * 0.8,
    height: size.deviceWidth * 0.8,
    resizeMode: "contain",
    alignSelf: "center",
  }),

  outerVideoView: () => ({
    height: size.moderateScale(200),
    backgroundColor: "#C2DED1",
    borderRadius: size.moderateScale(20),
    marginHorizontal: size.moderateScale(15),
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderWidth: size.moderateScale(2),
    borderColor: "#85B4A1",
  }),

  text: (theme = "light"): TextStyle => ({
    fontSize: size.moderateScale(26),
    color: theme === "dark" ? darkColors.text : lightColors.text,
    fontFamily: "Roboto_700Bold",
    textAlign: "center",
  }),
  innerYourDayText: (): TextStyle => ({
    fontSize: size.moderateScale(26),
    color: darkColors.primary,
    fontFamily: "Roboto_700Bold",
    textAlign: "center",
  }),
  smallAchieverGoalsText: (): TextStyle => ({
    fontSize: size.moderateScale(14),
    color: lightColors.text,
    fontFamily: "Roboto_400Regular",
    textAlign: "center",
  }),
  outerTextView: (): ViewStyle => ({
    paddingHorizontal: size.moderateScale(20),
  }),

  buttonStyle: (theme = "light") => ({
    backgroundColor:
      theme === "dark" ? darkColors.primary : lightColors.primary,
    paddingVertical: size.moderateScale(12),
    paddingHorizontal: size.moderateScale(20),
    borderRadius: 8,
  }),

  buttonTextStyle: (theme = "light") => ({
    color: theme === "dark" ? darkColors.primary : lightColors.secondary,
    fontSize: size.moderateScale(16),
    fontWeight: "bold" as TextStyle["fontWeight"],
  }),
};

export default styles; // ✅ Exporting as default object
