import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useState } from "react";

export default function AssignmentGenerator() {
  const [topic, setTopic] = useState("");
  const [assignment, setAssignment] = useState("");
  const [loading, setLoading] = useState(false);

  const BASE_URL = __DEV__
    ? process.env.EXPO_PUBLIC_DEBUG_SERVER_URL
    : process.env.EXPO_PUBLIC_SERVER_URL;

  const generateAssignment = async () => {
    if (!topic) {
      alert("Please enter a topic");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(`${BASE_URL}/api/ai/generate-assignment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ topic }),
      });

      const data = await res.json();

      setAssignment(data.assignment);
    } catch (err) {
      console.error(err);
      alert("Error generating assignment");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>

      <Text style={styles.title}>AI Assignment Generator</Text>

      {/* Input */}
      <TextInput
        placeholder="Enter topic (e.g. Artificial Intelligence)"
        style={styles.input}
        value={topic}
        onChangeText={setTopic}
      />

      {/* Button */}
      <TouchableOpacity style={styles.button} onPress={generateAssignment}>
        <Text style={styles.buttonText}>Generate Assignment</Text>
      </TouchableOpacity>

      {/* Loader */}
      {loading && <ActivityIndicator size="large" style={{ marginTop: 20 }} />}

      {/* Output */}
      {assignment ? (
        <View style={styles.outputContainer}>
          <Text style={styles.outputTitle}>Generated Assignment</Text>
          <Text style={styles.outputText}>{assignment}</Text>
        </View>
      ) : null}

    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F9FAFB",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
  },

  button: {
    backgroundColor: "#2563EB",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
  },

  outputContainer: {
    marginTop: 20,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
  },

  outputTitle: {
    fontWeight: "bold",
    marginBottom: 10,
  },

  outputText: {
    color: "#374151",
    lineHeight: 20,
  },
});
