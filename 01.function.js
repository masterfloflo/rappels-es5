console.log("01 - Fonctions");

var nombre1 = 10;
var nombre2 = 20;

//Définition d'une fonction

function additionner(nb1, nb2) {
    return nb1 + nb2;
}

var resultat1  = additionner(nombre1 , nombre2);
console.log(resultat1);

//Variable de type fonction 1

var somme = function additionner(nb1, nb2) {
    return nb1 + nb2;
}
var resultat2 = somme(nombre1, nombre2);

console.log(resultat2);

//Variable de type fonction 2

var multiplication = function(nb1, nb2) {
    return nb1 * nb2;
}
var resultat3 = multiplication(nombre1, nombre2);

console.log(resultat3);

//Fonction comme élément du 1er ordre

function afficherOperation(nomOperation, operation,nb1, nb2) {
  this.nomOperation = "yolo";
  this.operation();
  this.nb1;
  this.nb2;
  return 
}