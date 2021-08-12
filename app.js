var resposta

function pergunta(err1, err2, certaR, link) {
  resposta = prompt("RESPONDA 1, 2 OU 3");
  while(resposta != certaR){    
    if(resposta == err1 || resposta == err2){
      alert("VOCÊ AINDA É MAU E PERDEU!")     
      restart()
      break
    }    
    resposta = prompt("RESPONDA 1, 2 OU 3");
  }  
  if (resposta == certaR) {
    location.replace(`${link}.html`);
    
  }
};

function nextStage(arq) {
  location.replace(`stages/${arq}.html`)
}
function restart() {
  location.replace("../index.html")
}

