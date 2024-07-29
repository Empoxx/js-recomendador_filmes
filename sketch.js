const tiposDeFilmes = {
  18: {
    comedia: 'Todo Mundo em Pânico',
    romance: '50 Tons de Cinza',
    ação: 'Bastardos Inglórios',
  },
  14: {
    comedia: 'Ela é Demais',
    romance: 'Depois do Universo',
    ação: 'Maze Runner',
  },
  10: {
    comedia: 'Hotel Transilvânia 2',
    romance: 'Agora e Para Sempre',
    ação: 'Cartilha da Vida',
  },
  "livre": {
    comedia: "Alvin e os Esquilos",
    romance: "Diário de uma Princesa",
    ação: "Karatê Kid",
  },
};

let selecoes = "livre";
let checkbox1, checkbox2, checkbox3;
let filmes = tiposDeFilmes[selecoes];
let selecoesDropdown;

function setup() {
  createCanvas(400, 400);

  checkbox1 = createCheckbox("ação", false);
  checkbox1.position(20, 60);
  
  checkbox2 = createCheckbox("comedia", false);
  checkbox2.position(20, 90);
  
  checkbox3 = createCheckbox("romance", false);
  checkbox3.position(20, 120);
  
  selecoesDropdown = createSelect();
  selecoesDropdown.option(18);
  selecoesDropdown.option(14);
  selecoesDropdown.option(10);
  selecoesDropdown.option("livre");
  selecoesDropdown.position(20, 20);
  selecoesDropdown.changed(updateFilme);
}

function draw() {
  background(220);
  textSize(20);
  textAlign(CENTER, CENTER);
  
  let generosCheckbox = [checkbox1.checked(), checkbox2.checked(), checkbox3.checked()];
  let pularLinha = 1;
  
  for (let x = 0; x < generosCheckbox.length; x++) {
    if (generosCheckbox[x]) {
      text(filmes[Object.keys(filmes)[x]], 200, 100 * pularLinha);
      pularLinha++;
    }
  }
}

function updateFilme() {
  selecoes = selecoesDropdown.value();
  filmes = tiposDeFilmes[selecoes];
}
