import Constants from "expo-constants";

export const Config = {
  API_URL:
    Constants.expoConfig?.extra?.API_URL ||
    "https://923c-2402-3a80-8f7-1948-100a-bca3-6b8d-bc8b.ngrok-free.app/api",
};
