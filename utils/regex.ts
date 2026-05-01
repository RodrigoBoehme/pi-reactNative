/* aqui guardamos expressoes regulares para validar os campos
*/
//Valida email simples
export const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
/**
 * Senha:
 * pelo meons 8 caracteres
 * uma letra maiuscula
 * uma letra minuscula 
 * um numero
 */
export const passwordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/