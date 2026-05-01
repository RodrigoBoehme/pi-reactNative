import {TextInput,StyleSheet,TextInputProps} from 'react-native'

export default function CustomInput(props:TextInputProps){
    return <TextInput{...props} style={[styles.input,props.style]}/>
}
const styles=StyleSheet.create({
    input:{
        width:340,
        backgroundColor:"#fff",
        borderWidth:1,
        borderColor:"#dcdcdc",
        borderRadius:20,
        paddingHorizontal:10,
        paddingVertical:5,
        fontSize:16,
        marginBottom:12
        }
})
