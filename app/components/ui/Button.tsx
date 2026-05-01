//Importando 
//Pressable -> botao clicavel "moderno"
//Text -> exibir texto na tela
//Stylesheet importa folha de estilo
import { Pressable,Text,StyleSheet } from "react-native";

//Defeinição do tipo das propriedades que o componente recebe

type Props={
    title:string
    onPress:()=>void//Função que será executada quando botão for clicado
}

//Exporta o componente para ser usado
export default function CustomButton({title,onPress}:Props){
    //Retorna o que será exibio na tela
    return(
        <Pressable style={styles.button} onPress={onPress}> 
          {/* {Texto exibido na tela} */}
          <Text style={styles.text}>{title}</Text>
        </Pressable>
    )
}
//Estilo do botão
const styles=StyleSheet.create({
    button:{
        width:160,//ocuta toda a largura disponivel
        backgroundColor:"#5DB138",//Azulinho
        paddingVertical:5,//Espaçamento interno vertical altura do botão
        borderRadius:20,//Vcs sabem né, aredondar as bordas
        alignItems:"center",//Centraliza o texto horizontalmente
        marginTop:12
    },
    text:{
        color:"#fff",
        fontSize:16,
        fontWeight:"600"
    }
})