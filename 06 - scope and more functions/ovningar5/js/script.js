// En funktion som tar grader i celsius som argument och returnerar grader i Fahrenheit.
// Fahrenheit (°F) = (Celsius x 1.8) + 32

function getFahrenheit(celsius) {
  // console.log((celsius * 1.8) + 32)
  // const f = (celsius * 1.8) + 32;
  return celsius * 1.8 + 32;
}

const fahrenheit = getFahrenheit(45);

console.log(fahrenheit);

console.log(getFahrenheit(20));

const h1 = document.querySelector("h1");
h1.innerText = getFahrenheit(20);

// PRioriteringsgrad

function createPrioEl(text, prio) {
  const pEl = document.createElement("p");
  document.body.append(pEl);
  pEl.innerText = text;

  // switch(prio){
  //     case 1:
  //         pEl.className = 'prio-1';
  //         break;
  //     case 2:
  //         pEl.className = 'prio-2';
  //         break;
  //     case 3:
  //         pEl.className = 'prio-3';
  //         break;
  // }

//   if (prio == 1) {
//     pEl.classList.add("prio-1");
//   } else if (prio == 2) {
//     pEl.classList.add("prio-2");
//   }
//   else if(prio == 3){
//     pEl.classList.add("prio-3");
//   }

    pEl.classList.add(`prio-${prio}`);
}

createPrioEl("Plugga", 1);
createPrioEl("Träna", 3);
createPrioEl("Städa", 2);
