// Ce code permet de déterminer si l'arg donné est un entier pair ou impair
const regex = new RegExp(/[0-9]/);

function evenOrOdd(nb) {
  if (!regex.test(nb)) {
    console.log("Entrez un chiffre ou un nombre");
    return;
  }

  if (nb / 2 == Math.round(nb / 2)) {
    console.log("pair");
  } else {
    console.log("impair");
  }
}

evenOrOdd(process.argv.slice(2));
