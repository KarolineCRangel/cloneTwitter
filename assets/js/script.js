/*
elemento.addEventListener('evento', funcao)
const variavel = document.querySelector("parametro")
*/

/*
 Passo a passo:
 1º passo - capturar o valor da textarea para criar o tweet (usar o .value para capturar o valor)

 event.preventDafault() - evita o padrao do navegador da tag form de envio dos dados.
 
 2º passo - construir o tweet (Pegar texto, nome, foto, nome do usuário, horario)
 
 3º passo - imprimir o tweet
 */

// Passo 1
const textarea = document.querySelector("textarea");
const tweetar = document.querySelector("button");
const feed = document.querySelector(".principal__listaTweets");

function printTweet(event) {
  event.preventDefault();
  const textTweet = textarea.value;
  criarTweet(textTweet);
}
tweetar.addEventListener("click", printTweet);

// Passo 2
function criarTweet(textTweet) {
  console.log(textTweet);

  let data = new Date();
  let hora = data.getHours();
  let minutos = data.getMinutes();

  const tweet = {
    name: "Maria",
    photo: "assets/img/ProfilePic (1).png",
    user: "@mariap.na",
    text: textTweet,
    time: `${hora}:${minutos}`,
  };
  listarTweet(tweet);
}

//Passo 3
function listarTweet(tweet) {
  //pega as informações separadamente
  const { name, photo, user, text, time } = tweet;
  const space = " ";
  let li = document.createElement("li");
  li.classList.add("principal__tweet");
  let img = document.createElement("img");
  img.classList.add("tweet_fotoPerfil");
  img.src = `${photo}`;

  let div = document.createElement("div");
  div.classList.add("tweet__conteudo");
  let h2 = document.createElement("h2");
  h2.innerText = `${name} `;

  let span = document.createElement("span");
  span.innerHTML = `&nbsp ${user} - ${time}`;

  let p = document.createElement("p");
  p.innerText = `${text}`;

  //adicionando elementos dentro de outros com .appendChild
  div.appendChild(h2);
  div.appendChild(span);
  div.appendChild(p);
  li.appendChild(img);
  li.appendChild(div);

  feed.appendChild(li);
  textarea.value = "";
}
