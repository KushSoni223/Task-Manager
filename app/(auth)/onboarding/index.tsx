import { size } from "@/theme/size";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, Text, View } from "react-native";
import { Button } from "../../../components/button";
import styles from "./styles"; // ✅ Import as default

export default function OnboardingScreen() {
  return (
    <View style={styles.mainView("hello")}>
      <StatusBar style="dark" backgroundColor="#ffffff" />
      <Image
        source={require("../../../assets/images/splash-image.png")}
        style={styles.logo()}
      />
      <View style={{ gap: size.moderateScale(20) }}>
        <View style={styles.outerTextView()}>
          <Text style={styles.text()}>
            Simplify, Organize, and Conquer{" "}
            <Text style={styles.innerYourDayText()}>Your Day</Text>
          </Text>
        </View>
        <View style={styles.outerTextView()}>
          <Text style={styles.smallAchieverGoalsText()}>
            Take control of your tasks and achieve your goals.
          </Text>
        </View>
      </View>

      <View>
        <Button
          title="Let's Start"
          onPress={async () => {
            await AsyncStorage.setItem("hasSeenOnboarding", "true");
            router.replace("/(auth)/login");
          }}
        />
      </View>
    </View>
  );
}
