
/**
 * Créez une fonction asynchrone qui attend 2 seconde
 * 
 * utilisez new Promise
 */

const sleep = (ms) => new Promise (resolve => setTimeout(resolve, ms));

const asyncFunc = async () => {
    console.log("Début")
    await sleep(2000)
    console.log("Fin")
}

asyncFunc();

module.exports = {sleep};