import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

export default function MentorDashboard() {
  return (
    <ScrollView style={styles.container}>

      {/* 🔵 Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Welcome back 👋</Text>
        <Text style={styles.subtitle}>Mentor Dashboard</Text>
      </View>

      {/* 📊 Stats */}
      <View style={styles.statsContainer}>
        <View style={styles.card}>
          <Text style={styles.cardNumber}>24</Text>
          <Text style={styles.cardLabel}>Students</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardNumber}>12</Text>
          <Text style={styles.cardLabel}>Sessions</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardNumber}>₹8,500</Text>
          <Text style={styles.cardLabel}>Earnings</Text>
        </View>
      </View>

      {/* 📅 Upcoming Sessions */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Upcoming Sessions</Text>

        <View style={styles.sessionCard}>
          <Text style={styles.sessionTitle}>React Basics</Text>
          <Text style={styles.sessionTime}>Today • 6:00 PM</Text>
        </View>

        <View style={styles.sessionCard}>
          <Text style={styles.sessionTitle}>Career Guidance</Text>
          <Text style={styles.sessionTime}>Tomorrow • 4:00 PM</Text>
        </View>
      </View>

      {/* 📚 Programs */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>My Programs</Text>

        <View style={styles.programCard}>
          <Text style={styles.programTitle}>Full Stack Bootcamp</Text>
          <Text style={styles.programMeta}>20 Students</Text>
        </View>

        <View style={styles.programCard}>
          <Text style={styles.programTitle}>AI Mentorship</Text>
          <Text style={styles.programMeta}>15 Students</Text>
        </View>
      </View>

      {/* ➕ Actions */}
    <View style={styles.buttonContainer}>

        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>+ Create New Program</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.profileButton}
            onPress={() => router.push("/mentor/profile")}
            >
            <Text style={styles.profileButtonText}>View Profile</Text>
        </TouchableOpacity>

    </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    padding: 20,
  },

  header: {
    marginBottom: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
  },

  subtitle: {
    color: "#6B7280",
  },

  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 12,
    width: "30%",
    alignItems: "center",
    elevation: 3,
  },

  cardNumber: {
    fontSize: 18,
    fontWeight: "bold",
  },

  cardLabel: {
    color: "#6B7280",
  },

  section: {
    marginBottom: 20,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },

  sessionCard: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },

  sessionTitle: {
    fontWeight: "bold",
  },

  sessionTime: {
    color: "#6B7280",
  },

  programCard: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },

  programTitle: {
    fontWeight: "bold",
  },

  programMeta: {
    color: "#6B7280",
  },

  button: {
    backgroundColor: "#4F46E5",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
  },

  buttonContainer: {
  marginTop: 10,
  gap: 10,
},

profileButton: {
  backgroundColor: "#E5E7EB",
  padding: 15,
  borderRadius: 10,
  alignItems: "center",
},

profileButtonText: {
  color: "#111827",
  fontWeight: "bold",
},

});