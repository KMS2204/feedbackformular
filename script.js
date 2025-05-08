window.addEventListener('DOMContentLoaded', function () {
	//Initialisieren der Vorschau
    initVorschau();
})

function initVorschau()
{
    //Alle Form-Elemente holen
    let select = document.querySelector('select');
    let inputs = document.querySelectorAll('input');
    let textarea = document.querySelector('textarea');

    //Allen Form-Elementen ein Event geben
    inputs.forEach(input => {
        input.addEventListener("keyup", createString);
    });

    textarea.addEventListener("keyup", createString);

    select.addEventListener("change", createString);
}

//Erstellen der Vorschau
function createString() {

    //Setzen der Werte aus dem Formularfeldern
    let anrede = document.getElementById("anrede").value;
    let vorname = document.getElementById("vorname").value
    let nachname = document.getElementById("nachname").value
    let email = document.getElementById("email").value
    let nachricht = document.getElementById("nachricht").value

    //Element für die Ausgabe vorbereiten
    let pVorschau = document.getElementById("content");
    let string = '';

    //Vorschau erstellen
    if(anrede)
    {
        string = string + anrede + ' ';
    }

    if(vorname)
    {
        string = string + vorname + ' ';
    }

    if(nachname)
    {
        string = string + nachname + ' ';
    }

    if(email)
    {
        string = string + '- ' + email + ' ';
    }

    if(string.length > 0) {
        string = string  + 'schreibt:';
    }

    if(nachricht)
    {
        string = string + '<br>"' + nachricht + '"';
    }

    //Erstellen String in entsprechendes p-tag einfügen
    pVorschau.innerHTML = string;

};