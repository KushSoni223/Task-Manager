import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import styles from "./styles"; // ✅ Import as default
import { Button } from "../button";
import { size } from "@/theme/size";

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
      onFinish();
    }, 2200);
  }, []);

  if (!visible) return null;

  return (
    <View style={styles.mainView("hello")}>
      <StatusBar style="dark" backgroundColor="#ffffff" />
      <Image
        source={require("../../assets/images/splash-image.png")}
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
        <Button title="Let's Start" />
      </View>
    </View>
  );
}
