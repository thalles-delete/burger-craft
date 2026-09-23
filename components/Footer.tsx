import { StyleSheet, Text, View } from "react-native";

export function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerTexto}>
        Burger Craft • Sabor artesanal de verdade
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    marginBlock: 30,
    alignItems: "center",
  },
  footerTexto: {
    fontSize: 14,
    fontWeight: "600",
    color: "#6C757D",
  },
});
