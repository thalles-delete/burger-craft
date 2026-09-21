import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
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

export default function App() {
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");

  const processarPedido = () => {
    if (nome.trim() === "") {
      setMensagem("Por favor, informe seu nome!");
    } else {
      setMensagem(`Olá ${nome}! Pedido recebido`);
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
            <Text style={styles.boasVindasTitulo}>Bateu a fome?</Text>
            <Text style={styles.boasVindasSubtitulo}>
              Escolha seu burger artesanal de hoje
            </Text>
          </View>

          <View style={styles.exibicao}>
            <Image
              style={styles.imagem}
              source={require("./assets/burger.png")}
            ></Image>
            <Text style={styles.exibicaoDESTAQUE}>DESTAQUE DA CASA</Text>
            <Text style={styles.exibicaoTitulo}>Smash Duplo Cheddar</Text>
            <Text style={styles.exibicaoDescricao}>
              Dois blends de 100g, queijo cheddar derretido e molho especial
            </Text>
            <Text style={styles.exibicaoPreco}>R$ 34,90</Text>
            <BotaoCustomizado texto="+" onPress={processarPedido} />
            <Ionicons nome="add-circle" size={30} color={"#E65100"} />
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
            <Text style={styles.nomePergunta}>Qual é o seu nome?</Text>
            <TextInput
              placeholder="Digite seu nome"
              style={styles.nomeInput}
              value={nome}
              onChangeText={setNome}
            ></TextInput>

            <TouchableOpacity>
              <Ionicons name="add-circle" />
            </TouchableOpacity>

            {mensagem !== "" && (
              <Text style={styles.mensagemTexto}>{mensagem}</Text>
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
    paddingLeft: 20,
    paddingBottom: 8,
    color: "#E65100",
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
  exibicaoPreco: {
    fontSize: 20,
    fontWeight: "800",
    color: "#E65100",
    marginTop: 12,
    paddingHorizontal: 20,
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
    marginBottom: 32,
  },
  pedidoSecao: {
    backgroundColor: "#ffffff",
    padding: 24,
    borderRadius: 24,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.05,
    elevation: 4,
    marginTop: 10,
  },
  nomePergunta: {
    fontSize: 18,
    fontWeight: "800",
    color: "#2f2d2c",
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
    fontWeight: "800",
    color: "#c67c4e",
    textAlign: "center",
    marginTop: 20,
  },
});
