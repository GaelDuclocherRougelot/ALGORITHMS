// Ce code retourne la racine carrée d'un entier positif (arg1 arg2)
const arg = process.argv.splice(2);
const regex = new RegExp(/[0-9]/);

const arg1 = arg[0] > 0 && regex.test(arg[0]) ? arg[0] : false;

if (arg1 && arg.length < 2) {
  console.log(Math.sqrt(arg));
} else {
  console.log("Erreur.");
}
