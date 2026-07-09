
import { View, Text,StyleSheet,Image, Pressable } from "react-native";
import CustomButtom from "@/app/components/ui/Button";
import { router } from "expo-router";

export default function mapa(){

    return(
        <View style={styles.container}>
            <View style={styles.main}>
            {/* Logo aki */}
            <Image 
            source={require(("../../assets/images/logo2.jpeg"))}
            style={styles.image}
            resizeMode="contain"
            />
            <Text style={styles.title}>Hell nah</Text>
            <Text style={styles.subtitle}></Text>
            <Text style={styles.content}>Maybe a map in the far far away future?</Text>
            <Pressable onPress={()=>router.push("/")} style={styles.button} />
            </View>
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
 image:{
    width:220,
    height:220,
    marginBottom:20,
    borderRadius:50
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
 },
 main:{
    backgroundColor:"#73c04f",
    width:500,
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:40
 },
 content:{},
 button:{
   width:100,
   height:30,
   backgroundColor:"#fff",
   borderRadius:16
 }

})
