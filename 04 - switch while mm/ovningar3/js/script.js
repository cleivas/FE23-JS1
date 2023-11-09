// Generera mening

const nouns =  [
    "Kamy",
    "Tobbe",
    "Jesper",
    "Clara",
    "Ton",
    "Johanna",
    "Yasir",
    "Benji",
    "Podiumet",
    "Datorn",
  ];
const verbs =  [
    "hoppar",
    "springer",
    "knuffar",
    "går",
    "pratar",
    "skriker",
    "ropar",
    "gestikulerar",
    "övertygar",
    "följer",
  ];
const freeWords =  [
    "vilt",
    "lugnt",
    "mästerligt",
    "euforiskt",
    "robust",
    "tryggt",
    "högt",
    "hårt",
    "mesigt",
    "tufft",
  ];

  for(let i=0; i<nouns.length; i++){
    const h3El = document.createElement('h3');
    document.body.appendChild(h3El);

    const sentence = `${nouns[i]} ${verbs[i]} ${freeWords[i]}`;

    h3El.innerText = sentence;
  }

// Utmaning  användarnamn
const importantNames = ["Clara", "Guido", "Alrik", "Noura"];
const names = [
    "Guido",
  "Signe",
  "Noura",
  "Alrik",
  "Elias",
  "Maja",
  "Trung",
  "Dalya",
  "Clara",
  "Sergio",
  "Bianca",
  "Soraya",
];

for(let i=0; i<names.length; i++){
    const h1El = document.createElement('h1');
    h1El.innerText = names[i];
    h1El.style.color = 'gray';
    h1El.style.fontWeight = 'normal';
    document.body.appendChild(h1El);

    for(let j = 0; j<importantNames.length; j++){
        console.log(names[i], importantNames[j]);

        if(names[i] === importantNames[j]){
            h1El.style.color = 'black';
            h1El.style.fontWeight = 'bold';
            break;
        }
    }
}