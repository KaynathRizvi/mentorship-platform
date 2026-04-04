import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const BASE_URL = __DEV__
  ? process.env.EXPO_PUBLIC_DEBUG_SERVER_URL
  : process.env.EXPO_PUBLIC_SERVER_URL;

// connect socket
const socket = io(BASE_URL);

export default function Chat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("receiveMessage", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.off("receiveMessage");
    };
  }, []);

  const sendMessage = () => {
    if (!message) return;

    const msgData = {
      text: message,
      sender: "student", // or "mentor"
      time: new Date().toLocaleTimeString(),
    };

    socket.emit("sendMessage", msgData);
    setMessages((prev) => [...prev, msgData]);

    setMessage("");
  };

  return (
    <View style={styles.container}>

      <FlatList
        data={messages}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View
            style={[
              styles.message,
              item.sender === "student"
                ? styles.myMessage
                : styles.otherMessage,
            ]}
          >
            <Text style={styles.messageText}>{item.text}</Text>
            <Text style={styles.time}>{item.time}</Text>
          </View>
        )}
      />

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Type a message..."
          style={styles.input}
          value={message}
          onChangeText={setMessage}
        />

        <TouchableOpacity style={styles.sendBtn} onPress={sendMessage}>
          <Text style={{ color: "white" }}>Send</Text>
        </TouchableOpacity>
      </View>

    </View>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    padding: 10,
  },

  message: {
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    maxWidth: "75%",
  },

  myMessage: {
    backgroundColor: "#2563EB",
    alignSelf: "flex-end",
  },

  otherMessage: {
    backgroundColor: "#E5E7EB",
    alignSelf: "flex-start",
  },

  messageText: {
    color: "white",
  },

  time: {
    fontSize: 10,
    color: "#ddd",
    marginTop: 5,
  },

  inputContainer: {
    flexDirection: "row",
    marginTop: 10,
  },

  input: {
    flex: 1,
    backgroundColor: "#E5E7EB",
    borderRadius: 10,
    padding: 10,
  },

  sendBtn: {
    backgroundColor: "#2563EB",
    padding: 12,
    borderRadius: 10,
    marginLeft: 5,
  },
});
  );
}
