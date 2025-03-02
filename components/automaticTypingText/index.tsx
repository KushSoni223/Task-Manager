import React, { useState, useEffect } from "react";
import { Text, TextStyle } from "react-native";

interface AutoTypingTextProps {
  text: string;
  speed?: number;
  style?: TextStyle;
}

const AutoTypingText: React.FC<AutoTypingTextProps> = ({
  text,
  speed = 100,
  style,
}) => {
  const [displayedText, setDisplayedText] = useState<string>("");

  useEffect(() => {
    let index = 0;
    setDisplayedText(""); // Reset text when props change

    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1)); // Ensure correct slicing
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <Text style={style}>{displayedText}</Text>;
};

export default AutoTypingText;
