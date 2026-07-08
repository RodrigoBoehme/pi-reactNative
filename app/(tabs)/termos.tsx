import { View, Text, StyleSheet, ScrollView, Dimensions, Pressable } from "react-native";
import { router } from "expo-router";
import CustomButon from "../components/ui/Button";

const { width, height } = Dimensions.get("window");

export default function TermsScreen() {
  return (
    <View style={styles.container}>
      {/* Luzes de fundo idênticas ao cadastro */}
      <View style={styles.glowTop} />
      <View style={styles.glowBottom} />

      <Text style={styles.title}>Termos de Uso</Text>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.text}>
          Data de vigência: 23/03/2025{"\n\n"}
          Este documento estabelece os Termos de Uso da plataforma digital InformaTech, desenvolvida com o objetivo de mapear áreas de risco de alagamento no município de São Leopoldo, identificar locais seguros e disponibilizar informações que auxiliem a população e os órgãos competentes em situações de emergência e calamidade pública.
Ao acessar, instalar ou utilizar a plataforma, o usuário declara que leu, compreendeu e concorda com todas as condições estabelecidas neste documento, comprometendo-se a utilizá-la de forma responsável e em conformidade com estes Termos de Uso.
A InformaTech disponibiliza informações baseadas no histórico de enchentes registradas no município, com destaque para os eventos ocorridos desde 1965 e para a enchente de 2024. O aplicativo oferece recursos como mapa interativo das áreas de risco, identificação de locais seguros, indicação de rotas de fuga, visualização de áreas de escape, informações sobre os níveis de alagamento e orientações de prevenção e segurança.
As informações apresentadas têm caráter informativo e de apoio à tomada de decisões. A plataforma não substitui os serviços prestados por órgãos oficiais, como Defesa Civil, Corpo de Bombeiros, SAMU ou demais autoridades públicas, nem garante a inexistência de riscos nas rotas ou locais indicados. Em situações de emergência, o usuário deverá sempre seguir as orientações das autoridades competentes.
Para utilização de determinados recursos, poderá ser necessário o fornecimento de dados pessoais, como nome, telefone e localização. Ao informar esses dados, o usuário declara que são verdadeiros, completos e atualizados. O tratamento dessas informações será realizado em conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018), sendo utilizado exclusivamente para o funcionamento da plataforma, melhoria dos serviços e apoio às ações de monitoramento e emergência, não sendo comercializado ou compartilhado para finalidades incompatíveis com os objetivos do projeto.
O usuário compromete-se a utilizar a plataforma de forma ética, responsável e exclusivamente para os fins a que ela se destina. É proibido inserir informações falsas, utilizar o sistema para fins ilícitos, prejudicar seu funcionamento ou praticar qualquer ato que possa colocar terceiros em risco. O descumprimento dessas regras poderá resultar na suspensão ou exclusão do acesso, sem prejuízo das medidas legais cabíveis.
Embora a InformaTech busque manter as informações constantemente atualizadas e o sistema disponível, não garante funcionamento ininterrupto, nem se responsabiliza por falhas técnicas, indisponibilidade do serviço, perda de dados, atrasos na atualização das informações ou por quaisquer danos decorrentes da utilização ou da impossibilidade de utilização da plataforma. Da mesma forma, não se responsabiliza por decisões tomadas pelos usuários com base nas informações disponibilizadas.
Todo o conteúdo presente na plataforma, incluindo textos, mapas, imagens, logotipos, bases de dados, interface, códigos-fonte e demais elementos, é protegido pela legislação de propriedade intelectual, sendo vedada sua reprodução, distribuição, modificação ou utilização sem autorização prévia dos responsáveis pelo projeto.
A InformaTech poderá atualizar ou modificar estes Termos de Uso a qualquer momento, sempre que necessário para aprimorar seus serviços ou atender alterações legais. A versão mais recente permanecerá disponível na plataforma, e a continuidade da utilização implicará na aceitação das novas condições.
Este Termo de Uso é regido pelas leis da República Federativa do Brasil. Fica eleito o foro da comarca de São Leopoldo/RS, com exclusão de qualquer outro, por mais privilegiado que seja, para dirimir eventuais controvérsias decorrentes da utilização da plataforma.{"\n\n"}
Para quaisquer dúvidas, sugestões ou solicitações, o contato oficial da InformaTech deverá ser feito por meio do e-mail: informatech2026@gmail.com
        </Text>
      </ScrollView>

      {/* Botão customizado ajustado, centralizado e azul */}
      <Pressable 
        onPress={() => router.push("/register")}
        style={({ pressed }) => [
          styles.btnPrimary,
          pressed && styles.btnPressed
        ]}
      >
        <Text style={styles.btnPrimaryText}>Voltar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#030712",
    padding: 20,
    paddingTop: 50,
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
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  scroll: {
    flex: 1,
    marginBottom: 20,
  },
  scrollContent: {
    alignItems: "center", // Garante a centralização horizontal do conteúdo
    paddingBottom: 20,
  },
  text: {
    color: "#E5E5E5",
    fontSize: 16,
    lineHeight: 26,
    textAlign: "justify",
    width: "100%",
    maxWidth: 500, // Limita a largura máxima no centro
    alignSelf: "center",
  },
  btnPrimary: {
    alignSelf: "center",
    width: "48%", // Largura idêntica ao botão de cadastro
    height: 58,
    backgroundColor: "#35e6c6", // Botão em azul sólido
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 6,
  },
  btnPrimaryText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "700",
    letterSpacing: -0.2,
  },
  btnPressed: {
    transform: [{ scale: 0.97 }],
    opacity: 0.9,
  },
});