function somar(a, b) {
  return a + b
}


function subtrair(a, b) {
  return a - b
}


function multiplicar(a, b) {
  return a * b
}


function dividir(a, b) {
  if (a === 0 || b === 0) {
    throw new Error("Error")
  }
  
  return a / b
}


function ehPar(a) {
  return a % 2 === 0
}


module.exports = {
  somar,
  subtrair,
  multiplicar,
  dividir,
  ehPar,
};
