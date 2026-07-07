import { View, Text, StyleSheet, Image } from "react-native";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import CustomButon from "../components/ui/Button";

export default function IndexScreen() {
  return (
    <LinearGradient
      colors={["#050505", "#0E1F0C", "#253C1F"]}
      style={styles.container}
    >
      {/* Card principal */}
      <View style={styles.card}>
        <Image
          source={require("../../assets/images/logo1.png")}
          style={styles.image}
          resizeMode="contain"
        />

        <Text style={styles.title}>InformaTech</Text>

        <Text style={styles.subtitle}>
          Compartilhe conhecimento, conecte pessoas e mantenha todos informados
          em um só lugar.
        </Text>

        <View style={styles.buttons}>
          <CustomButon
            title="Entrar"
            onPress={() => router.push("/login")}
          />

          <CustomButon
            title="Criar Conta"
            onPress={() => router.push("/register")}
          />
        </View>
      </View>

      <Text style={styles.footer}>
        Versão 1.0 • Desenvolvido pela equipe InformaTech
      </Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
  },

  card: {
    width: "100%",
    maxWidth: 420,
    backgroundColor: "rgba(255,255,255,0.05)",
    borderRadius: 28,
    padding: 30,
    alignItems: "center",

    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",

    shadowColor: "#7ED957",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20,

    elevation: 15,
  },

  image: {
    width: 180,
    height: 180,
    marginBottom: 20,
    borderRadius: 90,
  },

  title: {
    fontSize: 36,
    fontWeight: "900",
    color: "#7ED957",
    letterSpacing: 1,
    marginBottom: 12,
  },

  subtitle: {
    color: "#E2E2E2",
    fontSize: 16,
    textAlign: "center",
    lineHeight: 26,
    marginBottom: 35,
  },

  buttons: {
    width: "100%",
    gap: 18,
  },

  footer: {
    position: "absolute",
    bottom: 30,
    color: "#9E9E9E",
    fontSize: 13,
    letterSpacing: 0.5,
  },
});