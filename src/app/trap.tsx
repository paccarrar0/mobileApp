import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, TextInput, Button, TouchableWithoutFeedback } from "react-native";
import { router } from "expo-router";
import { useAuth } from "../../AuthContext";
import FullScreen from "../components/container/FullScreen";
import Footer from "../components/shared/Footer";
import NoHeader from "../components/header/NoHeader";
import Scrollable from "../components/container/Scrollable";

const TypingEffect = ({ text, speed = 50, onComplete }: { text: string; speed?: number; onComplete?: () => void }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    setDisplayedText("");

    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        if (onComplete) {
          setTimeout(onComplete, 500);
        }
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <Text style={styles.text}>{displayedText}</Text>;
};

export default function Trap() {
  const { isAuthenticated } = useAuth();
  const [currentMessage, setCurrentMessage] = useState(0);
  const [answers, setAnswers] = useState<string[]>(["", "", ""]);
  const [currentProblem, setCurrentProblem] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const messages = [
    "Did you think that it would be easy?",
    "Did you really believe that?",
    "You're trapped here.",
    "Forever.",
    "Actually, not forever... But you get the point.",
    "You're stuck here until you figure out how to leave.",
    "Well, this is gonna take so much time... So, my anxiety is gonna make me tell you the truth.",
    "To know the truth about this awesome app... Is that the page you are looking for, isn't it?",
    "You need to solve some problems, be wrong once and it's game over(I'll be here with the same history every time so, don't make mistakes). This is the only way to leave.",
    "Don't try to touch the back button, please.",
    "Well, all of this is an excuse to test some features of this app and your patience too, for sure.",
    "Okay, let's get this over with. I will put some problems in your way, if you solve them, congratulations, you'll see an ugly page. If you don't, you'll be stuck here forever... Just kidding, you'll just see an ugly page too, but with a message saying that you failed...",
    "And I'm gonna have flows to make my tests, so, let's go!",
  ];

  const problems = [
    { question: "5 + 3", answer: "8" },
    { question: "15 * 2", answer: "30" },
    { question: "√(12321)", answer: "111" }
  ];

  const handleAnswerSubmit = (index: number) => {
    if (answers[index] === problems[index].answer) {
      if (index === problems.length - 1) {
        router.push("/about");
      } else {
        setCurrentProblem(index + 1);
      }
    } else {
      router.push("/lose");
    }
  };

  const handleScreenPress = () => {
    setCurrentMessage(messages.length);
    setIsTypingComplete(true);
  };

  useEffect(() => {
    if (!isAuthenticated) {
      setTimeout(() => {
        router.replace("/");
      }, 10);
    }
  }, [isAuthenticated, router]);

  return (
    <FullScreen>
      <Scrollable>
        <NoHeader />

        <TouchableWithoutFeedback onPress={handleScreenPress}>
          <View style={styles.chatContainer}>
            {}
            {messages.map((msg, index) => (
              currentMessage >= index && (
                <View key={index} style={styles.chatBubble}>
                  <TypingEffect
                    text={msg}
                    speed={25}
                    onComplete={() => {
                      setCurrentMessage((prev) => prev + 1);
                      if (index === messages.length - 1) {
                        setIsTypingComplete(true);
                      }
                    }}
                  />
                </View>
              )
            ))}

            {}
            {isTypingComplete && currentProblem < problems.length && (
              <View style={styles.problemContainer}>
                <Text style={styles.problemText}>Solve: {problems[currentProblem].question}</Text>
                <TextInput
                  testID="answerInput"
                  style={styles.input}
                  value={answers[currentProblem]}
                  onChangeText={(text) => {
                    const newAnswers = [...answers];
                    newAnswers[currentProblem] = text;
                    setAnswers(newAnswers);
                  }}
                  keyboardType="numeric"
                  placeholder="Your answer"
                />
                <Button testID="submitButton" title="Submit" onPress={() => handleAnswerSubmit(currentProblem)} />
              </View>
            )}
          </View>
        </TouchableWithoutFeedback>

      </Scrollable>
      <Footer />
    </FullScreen>
  );
}

const styles = StyleSheet.create({
  chatContainer: {
    padding: 20,
    marginBottom: 50,
  },
  chatBubble: {
    backgroundColor: "#e0e0e0",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    maxWidth: "63%",
    alignSelf: "flex-start",
  },
  text: {
    fontSize: 16,
    color: "#000",
  },
  problemContainer: {
    marginTop: 20,
    marginBottom: 50,
    alignItems: "center",
  },
  problemText: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
    width: "70%",
    textAlign: "center",
  },
});
