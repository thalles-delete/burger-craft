import { Inter_400Regular } from "@expo-google-fonts/inter";
import { Outfit_800ExtraBold } from "@expo-google-fonts/outfit";
import { useFonts } from "expo-font";
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
  useFonts({
    Outfit_800ExtraBold,
    Inter_400Regular,
  });

  return (
    <View style={styles.card}>
      <Image style={styles.cardImagem} source={imagem} />
      <Text style={[styles.cardTitulo, styles.outfit]}>{titulo}</Text>
      <Text style={[styles.cardDescricao, styles.inter]}>{descricao}</Text>
      <Text style={[styles.cardPreco, styles.outfit]}>{preco}</Text>
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
  card: {
    width: "48%",
    backgroundColor: "#ffffff",
    borderRadius: 16,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    elevation: 3,
    marginBottom: 16,
  },
  cardImagem: {
    width: "100%",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    marginBottom: 14,
  },
  cardTitulo: {
    fontSize: 16,
    marginHorizontal: 16,
    fontWeight: "700",
    color: "#2f2d2c",
  },
  cardDescricao: {
    marginHorizontal: 16,
    fontSize: 12,
    marginTop: 4,
    color: "#9b9b9b",
  },
  cardPreco: {
    marginHorizontal: 16,
    fontSize: 16,
    fontWeight: "800",
    color: "#E65100",
    marginTop: 14,
    marginBottom: 14,
  },
});
