import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  ActivityIndicator,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { PaperProvider } from "react-native-paper";
import { DatePickerModal, TimePickerModal } from "react-native-paper-dates";
import { en, registerTranslation } from "react-native-paper-dates";
import { lightColors } from "@/theme/colors";
import { router } from "expo-router";
import { taskService } from "@/api/taskServices";
import { size } from "@/theme/size";

registerTranslation("en", en);

export default function AddTaskScreen() {
  const [task, setTask] = useState("");
  const [notes, setNotes] = useState("");
  // const [date, setDate] = useState<Date | null>(null);
  // const [time, setTime] = useState<Date | null>(null);
  // const [showDatePicker, setShowDatePicker] = useState(false);
  // const [showTimePicker, setShowTimePicker] = useState(false);
  const [loading, setLoading] = useState(false);

  const isFormValid = task.trim() !== "" && notes.trim() !== "";

  const handleAddTask = async () => {
    if (!isFormValid) {
      Alert.alert(
        "Missing Fields",
        "Please select Task Name, Date, Time, and Notes."
      );
      return;
    }

    setLoading(true);
    try {
      await taskService.createTask(task, notes);

      Alert.alert("Task Created", "Your task has been successfully added!");
      router.back();
    } catch (error: any) {
      Alert.alert("Error", error.message || "Failed to create task.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PaperProvider>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: "white",
          padding: 20,
          marginTop: size.moderateScale(20),
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Text style={{ fontSize: 22, fontWeight: "bold", color: "#007AFF" }}>
            Add Task
          </Text>
          <TouchableOpacity onPress={() => router.back()}>
            <Text style={{ fontSize: 16, color: "red" }}>Cancel</Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            marginBottom: 8,
            color: "#007AFF",
          }}
        >
          Task
        </Text>

        <TextInput
          style={{
            backgroundColor: "#EEF5FF",
            borderRadius: 12,
            padding: 12,
            fontSize: 16,
            marginBottom: 20,
          }}
          value={task}
          placeholderTextColor={lightColors.text}
          onChangeText={setTask}
          placeholder="Enter task name"
        />

        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            marginBottom: 8,
            color: "#007AFF",
          }}
        >
          Notes
        </Text>
        <TextInput
          style={{
            backgroundColor: "#EEF5FF",
            borderRadius: 12,
            padding: 12,
            fontSize: 16,
            height: 100,
            textAlignVertical: "top",
          }}
          placeholder="Enter Description"
          placeholderTextColor={lightColors.text}
          value={notes}
          onChangeText={setNotes}
          multiline
        />
      </ScrollView>

      <TouchableOpacity
        style={{
          position: "absolute",
          bottom: 30,
          right: 30,
          backgroundColor: isFormValid ? "#007AFF" : "#A0A0A0",
          width: 65,
          height: 65,
          borderRadius: 35,
          alignItems: "center",
          justifyContent: "center",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 4,
          elevation: 5,
        }}
        onPress={handleAddTask}
        disabled={!isFormValid || loading}
      >
        {loading ? (
          <ActivityIndicator color="white" />
        ) : (
          <MaterialIcons name="check" size={30} color="white" />
        )}
      </TouchableOpacity>
    </PaperProvider>
  );
}
