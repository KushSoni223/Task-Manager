import { Ionicons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { router, Tabs } from "expo-router";
import { TouchableOpacity } from "react-native";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarItemStyle: { flex: 1 },
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="addTask"
        options={{
          headerShown: false,
          tabBarButton: () => (
            <TouchableOpacity
              style={{
                position: "absolute",
                bottom: 20,
                alignSelf: "center",
                backgroundColor: "blue",
                width: 60,
                height: 60,
                borderRadius: 30,
                alignItems: "center",
                justifyContent: "center",
                flex: 0,
              }}
              onPress={() => router.push("/(tabs)/addTask")}
            >
              <Ionicons name="add" size={30} color="white" />
            </TouchableOpacity>
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarItemStyle: { flex: 1 },
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
