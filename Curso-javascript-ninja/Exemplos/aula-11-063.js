//FOR ... IN

var car = {
  marca: "VW",
  modelo: "Gol",
  ano: 2018
}

//percorre todas as propriedades do objeto carro e imprime
for (var prop in car ){
  console.log(prop)
}

//IN
//verifica se uma propriedade específica existe no objeto carro
console.log("marca" in car)//retorna true ou false