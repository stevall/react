const {sleep} = require("./10_promise");

/**
 * Créez une fonction synchrone qui attend 2 seconde puis execute le callback passé en paramètre
 * vous pouvez utiliser la fonction sleep créé précedement: const {sleep} = require("../exercices/10_promise");
 * 
 * Vous devez utiliser .then
 * 
 * contrainte:
 *    - votre fonction doit être synchrone et ne pas retourner de Promise
 *    - ne pas utiliser async await
 * 
 */
const usingThen = () => {
    console.log("Début usingThen ")
    sleep(2000).then (() => console.log("Fin usingThen 2s"))
};
usingThen();

/**
 * Créez une fonction asynchrone qui attend 2 seconde puis execute le callback passé en paramètre
 * vous pouvez utiliser la fonction sleep créé précedement: const {sleep} = require("../exercices/10_promise");
 * 
 * Vous devez utiliser await
 * 
 * contrainte:
 *   - votre fonction doit être asynchrone et retourner une Promise
 *   - ne pas utiliser .then
 */

const usingAwait = async () => {
    console.log("Début usingAwait")
    await sleep(2000)
    console.log("Fin usingAwait 2s")
};
usingAwait();

/**
 * Créez une fonction asynchrone qui effectue un appel api vers l'url passé en paramètre
 * retourne le résultat de la requête (body)
 * 
 * Vous pouvez utiliser axios, mais n'oubliez pas d'installer le package et de l'importer
 * npm install axios
 * 
 * votre réponse doit être un objet json
 * 
 * url de test: https://jsonplaceholder.typicode.com/todos/1
 */

//décommentez la ligne suivante une fois le package installé
const axios = require("axios");
const url = "http://jsonplaceholder.typicode.com/todos/1";

const apiResponse = async (url) => {

    console.log("Début apiResponse")
    await axios.get(url).then(function (response) {
        console.log(response.data);
        console.log(response.status);
    });
    console.log("Fin apiResponse")
};
apiResponse(url);


module.exports = {usingThen, usingAwait, apiResponse};