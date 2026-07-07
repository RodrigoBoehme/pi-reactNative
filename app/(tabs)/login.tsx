import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Alert, Dimensions, Pressable, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { emailRegex } from "@/utils/regex";

const { width, height } = Dimensions.get("window");

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function handleLogin() {
    if (!emailRegex.test(email)) {
      Alert.alert("Erro", "Digite um Email válido");
      return;
    }
    if (!senha.trim()) {
      Alert.alert("Erro", "Digite a senha");
      return;
    }
    try {
      router.push("/mapa");
    } catch (e) {
      Alert.alert("Erro", "Não foi possível realizar o login.");
    }
  }

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"} 
      style={styles.container}
    >
      {/* Luzes de fundo */}
      <View style={styles.glowTop} />
      <View style={styles.glowBottom} />

      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        {/* Cabeçalho do Login */}
        <View style={styles.headerContainer}>
          <Text style={styles.title}>
            Boas-vindas ao <Text style={styles.titleAccent}>Tech</Text>
          </Text>
          <Text style={styles.subtitle}>Insira suas credenciais para acessar a plataforma</Text>
        </View>

        {/* Formulário */}
        <View style={styles.formGroup}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>E-mail</Text>
            <TextInput
              style={styles.input}
              placeholder="seuemail@exemplo.com"
              placeholderTextColor="rgba(255, 255, 255, 0.3)"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Senha</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite sua senha"
              placeholderTextColor="rgba(255, 255, 255, 0.3)"
              secureTextEntry
              value={senha}
              onChangeText={setSenha}
            />
          </View>


        


          {/* Botão Entrar */}
          <Pressable 
            onPress={()=>router.push("/mapa")}
            style={({ pressed }) => [
              styles.btnPrimaryContainer,
              pressed && styles.btnPressed
            ]}
          >
            <LinearGradient
              colors={["#A3E635", "#65A30D"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.btnGradient}
            >

              <Text style={styles.btnPrimaryText}>Entrar</Text>
            </LinearGradient>
          </Pressable>
        </View>

        {/* Link para Voltar */}
        <Pressable onPress={() => router.back()} style={styles.btnBack}>
          <Text style={styles.btnBackText}>Voltar para o início</Text>
        </Pressable>
      </ScrollView>

      {/* Rodapé fixado na base com margem segura */}
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>InformaTech Pro • Conexão Segura</Text>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#030712",
  },
  glowTop: {
    position: "absolute",
    top: -height * 0.2,
    left: -width * 0.2,
    width: width * 1.3,
    height: width * 1.3,
    borderRadius: (width * 1.3) / 2,
    backgroundColor: "rgba(132, 204, 22, 0.06)",
  },
  glowBottom: {
    position: "absolute",
    bottom: -height * 0.3,
    right: -width * 0.3,
    width: width * 1.4,
    height: width * 1.4,
    borderRadius: (width * 1.4) / 2,
    backgroundColor: "rgba(30, 41, 59, 0.3)",
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center", // Centraliza o conteúdo verticalmente de forma dinâmica
    paddingHorizontal: 32,
    paddingTop: height * 0.08,
    paddingBottom: 100, // Espaço extra na base para nunca bater no rodapé
  },
  headerContainer: {
    alignItems: "flex-start",
    width: "100%",
    marginBottom: 32,
  },
  title: {
    fontSize: 36,
    fontWeight: "900",
    color: "#FFFFFF",
    letterSpacing: -1,
    marginBottom: 10,
  },
  titleAccent: {
    color: "#84CC16",
  },
  subtitle: {
    color: "#9CA3AF",
    fontSize: 15,
    lineHeight: 22,
  },
  formGroup: {
    width: "100%",
    gap: 20,
    marginBottom: 32,
  },
  inputContainer: {
    width: "100%",
    gap: 8,
  },
  inputLabel: {
    color: "#E5E7EB",
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 4,
  },
  input: {
    width: "100%",
    height: 58,
    backgroundColor: "rgba(255, 255, 255, 0.03)",
    borderRadius: 18,
    paddingHorizontal: 18,
    color: "#FFFFFF",
    fontSize: 16,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.08)",
  },
  btnPrimaryContainer: {
    width: "100%",
    height: 62,
    borderRadius: 20,
    overflow: "hidden",
    marginTop: 10,
    shadowColor: "#84CC16",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
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
  btnPressed: {
    transform: [{ scale: 0.97 }],
    opacity: 0.9,
  },
  btnBack: {
    alignSelf: "center",
    paddingVertical: 12,
  },
  btnBackText: {
    color: "#9CA3AF",
    fontSize: 14,
    fontWeight: "600",
    textDecorationLine: "underline",
  },
  footerContainer: {
    position: "absolute",
    bottom: 24, // Fixa o rodapé logo acima da barra do sistema
    left: 0,
    right: 0,
    alignItems: "center",
  },
  footerText: {
    color: "#4B5563",
    fontSize: 12,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
});