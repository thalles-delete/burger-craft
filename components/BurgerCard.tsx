import { WinkySans_900Black_Italic } from "@expo-google-fonts/dev";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";

type BurgerCardProps = {
  imagem: ImageSourcePropType;
  titulo: string;
  descricao: string;
  preco: string;
};

export function BurgerCard({
  imagem,
  titulo,
  descricao,
  preco,
}: BurgerCardProps) {
  return (
    <View style={styles.card}>
      <Image style={styles.cardImagem} source={imagem} />
      <Text style={styles.cardTitulo}>{titulo}</Text>
      <Text style={styles.cardDescricao}>{descricao}</Text>
      <Text style={styles.cardPreco}>{preco}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "48%",
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 16,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    elevation: 3,
    marginBottom: 16,
  },
  cardImagem: {
    width: "100%",
  },
  cardTitulo: {
    fontSize: 24,
    fontWeight: "700",
    color: "#2f2d2c",
    fontFamily: WinkySans_900Black_Italic,
  },
  cardDescricao: {
    fontSize: 12,
    marginTop: 4,
    color: "#9b9b9b",
  },
  cardPreco: {
    fontSize: 16,
    fontWeight: "800",
    color: "#c67c4e",
    marginTop: 12,
  },
});
