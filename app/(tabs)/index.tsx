import React from "react";
import { View, Text, StyleSheet, Image, Pressable, useWindowDimensions, SafeAreaView } from "react-native";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function IndexScreen() {
  // Pega a largura e altura em tempo real para manter o app responsivo
  const { width, height } = useWindowDimensions();

  // Condicionais para adaptar estilos inline se necessário
  const isSmall = width < 360;

  // Definição dinâmica do GAP baseada na altura da tela (Sugestão 6)
  const dynamicGap = height < 650 ? 22 : height < 800 ? 32 : 48;

  return (
    <View style={[styles.container,
    {
      width: width,
      height: height
    }]}>
   
      <View style={[styles.glowTop, { top: -height * 0.2, right: -width * 0.2, width: width * 1.3, height: width * 1.3, borderRadius: (width * 1.3) / 2 }]} />
      <View style={[styles.glowBottom, { bottom: -height * 0.3, left: -width * 0.3, width: width * 1.4, height: width * 1.4, borderRadius: (width * 1.4) / 2 }]} />

      {/* Container de Conteúdo Principal */}
      <View style={[styles.mainContent, { gap: dynamicGap }]}>
        
        {/* Bloco de Branding Isolado e Moderno */}
        <View style={styles.brandContainer}>
          <LinearGradient
            colors={["rgba(255, 255, 255, 0.08)", "rgba(255, 255, 255, 0.01)"]}
            style={[
              styles.logoWrapper,
              {
                // Tamanho responsivo do wrapper do logo (Sugestão 3)
                width: width < 360 ? 75 : width > 768 ? 110 : 90,
                height: width < 360 ? 75 : width > 768 ? 110 : 90,
              }
            ]}
          >
            <Image
              source={require("../../assets/images/logo1.png")}
              style={[
                styles.logo,
                {
                  // Tamanho responsivo da imagem do logo (Sugestão 3)
                  width: width < 360 ? 42 : width > 768 ? 60 : 50,
                  height: width < 360 ? 42 : width > 768 ? 60 : 50,
                }
              ]}
              resizeMode="contain"
            />
          </LinearGradient>
          
          <Text style={[
            styles.title,
            {
              // Tamanho responsivo do título (Sugestão 4)
              fontSize: width < 340 ? 28 : width < 390 ? 32 : width < 768 ? 38 : 48
            }
          ]}>
            Informa<Text style={styles.titleAccent}>Tech</Text>
          </Text>
          
          <Text style={[
            styles.subtitle,
            {
              // Fonte e espaçamento responsivos do subtítulo (Sugestão 5)
              fontSize: width < 360 ? 14 : 16,
              lineHeight: width < 360 ? 20 : 24,
            }
          ]}>
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
              { height: width < 360 ? 52 : 58 }, // Altura responsiva (Sugestão 7)
              pressed && styles.btnPressed
            ]}
          >
            <LinearGradient
              colors={["#35e6c6", "#35e6c6"]} 
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.btnGradient}
            >
              <Text style={[
                styles.btnPrimaryText,
                { fontSize: width < 360 ? 15 : 16 } // Texto responsivo (Sugestão 7)
              ]}>
                Acessar o Login
              </Text>
            </LinearGradient>
          </Pressable>

          {/* Botão Criar Conta */}
          <Pressable 
            onPress={() => router.push("/register")}
            style={({ pressed }) => [
              styles.btnSecondary,
              { height: width < 360 ? 52 : 58 }, // Altura responsiva (Sugestão 7)
              pressed && styles.btnPressed
            ]}
          >
            <Text style={[
              styles.btnSecondaryText,
              { fontSize: width < 360 ? 15 : 16 }
            ]}>
              Criar uma nova conta
            </Text>
          </Pressable>

        </View>
      </View>

      {/* Assinatura de Design */}
      <View style={styles.footerContainer}>
        <View style={styles.footerLine} />
        <Text style={styles.footerText}>InformaTech</Text>
      </View>
    </View>
  );
}

// Para que as propriedades que usam 'width' e 'height' funcionem dinamicamente,
// algumas foram movidas direto para o estilo inline no código acima.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#030712", 
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24, // Ajustado conforme base da sugestão
    paddingVertical: 20,
  },
  glowTop: {
    position: "absolute",
    backgroundColor: "rgba(132, 204, 22, 0.12)", 
  },
  glowBottom: {
    position: "absolute",
    backgroundColor: "rgba(30, 41, 59, 0.5)", 
  },
  mainContent: {
    flex: 1,
    width: "100%",
    maxWidth: 500, // Expandido para tablets (Sugestão 8)
    justifyContent: "center",
  },
  brandContainer: {
    alignItems: "center",
  },
  logoWrapper: {
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.15)",
    marginBottom: 32,
  },
  logo: {},
  title: {
    fontWeight: "900",
    color: "#FFFFFF",
    letterSpacing: -1.5,
    marginBottom: 16,
    textAlign: "center",
  },
  titleAccent: {
    color: "#35e6c6", 
  },
  subtitle: {
    color: "#9CA3AF", 
    textAlign: "center",
    maxWidth: 340, // Limitado para não quebrar feio (Sugestão 5)
    paddingHorizontal: 12,
  },
  actionGroup: {
    width: "100%",
    gap: 16,
  },
  btnPrimaryContainer: {
    width: "100%",
    borderRadius: 20,
    overflow: "hidden",
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
    fontWeight: "700",
    letterSpacing: -0.3,
  },
  btnSecondary: {
    width: "100%",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
  },
  btnSecondaryText: {
    color: "#E5E7EB",
    fontWeight: "600",
  },
  btnPressed: {
    transform: [{ scale: 0.96 }],
    opacity: 0.85,
  },
  footerContainer: {
    alignItems: "center",
    width: "100%",
    gap: 16,
    marginTop: 10,
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