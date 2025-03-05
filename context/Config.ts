import Constants from "expo-constants";

export const Config = {
  API_URL:
    Constants.expoConfig?.extra?.API_URL ||
    "https://task-manager-backend-production-ea27.up.railway.app/api",
};
