import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Alert, Dimensions, Pressable, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { emailRegex } from "@/utils/regex";

const { width, height } = Dimensions.get("window");

export default function Register() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [aceitouTermos, setAceitouTermos] = useState(false); // Novo estado para os termos

  async function handleRegister() {
    if (!nome.trim()) {
      Alert.alert("Erro", "Digite seu nome completo");
      return;
    }
    if (!emailRegex.test(email)) {
      Alert.alert("Erro", "Digite um E-mail válido");
      return;
    }
    if (senha.length < 6) {
      Alert.alert("Erro", "A senha deve conter pelo menos 6 caracteres");
      return;
    }
    if (senha !== confirmarSenha) {
      Alert.alert("Erro", "As senhas não coincidem");
      return;
    }
    if (!aceitouTermos) { // Validação dos termos
      Alert.alert("Erro", "Você precisa aceitar os Termos de Uso para continuar.");
      return;
    }

    try {
      Alert.alert("Sucesso", "Conta criada com sucesso!");
      router.push("/login"); // Leva o usuário para o login após cadastrar
    } catch (e) {
      Alert.alert("Erro", "Não foi possível realizar o cadastro.");
    }
  }

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"} 
      style={styles.container}
    >
      {/* Luzes de fundo idênticas */}
      <View style={styles.glowTop} />
      <View style={styles.glowBottom} />

      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        {/* Cabeçalho do Registro */}
        <View style={styles.headerContainer}>
          <Text style={styles.title}>
            Criar <Text style={styles.titleAccent}>Conta</Text>
          </Text>
          <Text style={styles.subtitle}>Faça parte da nossa comunidade tech hoje mesmo</Text>
        </View>

        {/* Formulário */}
        <View style={styles.formGroup}>
          {/* Campo Nome */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Nome Completo</Text>
            <TextInput
              style={styles.input}
              placeholder="Seu nome"
              placeholderTextColor="rgba(255, 255, 255, 0.3)"
              value={nome}
              onChangeText={setNome}
              autoCapitalize="words"
            />
          </View>

          {/* Campo E-mail */}
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

          {/* Campo Senha */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Senha</Text>
            <TextInput
              style={styles.input}
              placeholder="Mínimo 6 caracteres"
              placeholderTextColor="rgba(255, 255, 255, 0.3)"
              secureTextEntry
              value={senha}
              onChangeText={setSenha}
            />
          </View>

          {/* Campo Confirmar Senha */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Confirmar Senha</Text>
            <TextInput
              style={styles.input}
              placeholder="Repita sua senha"
              placeholderTextColor="rgba(255, 255, 255, 0.3)"
              secureTextEntry
              value={confirmarSenha}
              onChangeText={setConfirmarSenha}
            />
          </View>

          {/* Novo Campo de Aceitar Termos */}
          <View style={styles.termsContainer}>
            <Pressable 
              onPress={() => setAceitouTermos(!aceitouTermos)} 
              style={[styles.checkbox, aceitouTermos && styles.checkboxChecked]}
            >
              {aceitouTermos && <Text style={styles.checkboxCheckmark}>✓</Text>}
            </Pressable>
            <Text style={styles.termsText}>
              Li e aceito os{" "}
              <Text 
                style={styles.termsLink} 
                onPress={() => router.push("/termos")}
              >
                Termos de Uso
              </Text>
            </Text>
          </View>

          {/* Botão Cadastrar */}
          <Pressable 
            onPress={() => router.push("/mapa")}
            style={({ pressed }) => [
              styles.btnPrimaryContainer,
              pressed && styles.btnPressed
            ]}
          >
            <LinearGradient
              colors={["#35e6c6", "#35e6c6"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.btnGradient}
            >
              <Text style={styles.btnPrimaryText}>Concluir Cadastro</Text>
            </LinearGradient>
          </Pressable>
        </View>

        {/* Link para Voltar */}
        <Pressable onPress={() => router.push("/login")} style={styles.btnBack}>
          <Text style={styles.btnBackText}>Já tenho conta? Fazer Login</Text>
        </Pressable>
      </ScrollView>

      {/* Rodapé Seguro */}
     
        <Text style={styles.footerText}>InformaTech • Seus dados estão seguros</Text>
      
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
    justifyContent: "center",
    paddingHorizontal: 32,
    paddingTop: height * 0.06,
    paddingBottom: 110, // Um pouco maior no cadastro por ter mais inputs
  },
  headerContainer: {
    alignItems: "flex-start",
    width: "100%",
    marginBottom: 28,
  },
  title: {
    alignSelf: "center",
    fontSize: 36,
    fontWeight: "900",
    color: "#FFFFFF",
    letterSpacing: -1,
    marginBottom: 10,
  },
  titleAccent: {
    color: "#16cccc",
  },
  subtitle: {
    alignSelf: "center",
    color: "#9CA3AF",
    fontSize: 15,
    lineHeight: 22,
  },
  formGroup: {
    width: "100%",
    gap: 18,
    marginBottom: 28,
  },
  inputContainer: {
    width: "100%",
    gap: 8,
  },
  inputLabel: {
    alignSelf:"center",
    width:"50%",
    color: "#E5E7EB",
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 4,
  },
  input: {
    alignSelf:"center",
    width: "50%",
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
    alignSelf:"center",
    width: "48%",
    height: 62,
    borderRadius: 20,
    overflow: "hidden",
    marginTop: 12,
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
    bottom: 24,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  footerText: {
    alignSelf: "center",
    color: "#4B5563",
    fontSize: 12,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
  

  termsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: "50%",
    marginTop: 4,
    gap: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: "rgba(255, 255, 255, 0.3)",
    backgroundColor: "rgba(255, 255, 255, 0.03)",
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxChecked: {
    borderColor: "#16cccc",
    backgroundColor: "rgba(22, 204, 204, 0.15)",
  },
  checkboxCheckmark: {
    color: "#16cccc",
    fontSize: 12,
    fontWeight: "bold",
  },
  termsText: {
    color: "#9CA3AF",
    fontSize: 13,
    flex: 1,
  },
  termsLink: {
    color: "#16cccc",
    textDecorationLine: "underline",
    fontWeight: "600",
  },
});