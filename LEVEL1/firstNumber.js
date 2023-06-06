// Ce code affiche si un nombre est premier ou pas.
const arg = process.argv.splice(2);
const num = arg[0];
const regex = new RegExp(/[0-9]/);

function firstNumber(num) {
  if (!regex.test(num) || !num || arg.length > 1) return console.log("Erreur.");

  for (let i = 2; i < num; i++) {
    if (num%i === 0) {
      console.log(`Non, ${num} n\'est pas un nombre premier.`);
      return;
    }

    if (num > 1) {
      console.log(`Oui, ${num} est un nombre premier.`);
      return;
    }
  }
}

firstNumber(num);