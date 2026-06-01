//Import componentes visuais do React Native
import {View, Text,TextInput,StyleSheet,Alert} from "react-native"
//Importa o hook para controlar os estados
import {useState} from "react"

//Função do Firebase para criar usuario com email e senha
import { createUserWithEmailAndPassword } from "firebase/auth"

//Controle de navegação entre telas
import {router} from "expo-router"
//Importa a autenticação configurada no Firebase
import { Auth } from "firebase/auth"

//Botao
import CustomButton from "../components/ui/Button"
import { auth } from "@/config/firebase"
import { createErrorHandler } from "expo/build/errors/ExpoErrorManager"
//Componente principal da tela de cadastro
export default function Register(){
    //Estado para armazenar o email da tela de cadastro
    const [email,setEmail]=useState("")
    //Estado para armazenar a senha 
    const [senha,setSenha]=useState("")
    //FUnção chamada ao clicar no botão cadastrar
    async function cadastrar(){
        //Validação: verifica se os campos estão vazios 
        if(!email || !senha){
            Alert.alert("Atenção, preencha o email e a senha.")
            return //Interrompe a execução
        }
        if(senha.length<6){
            Alert.alert("Atenção, senha com pelo menos 6 caracteres")
        }
        try{
            //Cria o usuario no Firebase Authentication
            await createUserWithEmailAndPassword(auth,email.trim(),senha)
            //Mensagen de sucesso
            Alert.alert("Sucesso, conta criada com seucesso!")
            
            //Redureciiona para a tela home 
            router.replace("./home")
        }catch(error){
            //caso de erro (ex:. caso ja exusta)
            Alert.alert("Erro! Não foi possivel criar a conta")
        }
    }
    //Interface da tela
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro</Text>
            {/* Campo email */}
            <TextInput
            style= {styles.input}
            placeholder="Digite seu email"
            value={email}
            onChangeText={setEmail}//Atualoza o estado ao digitar
            keyboardType="email-address"
            autoCapitalize="none"
            />
            {/* botão de cadastro */}
            <CustomButton title="Cadastrar" onPress={cadastrar}/>
            {/* Botao para voltar paao login */}
            <CustomButton title="Ja tenho conta" onPress={()=>router.push("/login")}/>
            

            


        </View>
    )

}

const styles=StyleSheet.create({
    container:{
        flex:1,//Ocupa toda a tela
        // backgroundColor:"#253C1F",
        backgroundColor:"#050505",
        justifyContent:"center",//Centraliza verticalmente
        alignItems:"center",//Centraliza horizontalmente
        padding:24
    },
    input:{
        width:350,
        height:40,
        padding:15,
        backgroundColor:"#5DB138",
        borderRadius:20,
        margin:5,
        fontWeight:"700",
        color:"#f2f1f2"
    },
    title:{
        padding:3,
        fontWeight:700,
        fontSize:30,
        color:'#f9f2f2'
    }
})