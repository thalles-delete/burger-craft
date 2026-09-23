import { StyleSheet, Text, TouchableOpacity } from "react-native";

type CustomButtonProps = {
  texto: string;
  onPress: () => void;
};

export function BotaoCustomizado({ texto, onPress }: CustomButtonProps) {
  return (
    <TouchableOpacity style={styles.botao} onPress={onPress}>
      <Text style={styles.botaoTexto}>{texto}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    width: "100%",
    backgroundColor: "#E65100",
    borderRadius: 30,
    paddingHorizontal: 30,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 20,
    shadowColor: "#E65100",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 4,
  },
  botaoTexto: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "800",
  },
});
