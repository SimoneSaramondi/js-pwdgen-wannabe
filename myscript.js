
var nome = prompt("Inserisci il tuo nome");

var cognome = prompt("Inserisci il tuo cognome");

var colore = prompt("Inserisci il tuo colore prefito");

document.writeln(nome + cognome + colore + "21");

/*ALTRI MODI PER SVOLGERE L'ESERCIZIO*/
/* SECONDO MODO
document.writeln(nome);

document.writeln(cognome);

document.writeln(colore);

document.writeln("21");
*/
/* TERZO MODO
document.getElementById("info-personali").innerHTML= nome + cognome + colore +"21";
*/