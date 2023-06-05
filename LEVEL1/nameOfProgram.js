// Donne le nom du fichier que l'on vien de lancer
const fileName = __filename.substr(__filename.lastIndexOf('/') + 1);
console.log(fileName);