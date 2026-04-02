import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function AuthPage() {
  const [role, setRole] = useState("student");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleContinue = () => {
    if (role === "student") {
      router.push("/login"); // ✅ student login
    } else {
      router.push("/mentor/loginPage"); // ✅ mentor login
    }
  };

  return (
    <View style={styles.container}>

      {/* 🔙 Back */}
      <Ionicons name="arrow-back" size={24} style={styles.backIcon} />

      {/* 👋 Header */}
      <Text style={styles.title}>Create account</Text>
      <Text style={styles.subtitle}>
        Join thousands of learners and mentors
      </Text>

      {/* 🎯 Role Selection */}
      <Text style={styles.label}>I want to</Text>

      <View style={styles.roleContainer}>

        {/* Student */}
        <TouchableOpacity
          style={[
            styles.roleCard,
            role === "student" && styles.activeCard
          ]}
          onPress={() => setRole("student")}
        >
          <Ionicons
            name="book-outline"
            size={24}
            color={role === "student" ? "#2563EB" : "#6B7280"}
          />
          <Text style={[styles.roleTitle, role === "student" && styles.activeText]}>
            Student
          </Text>
          <Text style={styles.roleSubtitle}>
            Learn from expert mentors
          </Text>
        </TouchableOpacity>

        {/* Mentor */}
        <TouchableOpacity
          style={[
            styles.roleCard,
            role === "mentor" && styles.activeCard
          ]}
          onPress={() => setRole("mentor")}
        >
          <Ionicons
            name="people-outline"
            size={24}
            color={role === "mentor" ? "#2563EB" : "#6B7280"}
          />
          <Text style={[styles.roleTitle, role === "mentor" && styles.activeText]}>
            Mentor
          </Text>
          <Text style={styles.roleSubtitle}>
            Share your knowledge
          </Text>
        </TouchableOpacity>

      </View>


      {/* 🔵 Button */}
      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>
          {role === "student" ? "Continue as Student" : "Continue as Mentor"}
        </Text>
      </TouchableOpacity>

      {/* Footer */}
      <Text style={styles.footerText}>
        New here?{" "}
        <Text
          style={styles.link}
          onPress={() =>
            role === "student"
              ? router.push("/signup")
              : router.push("/mentor/signUpPage")
          }
        >
          Create account
        </Text>
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    padding: 20,
    paddingTop: 60,
  },

  backIcon: {
    marginBottom: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
  },

  subtitle: {
    color: "#6B7280",
    marginBottom: 20,
  },

  label: {
    marginBottom: 6,
    marginTop: 10,
    fontWeight: "500",
  },

  roleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  roleCard: {
    width: "48%",
    backgroundColor: "#E5E7EB",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
  },

  activeCard: {
    borderWidth: 2,
    borderColor: "#2563EB",
    backgroundColor: "#EFF6FF",
  },

  roleTitle: {
    fontWeight: "bold",
    marginTop: 5,
  },

  activeText: {
    color: "#2563EB",
  },

  roleSubtitle: {
    fontSize: 12,
    color: "#6B7280",
    textAlign: "center",
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E5E7EB",
    borderRadius: 12,
    paddingHorizontal: 12,
    marginBottom: 15,
    height: 50,
  },

  input: {
    flex: 1,
    marginLeft: 10,
  },

  button: {
    backgroundColor: "#2563EB",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
  },

  footerText: {
    textAlign: "center",
    marginTop: 20,
    color: "#6B7280",
  },

  link: {
    color: "#2563EB",
    fontWeight: "bold",
  },
});