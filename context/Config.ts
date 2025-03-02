import Constants from "expo-constants";

export const Config = {
  API_URL:
    Constants.expoConfig?.extra?.API_URL ||
    "https://7018-2402-3a80-1ea4-c0c-38a5-fe5f-fb39-7526.ngrok-free.app/api",
};
