// CRIE UMA ARRAY COM 5 ITENS E EXIBA NO CONSOLE

let times = ["bayern", "corinthians", "semMundial", "psg", "juventus"]
console.log(times)


// ADICIONAR NOME AO INICIO DA ARRAY

times.unshift("manchester")


// REMOVER ULTIMO ELEMENTO

let pais = ["brasil", "argentina", "canada"]
console.log(pais)

pais.pop("canada")


// ADICIONAR 2 ELEMENTOS NO FINAL DA ARRAY

pais.push("holanda", "suiça")


// REMOVER PRIMEIRO ELEMENTO DA ARRAY

pais.shift("brasil")


// ORDEM CRESCENTE

let numbers = [7,5,6,3,8,9,2,1,4]
console.log(numbers)

numbers.sort()


// 3 PROPRIEDADES MINHA

let minhasPropriedades = new Object

minhasPropriedades.cidade = "Mogi das Cruzes, SP"
minhasPropriedades.idade = "17 Anos"
minhasPropriedades.nome = "Gabriel"

console.log(minhasPropriedades)


// ALTERAR PROPRIEDADE SEM ALTERAR OBJETO INICIAL

minhasPropriedades.altura = "1,62m"


// REMOVER QUALQUER PROPRIEDADE DO OBJETO

delete minhasPropriedades.cidade


// MOSTRAR TODAS PROPRIEDADES DO OBJETO

console.log(minhasPropriedades)


// CADASTRO

let cadastro = [{nome: "Gabriel Alves", idade: 17, telefone: "(11) 0 0000-0000", amigos: ["Luke", "Jug", "Snoop", "Spop"]
},
{
    nome: "Luke",
    idade: 28,
    telefone: "(11) 0 0000-0000",
    amigos: ["Hinata", "Jug", "Snoop", "Spop"]
  },
  {
    nome: "Jug",
    idade: 35,
    telefone: "(11) 0 0000-0000",
    amigos: ["Hinata", "Luke", "Snoop", "Spop"]
  },
  {
    nome: "Snoop",
    idade: 31,
    telefone: "(11) 0 0000-0000",
    amigos: ["Hinata", "Luke", "Jug", "Spop"]
  },
  {
    nome: "Spop",
    idade: 36,
    telefone: "(11) 0 0000-0000",
    amigos: ["Hinata", "Luke", "Jug", "Snoop"]
  }
]


console.log(cadastro)


// EXIBIR O NOME DE 1 AMIGO DE CADA LISTA

// não consegui fazer