
/**
 * utilisez la décomposition pour extraire la premiere et la 2e case du tableau
 * retournez les dans un nouveau tableau
 * 
 * exemple: [1, 2, 3] => [1, 2]
 * 
 * astuce: vous pouvez utiliser la décomposition directement dans les arguments de la fonction
 * 
 * contrainte: 
 *  - interdiction d'utiliser [0] et [1]
 *  - interdiction d'utiliser slice ou splice
 */

const tab1 = [1, 2, 3]
let [a,b,...rest] = tab1;
let extractFirstTwo = [a,b]

console.log(extractFirstTwo);


/**
 * utilisez la décomposition pour extraire la premiere case du tableau et le reste du tableau
 * retournez uniquement le reste du tableau
 * 
 * exemple: [1, 2, 3] => [2, 3]
 */

const tab2 = [1, 2, 3]
let [c,...rest1] = tab2;
let extractRest = rest1

const extract = ([ ,...rest]) => rest

console.log(extract(tab2));

/**
 * utilisez la décomposition pour extraire le champ "name" de l'objet passé en paramètre
 * retournez le champ "name"
 * 
 * exemple: {name: "toto", age: 42} => "toto"
 * 
 * astuce: vous pouvez utiliser la décomposition directement dans les arguments de la fonction
 * 
 * contrainte:
 * - interdiction d'utiliser l'opérateur "." pour accéder au champ "name"
 */
const objet = {name: "toto", age: 42}
const extractName = ({name}) => name;
console.log(extractName(objet));

/**
 * utilisez la décomposition pour retourner l'objet utilisateur sans le champ "password"
 * 
 * exemple: {name: "toto", password: "1234"}
 * 
 * contrainte: 
 *    - interdiction d'utiliser "delete"
 *    - interdiction d'utiliser l'opérateur "." pour accéder au champ "password"
 * 
 */
const objet1 = {name: "toto", password: "1234"}
const removePassword = ({password,...rest}) => rest;
console.log(removePassword(objet1));

module.exports = {extractFirstTwo, extractRest, extractName, removePassword}