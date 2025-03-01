// INFO: Custom calculations for responsive UI

import { Dimensions, Platform, ScaledSize } from "react-native";
import * as Device from "expo-device";

const { width, height }: ScaledSize = Dimensions.get("window");

const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];

// Default guideline sizes are based on a standard ~5" screen mobile device
const guidelineBaseHeight = 680;
const guidelineBaseWidth = 350;

const scale = (size: number): number =>
  (shortDimension / guidelineBaseWidth) * size;

const verticalScale = (size: number): number =>
  (longDimension / guidelineBaseHeight) * size;

const moderateScale = (size: number, factor: number = 0.5): number =>
  size + (scale(size) - size) * factor;

const isIPhoneXSize = (dim: ScaledSize): boolean => {
  return dim.height === 812 || dim.width === 812;
};

const isIPhoneXrSize = (dim: ScaledSize): boolean => {
  return dim.height === 896 || dim.width === 896;
};

const isIphoneX = (): boolean => {
  const dim: ScaledSize = Dimensions.get("window");
  return Platform.OS === "ios" && (isIPhoneXSize(dim) || isIPhoneXrSize(dim));
};

const isIpadSize = (dim: ScaledSize): boolean => {
  return dim.height === 1024 || dim.width === 1024;
};

const isIpad = (): boolean => {
  const dim: ScaledSize = Dimensions.get("window");
  return Platform.OS === "ios" && isIpadSize(dim);
};

const notchPresent = (): boolean | undefined => {
  return (
    Platform.OS === "ios" &&
    (Device.modelName?.includes("iPhone X") ||
      Device.modelName?.includes("iPhone 11") ||
      Device.modelName?.includes("iPhone 12") ||
      Device.modelName?.includes("iPhone 13") ||
      Device.modelName?.includes("iPhone 14") ||
      Device.modelName?.includes("iPhone 15"))
  );
};

const deviceWidth: number = width;
const deviceHeight: number = height;

export const size = {
  scale,
  moderateScale,
  verticalScale,
  deviceWidth,
  deviceHeight,
  isIphoneX,
  isIpad,
  notchPresent,
};
