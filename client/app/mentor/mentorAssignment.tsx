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

export default function MentorAssignment() {
  const [topic, setTopic] = useState("");
  const [language, setLanguage] = useState("");
  const [description, setDescription] = useState("");
  const [program, setProgram] = useState("");
  const [loading, setLoading] = useState(false);

  const BASE_URL = __DEV__
    ? process.env.EXPO_PUBLIC_DEBUG_SERVER_URL
    : process.env.EXPO_PUBLIC_SERVER_URL;

  const handleCreateAssignment = async () => {
    if (!topic || !language || !program) {
      alert("Please fill required fields");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(`${BASE_URL}/api/assignments/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          topic,
          language,
          description,
          program,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Assignment created successfully ✅");

        // Reset form
        setTopic("");
        setLanguage("");
        setDescription("");
        setProgram("");
      } else {
        alert(data.message || "Error creating assignment");
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>

      <Text style={styles.title}>Create Assignment</Text>

      {/* Topic */}
      <Text style={styles.label}>Topic *</Text>
      <TextInput
        placeholder="Enter assignment topic"
        style={styles.input}
        value={topic}
        onChangeText={setTopic}
      />

      {/* Language */}
      <Text style={styles.label}>Language *</Text>
      <TextInput
        placeholder="e.g. English, Hindi"
        style={styles.input}
        value={language}
        onChangeText={setLanguage}
      />

      {/* Program */}
      <Text style={styles.label}>Program Name *</Text>
      <TextInput
        placeholder="e.g. Full Stack Bootcamp"
        style={styles.input}
        value={program}
        onChangeText={setProgram}
      />

      {/* Description */}
      <Text style={styles.label}>Description</Text>
      <TextInput
        placeholder="Optional details..."
        style={[styles.input, { height: 100 }]}
        multiline
        value={description}
        onChangeText={setDescription}
      />

      {/* Button */}
      <TouchableOpacity style={styles.button} onPress={handleCreateAssignment}>
        <Text style={styles.buttonText}>Create Assignment</Text>
      </TouchableOpacity>

      {loading && <ActivityIndicator size="large" style={{ marginTop: 20 }} />}

    </ScrollView>
  );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  label: {
    marginBottom: 5,
    fontWeight: "500",
  },

  input: {
    backgroundColor: "#E5E7EB",
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
  },

  button: {
    backgroundColor: "#2563EB",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
}
