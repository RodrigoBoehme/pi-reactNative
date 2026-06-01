//Importa componentes visuais
//View -> estrutura (tipo uma div)
//Text -> texto
//Stylesheet - estilos
//Image -> exibir imagens
import { View, Text,StyleSheet,Image } from "react-native";
//Importa o sistema de navegação do Expo Router
//router -> permite navegar entre telas
import { router } from "expo-router";
//Importa o botão que criamos
import CustomButon from "../components/ui/Button";

export default function IndexScreen(){
    return(
        //Container principal
        <View style={styles.container}>
            {/* {Imagem do logo} */}
            <Image 
            source={require("../../assets/images/logo2.jpeg")}
            style={styles.image}
            resizeMode="contain" //Mantém a proporção sem cortar a imagem
            />
            {/* {Titulo principal} */}
            <Text style={styles.title}>InformaTechInforma</Text>
            {/* Subtitulo explixando o app  */}
            <Text style={styles.subtitle}>
                Este app serve para informar algo a alguem, esse quem ninguem sabe alguem maklçsdmasçlfas.
            </Text>
            {/* Botão para ir para tela de Login */}
            <CustomButon
            title="Ir para Login"
            onPress={()=>router.push('/login')}
            //router.push -> empilha uma nova tela
            />
            {/* Botão para ir a tela de Cadastro */}
            <CustomButon
            title="Ir para Cadastro"
            onPress={()=>router.push("/register")}
            />


        </View>
    )
}
//Estilos
const styles=StyleSheet.create({
 container:{
    flex:1,//Ocupa toda a tela
    // backgroundColor:"#253C1F",
    backgroundColor:"#000000",
    justifyContent:"center",//Centraliza verticalmente
    alignItems:"center",//Centraliza horizontalmente
    padding:24
 },
 image:{
    width:300,
    height:300,
    marginBottom:10
 },
 title:{
    fontSize:28,
    fontWeight:'700',//negrito forte
    marginBottom:8
 },
 subtitle:{
    fontSize:16,
    color:"#666",
    marginBottom:24,
    textAlign:"center"
 }

})