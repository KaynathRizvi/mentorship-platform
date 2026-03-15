import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function AuthPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mentor Connect Hub</Text>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => router.push("/login")}
      >
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.signupBtn}
        onPress={() => router.push("/signup")}
      >
        <Text style={styles.btnText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f6f7fb",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 40,
  },

  loginBtn: {
    backgroundColor: "#4F46E5",
    padding: 15,
    borderRadius: 8,
    width: 200,
    alignItems: "center",
    marginBottom: 15,
  },

  signupBtn: {
    backgroundColor: "#10B981",
    padding: 15,
    borderRadius: 8,
    width: 200,
    alignItems: "center",
  },

  btnText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});