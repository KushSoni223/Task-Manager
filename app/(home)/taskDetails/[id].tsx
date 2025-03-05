import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { taskService } from "@/api/taskServices";
import { Ionicons } from "@expo/vector-icons";
import { size } from "@/theme/size";

const formatTime = (isoDate: string) => {
  const date = new Date(isoDate);
  return date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

export default function TaskDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [task, setTask] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState<any>({});

  useEffect(() => {
    const fetchTaskDetails = async () => {
      if (!id) return;
      setLoading(true);
      try {
        const taskDetails = await taskService.getTaskById(id);
        setTask(taskDetails[0]);
        setEditedTask(taskDetails[0]);
      } catch (error) {
        console.error("Error fetching task:", error);
      }
      setLoading(false);
    };

    fetchTaskDetails();
  }, [id]);

  const handleUpdateTask = async () => {
    setLoading(true);
    try {
      await taskService.updateTask(id, editedTask);
      setTask(editedTask);
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating task:", error);
    }
    setLoading(false);
  };

  if (loading) {
    return (
      <ActivityIndicator size="large" color="#007AFF" style={styles.loader} />
    );
  }

  if (!task) {
    return <Text style={styles.errorText}>Task not found.</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsEditing(!isEditing)}>
          <Ionicons name="create-outline" size={24} color="#007AFF" />
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Task Title</Text>
      <TextInput
        style={[styles.input, !isEditing && styles.disabledInput]}
        value={editedTask.title}
        onChangeText={(text) => setEditedTask({ ...editedTask, title: text })}
        editable={isEditing}
      />

      <Text style={styles.label}>Task Description</Text>
      <TextInput
        style={[
          styles.input,
          !isEditing && styles.disabledInput,
          styles.textArea,
        ]}
        value={editedTask.description}
        onChangeText={(text) =>
          setEditedTask({ ...editedTask, description: text })
        }
        editable={isEditing}
        multiline
      />

      <Text style={styles.label}>Created At</Text>
      <Text style={styles.time}>{formatTime(task.createdAt)}</Text>

      {isEditing && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#007AFF" }]}
            onPress={handleUpdateTask}
          >
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#FF3B30" }]}
            onPress={() => {
              setEditedTask(task);
              setIsEditing(false);
            }}
          >
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: size.moderateScale(20),
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginTop: 10,
  },
  input: {
    backgroundColor: "#F5F5F5",
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    color: "#333",
    marginTop: 5,
  },
  disabledInput: {
    backgroundColor: "#EAEAEA",
    color: "#777",
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  time: {
    fontSize: 16,
    color: "#007AFF",
    marginTop: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 18,
    color: "red",
    textAlign: "center",
    marginTop: 20,
  },
});
