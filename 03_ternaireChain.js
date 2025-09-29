
/**
 * Utiliser les ternaires en les chainants, pour éviter les if elseif else
 * 
 * Renvoyer ">" si a supérieur à b
 * Renvoyer "<" si a inférieur à b
 * Renvoyer "=" si a égal à b
 * 
 * Contraintes:
 *    - utiliser l'opérateur ternaire (if interdit)
 */

function ternaryChain(a, b) {
    let valeur = a > b ? ">" :
        a < b ? "<" :
            "="

    return valeur
}

console.log(ternaryChain(5,4));

module.exports = ternaryChain;