import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";
import { router } from "expo-router";

export default function Signup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {

    const res = await fetch("http://YOUR_IP:5000/api/auth/signup", {

      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        name,
        email,
        password
      })
    });

    const data = await res.json();

    if (res.ok) {
      alert("Signup successful");
      router.push("/login");
    } else {
      alert(data.message);
    }

  };

  return (

    <View style={styles.container}>

      <Text style={styles.title}>Sign Up</Text>

      <TextInput
        placeholder="Name"
        style={styles.input}
        onChangeText={setName}
      />

      <TextInput
        placeholder="Email"
        style={styles.input}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleSignup}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 15,
    borderRadius: 8
  },

  button: {
    backgroundColor: "#4F46E5",
    padding: 15,
    borderRadius: 8,
    alignItems: "center"
  },

  buttonText: {
    color: "white",
    fontWeight: "bold"
  }

});