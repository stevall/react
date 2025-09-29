/**
 * utilisez les nouveau guillets ` (alt gr + 7) pour concaténer le nom et le prénom passé en paramètre
 * Renvoi le résultat
 *
 * exemple: "John", "Doe" => "John Doe"
 *
 * contrainte:
 *  - ne pas utiliser l'opérateur +
 *  - ne pas utiliser la fonction concat de String
 */

const nom = "Doe";
const prenom = "John";

let concatName = (nom, prenom) => ` ${nom} ${prenom} ` ;
console.log(concatName("Doe","John"))

module.exports = {concatName};
