const {
  somar,
  subtrair,
  multiplicar,
  dividir,
  ehPar,
} = require("../src/index");

// Testes para a função somar
test("Soma dois números corretamente", () => {
  expect(somar(3,5)).toBe(8)
});

test("Soma dois números negativos corretamente", () => {
  expect(somar(-3,5)).toBe(2)
});

// Testes para a função subtrair
test("Subtrai dois números corretamente", () => {
  expect(subtrair(4,4)).toBe(0)
});

test("Subtrai com resultado negativo", () => {
  expect(subtrair(-2,6)).toBe(-8)
});

// Testes para a função multiplicar
test("Multiplica dois números corretamente", () => {
  expect(multiplicar(2,3)).toBe(6)
});

test("Multiplica número por zero", () => {
  expect(multiplicar(2,0)).toBe(0)
});

// Testes para a função dividir
test("Divide dois números corretamente", () => {
  expect(dividir(8,4)).toBe(2)
});


test("Lança erro ao dividir por zero", () => {
  expect(dividir(4,0)).toBe(2)
});

// Testes para a função ehPar
test("Verifica se o número é par", () => {
  expect(ehPar(2)).toBe(true)
});

test("Verifica se o número é ímpar", () => {
  expect(!ehPar(3)).toBe(true)
});
