import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function MentorLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const BASE_URL = __DEV__
      ? process.env.EXPO_PUBLIC_DEBUG_SERVER_URL
      : process.env.EXPO_PUBLIC_SERVER_URL;

    const res = await fetch(`${BASE_URL}/api/mentors/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.toLowerCase(),
        password,
      }),
    });

    const data = await res.json();

    if (data.token) {
      router.replace("/mentor/dashboard");
    } else {
      alert(data.message || "Login failed");
    }
  };

  return (
    <View style={styles.container}>

      {/* 🔙 Back */}
      <Ionicons
        name="arrow-back"
        size={24}
        style={styles.backIcon}
        onPress={() => router.back()}
      />

      {/* 👋 Header */}
      <Text style={styles.title}>Welcome back</Text>
      <Text style={styles.subtitle}>
        Sign in as a mentor
      </Text>

      {/* 📧 Email */}
      <Text style={styles.label}>Email</Text>
      <View style={styles.inputContainer}>
        <Ionicons name="mail-outline" size={20} color="#9CA3AF" />
        <TextInput
          placeholder="your@email.com"
          style={styles.input}
          onChangeText={setEmail}
        />
      </View>

      {/* 🔒 Password */}
      <Text style={styles.label}>Password</Text>
      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={20} color="#9CA3AF" />
        <TextInput
          placeholder="••••••••"
          secureTextEntry
          style={styles.input}
          onChangeText={setPassword}
        />
        <Ionicons name="eye-outline" size={20} color="#9CA3AF" />
      </View>

      {/* 🔵 Button */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      {/* Footer */}
      <Text style={styles.footerText}>
        Not a mentor?{" "}
        <Text
          style={styles.link}
          onPress={() => router.push("/login")}
        >
          Login as student
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
    marginBottom: 5,
  },

  subtitle: {
    color: "#6B7280",
    marginBottom: 30,
  },

  label: {
    marginBottom: 6,
    fontWeight: "500",
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E5E7EB",
    borderRadius: 12,
    paddingHorizontal: 12,
    marginBottom: 20,
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