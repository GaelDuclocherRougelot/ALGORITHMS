// Ce code retourne la taille de la chaine de caracteres passé en argument

const arg = process.argv.splice(2);
const regex = new RegExp(/[a-z]|[A-Z]&[0-9]/);
const regexNum = new RegExp(/[0-9]/);

if (arg.length > 1) {
  console.log("Erreur.");
  return;
} else if (regex.test(arg[0])) {
  console.log(arg[0].length);
  return;
} else {
  console.log("Erreur.");
}
