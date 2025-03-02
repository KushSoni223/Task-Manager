import Constants from "expo-constants";

export const Config = {
  API_URL:
    Constants.expoConfig?.extra?.API_URL ||
    "https://2f36-2402-3a80-1eb6-a258-61b7-b11-ab81-96ad.ngrok-free.app/api",
};
