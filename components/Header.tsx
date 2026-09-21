import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export function Header() {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.headerTitulo}>Burger Craft</Text>
        <Text style={styles.headerSubtitulo}>Sabor artesanal de verdade</Text>
      </View>

      <View style={styles.avatarPlaceHolder}>
        <Ionicons name="person" size={20} color="#2f2d2c" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitulo: {
    fontSize: 22,
    fontWeight: "800",
    color: "#2f2d2c",
  },
  headerSubtitulo: {
    fontSize: 14,
    color: "#9b9b9b",
    marginTop: 4,
  },
  avatarPlaceHolder: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
  },
});
