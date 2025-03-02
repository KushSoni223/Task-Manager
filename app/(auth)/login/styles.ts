import { darkColors, lightColors } from "@/theme/colors";
import { size } from "@/theme/size";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: lightColors.background,
    padding: size.moderateScale(20),
    gap: size.moderateScale(20),
    marginTop: size.moderateScale(25),
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  textInputContainer: {
    gap: size.moderateScale(10),
  },
  title: {
    fontSize: size.moderateScale(20),
    fontWeight: "bold",
    marginBottom: 15,
    color: lightColors.primary,
  },
  labelMainView: {
    flexDirection: "row",
    alignItems: "center",
    gap: size.moderateScale(5),
  },
  signUpView: {
    flexDirection: "row",
    alignItems: "center",
    gap: size.moderateScale(5),
    alignSelf: "flex-end",
  },
  labelText: {
    fontSize: size.moderateScale(12),
    fontFamily: "Roboto_400Regular",
    color: lightColors.text,
  },
  passwordLabelText: {
    fontSize: size.moderateScale(12),
    fontFamily: "Roboto_400Regular",
    color: lightColors.text,
    right: size.moderateScale(5),
  },
  signUpText: {
    fontSize: size.moderateScale(12),
    fontFamily: "Roboto_500Medium",
    color: lightColors.primary,
  },
  forgotPasswordText: {
    fontSize: size.moderateScale(12),
    fontFamily: "Roboto_500Medium",
    color: lightColors.primary,
    textAlign: "center",
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  passwordInput: {
    width: "90%",
    height: 50,
    paddingHorizontal: 15,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
  },
  errorText: {
    color: "red",
    fontSize: size.moderateScale(12),
    // marginTop: size.moderateScale(4),
  },
});
