const pizza = ["harina","levadura","sal","aceite","agua","tomate","oregano","cebolla","ajo","tofu"];

let pares = [];

let impares = [];

function paresImpares (arr) {
  for (let ingrediente of arr) {
    if(ingrediente.length % 2 == 0) {
      pares.push(ingrediente)
    } else {
      impares.push(ingrediente)
    }
  }
  return console.log( `Los ingredientes pares son: ${pares}. 
Los ingredientes impares son: ${impares}.`)
}

console.log(paresImpares(pizza));

