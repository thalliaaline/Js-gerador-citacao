const quotes = [
  {
    quote: "Quem é você?, perguntou a Lagarta. Eu... eu não sei, senhor, respondeu Alice, pelo menos não sei agora. Eu sei quem fui esta manhã, mas tenho mudado tanto desde então.",
    author: "Alice no País das Maravilhas",
  },
  {
    quote: "Não há sentido em usar palavras se elas não significam o que você quer dizer.",
    author: "Humpty Dumpty",
  },
  {
    quote: "Quanto mais se olha, mais estranho se torna.",
    author: "Alice",
  },
  {
    quote: "Quanto maior a confiança, maior a traição.",
    author: "Luthor",
  },
  {
    quote: "Você não deve ferir quem você não pode matar.",
    author: "Lex Luthor",
  },
  {
    quote: "A persistência é o caminho do êxito.",
    author: "Charles Chaplin",
  },
  {
    quote: "A única forma de fazer um grande trabalho é amar o que se faz.",
    author: "Steve Jobs",
  },
  {
    quote: "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    author: "Robert Collier",
  },
  {
    quote:
      "O fracasso é a oportunidade de começar de novo, com mais experiência.",
    author: "Henry Ford",
  },
  {
    quote: "Não espere por oportunidades, crie você mesmo as suas.",
    author: "Autor desconhecido",
  },
  {
    quote:
      "O verdadeiro sucesso não é o sucesso financeiro, mas sim o sucesso em ajudar outras pessoas.",
    author: "Zig Ziglar",
  },
  {
    quote:
      "O sucesso não é final, o fracasso não é fatal: o que importa é ter coragem para continuar.",
    author: "Winston Churchill",
  },
  {
    quote:
      "O sucesso consiste em ir de fracasso em fracasso sem perder o entusiasmo.",
    author: "Winston Churchill",
  },
  {
    quote: "Acredite em si próprio e todo o resto virá naturalmente.",
    author: "Elon Musk",
  },
  {
    quote:
      "O fracasso não significa que você não seja bom o suficiente, significa que você precisa se esforçar mais.",
    author: "Autor desconhecido",
  },
];

const quoteBtn = document.getElementById("quoteBtn");
const quoteText = document.querySelector(".quote .text");
const quoteAuthor = document.querySelector(".quote .author");

function getQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  quoteText.textContent = quotes[index].quote;
  quoteAuthor.textContent = "- " + quotes[index].author;
}

quoteBtn.addEventListener("click", getQuote);
