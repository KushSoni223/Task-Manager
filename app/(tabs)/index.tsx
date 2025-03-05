import { taskService } from "@/api/taskServices";
import { darkColors } from "@/theme/colors";
import { Feather, Ionicons } from "@expo/vector-icons";
import { router, useFocusEffect } from "expo-router";
import React, { useCallback, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const formatTime = (isoDate: string) => {
  const date = new Date(isoDate);
  return date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

export default function HomeScreen() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useFocusEffect(
    useCallback(() => {
      fetchTasks();
    }, [])
  );

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const fetchedTasks = await taskService.getTasks();
      setTasks(fetchedTasks);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    Alert.alert("Delete Task", "Are you sure you want to delete this task?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        onPress: async () => {
          try {
            await taskService.deleteTask(id);
            setTasks((prevTasks) =>
              prevTasks.filter((task: any) => task?._id !== id)
            );
          } catch (error) {
            console.error("Error deleting task:", error);
          }
        },
        style: "destructive",
      },
    ]);
  };

  const handleToggleCompleted = async (
    taskId: string,
    currentStatus: boolean,
    title: any,
    description: any
  ) => {
    try {
      setTasks((prevTasks: any) =>
        prevTasks.map((task: any) =>
          task._id === taskId ? { ...task, completed: !currentStatus } : task
        )
      );

      await taskService.updateTask(taskId, {
        title,
        description,
        completed: !currentStatus,
      });
    } catch (error) {
      console.error("Error updating task:", error);
      setTasks((prevTasks: any) =>
        prevTasks.map((task: any) =>
          task._id === taskId ? { ...task, completed: currentStatus } : task
        )
      );
    }
  };

  const handleSearch = (text: string) => {
    setSearchQuery(text);
  };

  const filteredTasks = tasks.filter((task: any) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#EEF5FF",
          borderRadius: 12,
          paddingHorizontal: 15,
          height: 45,
        }}
      >
        <Ionicons name="search" size={20} color="gray" />
        <TextInput
          placeholder="Search for Tasks, Events"
          placeholderTextColor="gray"
          style={{ flex: 1, marginLeft: 10, fontSize: 16 }}
          value={searchQuery}
          onChangeText={handleSearch}
        />
        {searchQuery.length > 0 && (
          <TouchableOpacity onPress={() => setSearchQuery("")}>
            <Ionicons name="close" size={20} color="gray" />
          </TouchableOpacity>
        )}
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: 15,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Today's tasks</Text>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#007AFF" />
      ) : filteredTasks.length === 0 ? (
        <View style={{ alignItems: "center", marginTop: 50 }}>
          <Text style={{ fontSize: 18, color: "gray" }}>No tasks found</Text>
          <TouchableOpacity
            style={{
              marginTop: 10,
              backgroundColor: "#007AFF",
              padding: 10,
              borderRadius: 8,
            }}
            onPress={() => router.push("/(tabs)/addTask")}
          >
            <Text style={{ color: "white", fontSize: 16 }}>Add New Task</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={filteredTasks}
          keyExtractor={(item: any) => item?._id}
          renderItem={({ item }) => (
            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#EEF5FF",
                padding: 15,
                borderRadius: 12,
                marginBottom: 10,
              }}
              onPress={() => router.push(`/(home)/taskDetails/${item?._id}`)}
            >
              <TouchableOpacity
                onPress={() =>
                  handleToggleCompleted(
                    item._id,
                    item.completed,
                    item?.title,
                    item?.description
                  )
                }
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 12,
                  borderWidth: 2,
                  borderColor: "#007AFF",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 10,
                }}
              >
                {item.completed && (
                  <Feather name="check" size={15} color={darkColors.primary} />
                )}
              </TouchableOpacity>

              <View style={{ flex: 1 }}>
                <Text
                  style={{ fontSize: 16, fontWeight: "bold", color: "#333" }}
                >
                  {item.title}
                </Text>
                <Text style={{ fontSize: 14, color: "#555" }}>
                  {item.description}
                </Text>
              </View>

              <Text style={{ fontSize: 16, color: "#007AFF", marginRight: 10 }}>
                {formatTime(item.createdAt)}
              </Text>

              <TouchableOpacity onPress={() => handleDelete(item?._id)}>
                <Ionicons name="trash" size={24} color="red" />
              </TouchableOpacity>
            </Pressable>
          )}
        />
      )}
    </View>
  );
}
