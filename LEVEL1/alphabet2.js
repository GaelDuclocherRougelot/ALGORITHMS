// Liste l'alphabet en en fonction de l'argument donné

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p','q', 'r', 's', 't', 'u','v', 'w', 'x', 'y', 'z'];

const arg = process.argv.slice(2);

// on verifie que l'argument donné est correcte
if (alphabet.includes(arg[0]) && arg[0].length === 1) {
  const argIndex = alphabet.indexOf(arg[0]);

  for (let i = argIndex; i < alphabet.length; i++) {
    process.stdout.write(`${alphabet[i]}`);
    if (alphabet[i] === 'z') {
      console.log(`\n`);
    }
  };

}else {
  return;
}
