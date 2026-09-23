import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Header } from "./components/Header";
import { BurgerCard } from "./components/BurgerCard";
import { BotaoCustomizado } from "./components/BotaoCustomizado";
import { useState } from "react";
import { Footer } from "./components/Footer";
import { Outfit_800ExtraBold } from "@expo-google-fonts/outfit";
import { useFonts } from "expo-font";
import { Inter_400Regular } from "@expo-google-fonts/inter";

export default function App() {
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");
  useFonts({
    Outfit_800ExtraBold,
    Inter_400Regular,
  });

  const processarPedido = () => {
    if (nome.trim() === "") {
      setMensagem("Por favor, informe seu nome!");
    } else {
      setMensagem(`Olá, ${nome}! Pedido recebido`);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      keyboardVerticalOffset={30}
    >
      <ScrollView>
        {/* header */}
        <Header />
        {/* header */}

        {/* conteúdo */}
        <View style={styles.conteudo}>
          <View style={styles.boasVindasSecao}>
            <Text style={[styles.boasVindasTitulo, styles.outfit]}>
              Bateu a fome?
            </Text>
            <Text style={[styles.boasVindasSubtitulo, styles.inter]}>
              Escolha seu burger artesanal de hoje
            </Text>
          </View>

          <View style={styles.exibicao}>
            <Image
              style={styles.imagem}
              source={require("./assets/burger.png")}
            ></Image>
            <Text style={styles.exibicaoDESTAQUE}>DESTAQUE DA CASA</Text>
            <Text style={[styles.exibicaoTitulo, styles.outfit]}>
              Smash Duplo Cheddar
            </Text>
            <Text style={[styles.exibicaoDescricao, styles.inter]}>
              Dois blends de 100g, queijo cheddar derretido e molho especial
            </Text>
            <View style={styles.exibicaoPrecoEBotao}>
              <Text style={[styles.exibicaoPreco, styles.outfit]}>
                R$ 34,90
              </Text>
              <TouchableOpacity style={styles.exibicaoBotaoAdicionar}>
                <Image source={require("./assets/adicionar.png")} />
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.menuTitulo}>Nossos burgers</Text>
          <View style={styles.menu}>
            <BurgerCard
              imagem={require("./assets/classic-burger.png")}
              titulo="Classic Burger"
              descricao="Pão brioche, blend 160g e queijo prato"
              preco="R$ 26,00"
            />

            <BurgerCard
              imagem={require("./assets/bacon-crispy.png")}
              titulo="Bacon Crispy"
              descricao="Blend 160g com fatias crocantes de bacon"
              preco="R$ 32,00"
            />

            <BurgerCard
              imagem={require("./assets/chicken-crunchy.png")}
              titulo="Chicken Crunchy"
              descricao="Frango empanado com maionese da casa"
              preco="R$ 28,50"
            />

            <BurgerCard
              imagem={require("./assets/veggie-grill.png")}
              titulo="Veggie Grill"
              descricao="Hambúrguer de grão de bico e cogumelos"
              preco="R$ 29,90"
            />
          </View>

          <View style={styles.pedidoSecao}>
            <Text style={[styles.nomePergunta, styles.outfit]}>
              Como podemos te chamar?
            </Text>
            <Text style={[styles.nomeDescricao, styles.inter]}>
              Insira seus dados para agilizar sua retirada ou entrega
            </Text>
            <TextInput
              placeholder="Digite seu nome"
              style={styles.nomeInput}
              value={nome}
              onChangeText={setNome}
            ></TextInput>

            <BotaoCustomizado
              texto="Fazer meu pedido"
              onPress={processarPedido}
            />

            {mensagem !== "" && (
              <View style={styles.mensagemSecao}>
                <Image source={require("./assets/check.png")} />
                <Text style={styles.mensagemTexto}>{mensagem}</Text>
              </View>
            )}
          </View>
        </View>
        {/* conteúdo */}

        {/* footer */}
        <Footer />
        {/* footer */}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  conteudo: {
    paddingHorizontal: 24,
  },
  boasVindasSecao: {
    marginBottom: 24,
  },
  boasVindasTitulo: {
    fontSize: 32,
    fontWeight: "800",
    color: "#2f2d2c",
  },
  boasVindasSubtitulo: {
    fontSize: 16,
    color: "#9b9b9b",
    marginTop: 8,
  },
  exibicao: {
    backgroundColor: "#ffffff",
    borderRadius: 24,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.05,
    elevation: 4,
    marginBottom: 32,
  },
  imagem: {
    width: "100%",
    height: 180,
    marginBottom: 16,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  exibicaoDESTAQUE: {
    marginHorizontal: 20,
    marginBottom: 8,
    color: "#E65100",
    backgroundColor: "#FFF3E0",
    maxWidth: "42%",
    paddingHorizontal: 7,
    textAlign: "center",
    paddingVertical: 4,
    borderRadius: 24,
    fontWeight: "800",
  },
  exibicaoTitulo: {
    fontSize: 20,
    fontWeight: "800",
    color: "#2f2d2c",
    paddingHorizontal: 20,
  },
  exibicaoDescricao: {
    fontSize: 14,
    color: "#9b9b9b",
    marginTop: 4,
    paddingHorizontal: 20,
  },
  exibicaoPrecoEBotao: {
    flexDirection: "row",
    marginBottom: 12,
    alignContent: "center",
    justifyContent: "space-between",
  },
  exibicaoPreco: {
    fontSize: 20,
    fontWeight: "800",
    color: "#E65100",
    marginTop: 12,
    paddingHorizontal: 20,
  },
  exibicaoBotaoAdicionar: {
    paddingHorizontal: 20,
    marginTop: 8,
  },
  menuTitulo: {
    fontSize: 22,
    fontWeight: "800",
    color: "#2f2d2c",
    marginBottom: 16,
  },
  menu: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  pedidoSecao: {
    backgroundColor: "#ffffff",
    padding: 24,
    borderRadius: 24,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.05,
    elevation: 4,
    marginTop: 16,
  },
  nomePergunta: {
    fontSize: 18,
    fontWeight: "800",
    color: "#2f2d2c",
    marginBottom: 4,
  },
  nomeDescricao: {
    marginBottom: 16,
  },
  nomeInput: {
    width: "100%",
    height: 56,
    backgroundColor: "#f0f0f0",
    borderRadius: 16,
    paddingHorizontal: 20,
    fontSize: 16,
  },
  mensagemTexto: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2E7D32",
  },
  mensagemSecao: {
    flexDirection: "row",
    backgroundColor: "#E8F5E9",
    borderRadius: 16,
    alignItems: "center",
    marginTop: 16,
    paddingVertical: 14,
    justifyContent: "flex-start",
    paddingHorizontal: 16,
    gap: 8,
  },
  mensagemCheck: {
    color: "white",
    borderRadius: 20,
    backgroundColor: "#2E7D32",
    width: "8%",
    textAlign: "center",
    marginHorizontal: 20,
  },
  outfit: {
    fontFamily: "Outfit_800ExtraBold",
    fontWeight: "100",
  },
  inter: {
    fontFamily: "Inter_400Regular",
    color: "#6C757D",
  },
});
