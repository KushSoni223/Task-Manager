import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Config } from "@/context/Config";

// Base API URL
const API_BASE_URL = Config.API_URL; // Replace with your actual API

// Axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

// Function to get token and attach it to headers
api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem("auth_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth API Calls
export const authService = {
  login: async (email: string, password: string) => {
    const response = await api.post("/auth/login", { email, password });
    await AsyncStorage.setItem("auth_token", response.data.token);
    await AsyncStorage.setItem("isUserLogin", "true");
    return response.data;
  },
  signup: async (username: string, email: string, password: string) => {
    const response = await api.post("/auth/signup", {
      name: username,
      email,
      password,
    });
    return response.data;
  },

  logout: async () => {
    await AsyncStorage.removeItem("auth_token");
  },

  checkAuth: async () => {
    const token = await AsyncStorage.getItem("auth_token");
    return !!token;
  },
};
