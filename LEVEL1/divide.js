// Ce code effectue une division entre deux arguments et retourne le resultat + le reste de la division
const args = process.argv.splice(2, 2);

function divide(arg1, arg2) {
  const result = Math.floor((arg1 / arg2));
  if (!result || result === Infinity) {
    console.log("Erreur.");
    return
  }
  console.log(`resultat: ${result} \nreste: ${arg1%arg2}`);
  return;
}

divide(args[0], args[1]);