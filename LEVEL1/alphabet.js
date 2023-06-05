// ce code doit retrourner l'alphabet sur une meme ligne, suivi d'un retour à la ligne

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p','q', 'r', 's', 't', 'u','v', 'w', 'x', 'y', 'z'];

for (let i = 0; i < alphabet.length; i++) {
  process.stdout.write(`${alphabet[i]}`);
  if (alphabet[i] === 'z') {
    console.log(`\n`);
  }
};