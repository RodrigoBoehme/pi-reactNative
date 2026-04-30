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
import CustomButon from "../components/ui/Button"
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
        <View style={style.container}>
            <Text style={style.title}>Cadastro</Text>
            {/* Campo email */}
            <TextInput
            style= {style.input}
            placeholder="Digite seu email"
            value={email}
            onChangeText={setEmail}//Atualoza o estado ao digitar
            keyboardType="email-address"
            autoCapitalize="none"
            />
            <TextInput
            style={style.input}
            placeholder="Digite sua senha"
            value={senha}
            onChangeText={setSenha}

            />

        </View>
    )

}

const style={
    container:{
        flex:1,//Ocupa toda a tela
        backgroundColor:"#253C1F",
        justifyContent:"center",//Centraliza verticalmente
        alignItems:"center",//Centraliza horizontalmente
        padding:24
    },
    input:{
        width:350,
        padding:4,
        backgroundColor:"#5DB138"
    },
    title:{
        
    }
}