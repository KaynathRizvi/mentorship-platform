import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";
import { router } from "expo-router";

export default function MentorSignup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [expertise, setExpertise] = useState("");

  const handleSignup = async () => {

    const res = await fetch(
      "https://mentorship-platform-server-4dnw.onrender.com/api/mentors/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          password,
          expertise
        })
      }
    );

    const data = await res.json();

    if (res.ok) {
      alert("Mentor account created");
      router.push("/mentor/loginPage");
    } else {
      alert(data.message);
    }

  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Mentor Sign Up</Text>

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
        placeholder="Expertise (AI, Web Dev...)"
        style={styles.input}
        onChangeText={setExpertise}
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
    backgroundColor: "#16A34A",
    padding: 15,
    borderRadius: 8,
    alignItems: "center"
  },

  buttonText: {
    color: "white",
    fontWeight: "bold"
  }

});