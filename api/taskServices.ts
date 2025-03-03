import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Config } from "@/context/Config";

// Base API URL
const API_BASE_URL = Config.API_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

// Attach token to requests
api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem("auth_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const taskService = {
  getTasks: async () => {
    try {
      const response = await api.get("/tasks");
      return response.data.data;
    } catch (error) {
      console.error("Error fetching tasks:", error);
      return [];
    }
  },
  getTaskById: async (id: any) => {
    try {
      const response = await api.get(`/tasks?id=${id}`);
      return response.data.data;
    } catch (error) {
      console.error("Error fetching tasks:", error);
      return [];
    }
  },
  updateTask: async (id: any, body: any) => {
    const updatedBody = JSON.stringify({
      title: body?.title,
      description: body?.description,
      completed: body?.completed,
    });

    try {
      const response = await api.put(`/tasks/${id}`, updatedBody);
      return response.data.data;
    } catch (error) {
      console.error("Error updating task:", error);
      return null;
    }
  },

  createTask: async (title: string, description?: string) => {
    try {
      const response = await api.post("/tasks", { title, description });
      return response.data.data;
    } catch (error) {
      console.error("Error creating task:", error);
      return null;
    }
  },
  deleteTask: async (id: any) => {
    try {
      const response = await api.delete(`/tasks/${id}`);
      return response.data.data;
    } catch (error) {
      console.error("Error creating task:", error);
      return null;
    }
  },
};
