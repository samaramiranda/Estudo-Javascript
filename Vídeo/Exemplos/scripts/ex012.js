var agora = new Date() //pegando a hora exata
var hora = agora.getHours()
var minutos = agora.getMinutes()
console.log(`Agora são ${hora} horas e ${minutos} minutos`)

if (hora < 12) {
  console.log("Bom dia")
} else if (hora <= 18) {
  console.log("Boa tarde")
} else {
  console.log("Boa noite")
}