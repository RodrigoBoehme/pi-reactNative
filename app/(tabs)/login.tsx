import { View, Text,StyleSheet,TextInput,Alert} from "react-native";
import { router } from "expo-router";
import { useState } from "react";
import CustomButton from "../components/ui/Button";
import CustomInput from "../components/ui/Input";
import { emailRegex ,passwordRegex} from "@/utils/regex";



export default function Login(){

    const [email,setEmail]=useState("")
    const [senha,setSenha]=useState("")

    async function handleLogin() {
        if(!emailRegex.test(email)){
            Alert.alert('Erro',"Digite um Email válido")
            return
        }
        if(!senha.trim()){
            Alert.alert("Erro","Digite a senha")
            return
        }
        try{
            const result=await loginUser({email,senha})
        }catch(e){

        }
    }




    return(
 <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            {/* Campo email */}
            <TextInput
            style= {styles.input}
            placeholder="Digite seu email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            />
            <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            onChangeText={setSenha}
            value={senha}
            />
            <CustomButton title="Login" onPress={handleLogin}/>
            

        </View>
    )
}


const styles=StyleSheet.create({
    container:{
        flex:1,//Ocupa toda a tela
        backgroundColor:"#253C1F",
        justifyContent:"center",//Centraliza verticalmente
        alignItems:"center",//Centraliza horizontalmente
        padding:24
    },
    input:{
        width:350,
        padding:5,
        backgroundColor:"#5DB138",
        borderRadius:20,
        margin:5,
        color:"#f2f1f2"
    },
    title:{
        padding:3,
        fontWeight:700,
        fontSize:30,
        color:'#f9f2f2'
    }
})