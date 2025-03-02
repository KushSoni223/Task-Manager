import { size } from "@/theme/size";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import styles from "./styles"; // ✅ Import as default
import AutoTypingText from "../automaticTypingText";

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
      onFinish();
    }, 4000);
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
          <AutoTypingText
            text="Simplify, Organize, and Conquer"
            speed={100}
            style={styles.text()}
          />
        </View>
      </View>
    </View>
  );
}
