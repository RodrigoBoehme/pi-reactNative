// Definindo o endeereco do backend caso firestore seja bloqueado

export const API_URL="http://192.168.0.10.3000" //Localhost

export async function registerUser(data:{
    name:string
    email:string
    password:string
}) {
    const response=await fetch(`${API_URL}/users/register`)
    
}