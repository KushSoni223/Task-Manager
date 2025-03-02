import AsyncStorage from "@react-native-async-storage/async-storage";

export const checkAuth = async (): Promise<boolean> => {
  const token = await AsyncStorage.getItem("isUserLogin");
  return !!token; // Returns true if token exists, else false
};
