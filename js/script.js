/* creare una password con nome cognome colore preferito e 21 */

/* chiedo il nome */
let name = prompt("Qual'è il tuo nome?");

/* chiedo il cognome */
let surname = prompt("Qual'è il tuo cognome?");

/* chiedo il colore preferito */
let favColor = prompt("Qual'è il tuo colore preferito?");

/* calcolo la password */
let pass = `${name}${surname}${favColor}21`;


/* mostro la password assegnata */
document.getElementById("pass").innerHTML = `la password che ti è stata assegnata è: ${pass}`;