import React from "react";
import { View, Text, StyleSheet, Image, Dimensions, Pressable } from "react-native";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");

export default function IndexScreen() {
  return (
    <View style={styles.container}>
      {/* Luzes de fundo gradientes (Estilo Spotify/Apple) */}
      <View style={styles.glowTop} />
      <View style={styles.glowBottom} />

      {/* Container de Conteúdo Principal */}
      <View style={styles.mainContent}>
        
        {/* Bloco de Branding Isolado e Moderno */}
        <View style={styles.brandContainer}>
          <LinearGradient
            colors={["rgba(255, 255, 255, 0.08)", "rgba(255, 255, 255, 0.01)"]}
            style={styles.logoWrapper}
          >
            <Image
              source={require("../../assets/images/logo1.png")}
              style={styles.logo}
              resizeMode="contain"
            />
          </LinearGradient>
          
          <Text style={styles.title}>
            Informa<Text style={styles.titleAccent}>Tech</Text>
          </Text>
          
          <Text style={styles.subtitle}>
            Conectando mentes, compartilhando futuro. A sua plataforma definitiva de informação e tecnologia.
          </Text>
        </View>

        {/* Grupo de Ações Premium */}
        <View style={styles.actionGroup}>
          
          {/* Botão Entrar - Gradiente de Alto Impacto */}
          <Pressable 
            onPress={() => router.push("/login")}
            style={({ pressed }) => [
              styles.btnPrimaryContainer,
              pressed && styles.btnPressed
            ]}
          >
            <LinearGradient
              colors={["#A3E635", "#65A30D"]} // Verde limão vibrante para um degradê rico
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.btnGradient}
            >
              <Text style={styles.btnPrimaryText}>Acessar o Login</Text>
            </LinearGradient>
          </Pressable>

          {/* Botão Criar Conta - Visual Minimalista Invisível com Borda Fina */}
          <Pressable 
            onPress={() => router.push("/register")}
            style={({ pressed }) => [
              styles.btnSecondary,
              pressed && styles.btnPressed
            ]}
          >
            <Text style={styles.btnSecondaryText}>Criar uma nova conta</Text>
          </Pressable>

        </View>
      </View>

      {/* Assinatura de Design */}
      <View style={styles.footerContainer}>
        <View style={styles.footerLine} />
        <Text style={styles.footerText}>InformaTech Pro • v1.0</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#030712", // Preto azulado ultra profundo (estilo interfaces topo de linha)
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 32,
    paddingTop: height * 0.1,
    paddingBottom: 40,
  },
  // Efeitos de Iluminação de Fundo (Aura/Glow)
  glowTop: {
    position: "absolute",
    top: -height * 0.2,
    right: -width * 0.2,
    width: width * 1.3,
    height: width * 1.3,
    borderRadius: (width * 1.3) / 2,
    backgroundColor: "rgba(132, 204, 22, 0.12)", // Glow verde sutil no topo
  },
  glowBottom: {
    position: "absolute",
    bottom: -height * 0.3,
    left: -width * 0.3,
    width: width * 1.4,
    height: width * 1.4,
    borderRadius: (width * 1.4) / 2,
    backgroundColor: "rgba(30, 41, 59, 0.5)", // Profundidade azulada na base
  },
  mainContent: {
    flex: 1,
    width: "100%",
    maxWidth: 380,
    justifyContent: "center",
    gap: 64, // Muito espaçamento para o design respirar
  },
  brandContainer: {
    alignItems: "center",
  },
  logoWrapper: {
    width: 100,
    height: 100,
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.15)",
    marginBottom: 32,
  },
  logo: {
    width: 120,
    height: 120,
  },
  title: {
    fontSize: 42,
    fontWeight: "900",
    color: "#FFFFFF",
    letterSpacing: -1.5,
    marginBottom: 16,
    textAlign: "center",
  },
  titleAccent: {
    color: "#84CC16", // Destaque na palavra Tech
  },
  subtitle: {
    color: "#9CA3AF", // Cinza moderno neutro
    fontSize: 16,
    textAlign: "center",
    lineHeight: 26,
    fontWeight: "400",
    paddingHorizontal: 12,
  },
  actionGroup: {
    width: "100%",
    gap: 16,
  },
  // Estilização dos Botões
  btnPrimaryContainer: {
    width: "100%",
    height: 62,
    borderRadius: 20,
    overflow: "hidden",
    shadowColor: "#84CC16",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 8,
  },
  btnGradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btnPrimaryText: {
    color: "#061500",
    fontSize: 17,
    fontWeight: "700",
    letterSpacing: -0.3,
  },
  btnSecondary: {
    width: "100%",
    height: 62,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
  },
  btnSecondaryText: {
    color: "#E5E7EB",
    fontSize: 16,
    fontWeight: "600",
  },
  // Microinteração de clique
  btnPressed: {
    transform: [{ scale: 0.96 }],
    opacity: 0.85,
  },
  // Rodapé Elegante
  footerContainer: {
    alignItems: "center",
    width: "100%",
    gap: 16,
  },
  footerLine: {
    width: 40,
    height: 2,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 1,
  },
  footerText: {
    color: "#4B5563",
    fontSize: 12,
    fontWeight: "600",
    letterSpacing: 1,
    textTransform: "uppercase",
  },
});