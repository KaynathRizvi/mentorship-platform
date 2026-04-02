import { View, Text, TextInput, StyleSheet, FlatList } from "react-native";
import { useEffect, useState } from "react";

export default function Home() {

  const [mentors, setMentors] = useState([]);
  const [programs, setPrograms] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchFeaturedMentors();
    fetchFeaturedPrograms();
  }, []);

  const fetchFeaturedMentors = async () => {
    const res = await fetch(
      "https://mentorship-platform-server-4dnw.onrender.com/api/mentors/featured"
    );
    const data = await res.json();
    setMentors(data);
  };

  const fetchFeaturedPrograms = async () => {
    const res = await fetch(
      "https://mentorship-platform-server-4dnw.onrender.com/api/programs/featured"
    );
    const data = await res.json();
    setPrograms(data);
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Find Your Mentor</Text>

      {/* Search Bar */}
      <TextInput
        placeholder="Search mentors..."
        style={styles.search}
        value={search}
        onChangeText={setSearch}
      />

      {/* Featured Mentors */}
      <Text style={styles.section}>Featured Mentors</Text>

      <FlatList
        data={mentors}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text>{item.expertise}</Text>
            <Text>⭐ {item.rating}</Text>
          </View>
        )}
      />

      {/* Featured Programs */}
      <Text style={styles.section}>Popular Programs</Text>

      <FlatList
        data={programs}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.title}</Text>
            <Text>{item.description}</Text>
            <Text>{item.studentsEnrolled} Students</Text>
          </View>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5"
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 15
  },

  search: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 20
  },

  section: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20
  },

  card: {
    backgroundColor: "white",
    padding: 15,
    marginTop: 10,
    borderRadius: 8
  },

  name: {
    fontWeight: "bold",
    fontSize: 16
  }

});