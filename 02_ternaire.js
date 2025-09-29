
/**
 * retourne la valeur la plus grande des deux paramètres
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


module.exports = ternaire;