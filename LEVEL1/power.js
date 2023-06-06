// Ce code retourne la puissance d'un nombre (arg1 arg2)
const arg = process.argv.splice(2);
const regex = new RegExp(/[0-9]/);

const arg1 = arg[0] > 0 && regex.test(arg[0]) ? arg[0]: false;
const arg2 = regex.test(arg[1]) ? arg[1] : false;

if (arg1 && arg2 && arg.length < 3) {
  console.log(Math.pow(arg1, arg2));
} else {
  console.log("Erreur.");
}
