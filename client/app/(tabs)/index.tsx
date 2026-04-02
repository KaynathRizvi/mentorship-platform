import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function AuthPage() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Mentor Connect Hub</Text>

      {/* Student Section */}

      <Text style={styles.sectionTitle}>Student</Text>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => router.push("/login")}
      >
        <Text style={styles.btnText}>Student Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.signupBtn}
        onPress={() => router.push("/signup")}
      >
        <Text style={styles.btnText}>Student Sign Up</Text>
      </TouchableOpacity>


      {/* Mentor Section */}

      <Text style={styles.sectionTitle}>Mentor</Text>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => router.push("/mentor/loginPage")}
      >
        <Text style={styles.btnText}>Mentor Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.signupBtn}
        onPress={() => router.push("/mentor/signUpPage")}
      >
        <Text style={styles.btnText}>Mentor Sign Up</Text>
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
    padding: 20
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 30
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10
  },

  loginBtn: {
    backgroundColor: "#4F46E5",
    padding: 15,
    borderRadius: 8,
    width: 220,
    alignItems: "center",
    marginBottom: 10
  },

  signupBtn: {
    backgroundColor: "#10B981",
    padding: 15,
    borderRadius: 8,
    width: 220,
    alignItems: "center",
    marginBottom: 10
  },

  btnText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold"
  }

});