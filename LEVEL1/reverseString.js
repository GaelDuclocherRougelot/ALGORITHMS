// Ce code retourne la chaine de caracteres (arg) inversé
// \! pour le "!"

const arg = process.argv.splice(2, 1);

function reverseString(arg) {
  const argLength = arg[0].split("").length - 1;

  for (let i = argLength; i >= 0; i--) {
    process.stdout.write(`${arg[0][i]}`);
  }
  process.stdout.write(`\n`);
}

reverseString(arg);
