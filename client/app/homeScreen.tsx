import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  ScrollView,
} from "react-native";
import { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";

export default function Home() {
  const [mentors, setMentors] = useState([]);
  const [programs, setPrograms] = useState([]);
  const [search, setSearch] = useState("");

  const BASE_URL = __DEV__
    ? process.env.EXPO_PUBLIC_DEBUG_SERVER_URL
    : process.env.EXPO_PUBLIC_SERVER_URL;

  useEffect(() => {
    fetchFeaturedMentors();
    fetchFeaturedPrograms();
  }, []);

  const fetchFeaturedMentors = async () => {
    const res = await fetch(`${BASE_URL}/api/mentors/featured`);
    const data = await res.json();
    setMentors(data);
  };

  const fetchFeaturedPrograms = async () => {
    const res = await fetch(`${BASE_URL}/api/programs/featured`);
    const data = await res.json();
    setPrograms(data);
  };

  return (
    <ScrollView style={styles.container}>

      {/* 👋 Header */}
      <Text style={styles.greeting}>Hello, Kaynath</Text>
      <Text style={styles.title}>Find your mentor</Text>

      {/* 🔍 Search */}
      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={20} color="#9CA3AF" />
        <TextInput
          placeholder="Search by skill, e.g. React, Python..."
          style={styles.searchInput}
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* 👨‍🏫 Mentors */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Featured Mentors</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={mentors}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.mentorCard}>

            {/* Avatar */}
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>
                {item.name?.charAt(0)}
              </Text>
            </View>

            <Text style={styles.mentorName}>{item.name}</Text>

            <Text style={styles.rating}>⭐ {item.rating || "4.5"}</Text>

            <Text style={styles.expertise} numberOfLines={2}>
              {item.expertise}
            </Text>

          </View>
        )}
      />

      {/* 📚 Programs */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Featured Programs</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>

      {programs.map((item) => (
        <View key={item._id} style={styles.programCard}>
          <Text style={styles.programTitle}>{item.title}</Text>
          <Text style={styles.programAuthor}>{item.mentorName || "Mentor"}</Text>

          <View style={styles.programMeta}>
            <Text style={styles.metaText}>
              ⏱ {item.duration || "12 wks"}
            </Text>
            <Text style={styles.price}>
              ${item.price || 199}
            </Text>
          </View>
        </View>
      ))}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    padding: 20,
  },

  greeting: {
    color: "#6B7280",
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 15,
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E5E7EB",
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 45,
    marginBottom: 20,
  },

  searchInput: {
    marginLeft: 10,
    flex: 1,
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },

  seeAll: {
    color: "#2563EB",
  },

  mentorCard: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 12,
    width: 180,
    marginRight: 10,
  },

  avatar: {
    backgroundColor: "#2563EB",
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },

  avatarText: {
    color: "white",
    fontWeight: "bold",
  },

  mentorName: {
    fontWeight: "bold",
  },

  rating: {
    color: "#F59E0B",
    marginVertical: 5,
  },

  expertise: {
    color: "#6B7280",
    fontSize: 12,
  },

  programCard: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
  },

  programTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },

  programAuthor: {
    color: "#6B7280",
  },

  programMeta: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },

  metaText: {
    color: "#6B7280",
  },

  price: {
    color: "#16A34A",
    fontWeight: "bold",
  },
});