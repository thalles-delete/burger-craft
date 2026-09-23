import { Ionicons } from "@expo/vector-icons";
import { Outfit_800ExtraBold } from "@expo-google-fonts/outfit";
import { Inter_400Regular } from "@expo-google-fonts/inter";
import { useFonts } from "expo-font";
import { StyleSheet, Text, View } from "react-native";

export function Header() {
  useFonts({
    Outfit_800ExtraBold,
    Inter_400Regular,
  });

  return (
    <View style={styles.header}>
      <View>
        <Text style={[styles.headerTitulo, styles.outfit]}>Burger Craft</Text>
        <Text style={[styles.headerSubtitulo, styles.inter]}>
          Sabor artesanal de verdade
        </Text>
      </View>

      <View style={styles.avatarPlaceHolder}>
        <Ionicons name="person" size={20} color="#2f2d2c" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outfit: {
    fontFamily: "Outfit_800ExtraBold",
    fontWeight: "100",
  },
  inter: {
    fontFamily: "Inter_400Regular",
    color: "#6C757D",
  },
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
    fontWeight: "500",
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
