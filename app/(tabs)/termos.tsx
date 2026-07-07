import { View, Text, StyleSheet, ScrollView } from "react-native";
import { router } from "expo-router";
import CustomButon from "../components/ui/Button";

export default function TermsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Termos de Uso</Text>

      <ScrollView
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.text}>
        Data de vigência: 23/03/2025
Este documento estabelece os Termos de Uso da plataforma digital Resgatech, desenvolvida com o objetivo de apoiar pessoas afetadas por enchentes, por meio da disponibilização de informações emergenciais, organização de doações e facilitação do contato entre vítimas, voluntários, organizações e demais agentes envolvidos em ações de apoio humanitário. Ao acessar, instalar ou utilizar a plataforma Resgatech, o usuário declara que leu, compreendeu e concorda com todas as cláusulas previstas neste instrumento, obrigando-se a cumpri-lo integralmente.
A plataforma Resgatech não substitui, em nenhuma hipótese, os serviços prestados por órgãos oficiais, como a Defesa Civil, Corpo de Bombeiros, SAMU ou quaisquer autoridades públicas. A Resgatech é uma ferramenta de suporte à comunidade e atua exclusivamente como facilitadora da comunicação e da coordenação de esforços solidários em situações de enchente, sem executar diretamente ações de resgate, transporte ou atendimento médico.
O uso da Resgatech poderá exigir o fornecimento de dados pessoais, como nome, telefone, localização e informações de emergência. Ao fornecer tais dados, o usuário declara que são verdadeiros, completos e atualizados, responsabilizando-se civil e criminalmente por qualquer omissão ou falsidade. Tais dados serão tratados em conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018), sendo utilizados apenas para fins relacionados ao atendimento emergencial, direcionamento de doações, segurança da operação e colaboração com autoridades e instituições parceiras. A Resgatech compromete-se a não comercializar ou compartilhar os dados pessoais para fins publicitários ou de qualquer natureza alheia ao seu objetivo social.
O usuário compromete-se a utilizar a plataforma de forma ética, responsável e exclusivamente para os fins humanitários a que ela se propõe. É expressamente vedado o uso da Resgatech para fins ilícitos, fraudulentos, ofensivos ou que coloquem em risco terceiros. A prática de atos que contrariem esses princípios poderá resultar na suspensão ou exclusão da conta do usuário, sem prejuízo da adoção de medidas judiciais cabíveis.
A Resgatech envida esforços para manter o serviço em pleno funcionamento e para garantir a integridade das informações veiculadas, mas não se responsabiliza por falhas técnicas, interrupções, indisponibilidades, perda de dados, atrasos na comunicação ou por quaisquer danos diretos ou indiretos decorrentes do uso ou da impossibilidade de uso da plataforma. Da mesma forma, não assume responsabilidade sobre condutas de terceiros, incluindo, mas não se limitando a, voluntários, doadores, beneficiários ou organizações parceiras. O uso da Resgatech é feito por conta e risco do próprio usuário.
Todo o conteúdo disponibilizado na Resgatech, incluindo marcas, textos, imagens, logotipos, código-fonte, bases de dados e demais elementos, constitui propriedade intelectual da plataforma ou de seus licenciadores, sendo vedada sua reprodução, distribuição, modificação ou uso não autorizado, sob pena de sanções civis e criminais.
A Resgatech poderá, a seu exclusivo critério, atualizar ou modificar estes Termos de Uso a qualquer momento. A versão atualizada será publicada na própria plataforma, e a continuidade do uso por parte do usuário implicará em aceitação plena das novas condições. Recomenda-se a leitura periódica deste documento.
Este Termo de Uso é regido pelas leis da República Federativa do Brasil. Fica eleito o foro da comarca de [cidade/UF], com exclusão de qualquer outro, por mais privilegiado que seja, para dirimir eventuais controvérsias oriundas da utilização da plataforma.
Para quaisquer dúvidas, sugestões ou solicitações, o contato oficial da Resgatech deverá ser feito por meio do e-mail: resgatech@gmail.com.
        </Text>
      </ScrollView>

      <CustomButon
        title="Voltar"
        onPress={() => router.back()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 20,
    paddingTop: 50,
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

  text: {
    color: "#E5E5E5",
    fontSize: 16,
    lineHeight: 26,
    textAlign: "justify",
    width: 500,
    alignSelf:"center"
  },
});