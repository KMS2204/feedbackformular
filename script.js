window.addEventListener('DOMContentLoaded', function () {
	initVorschau();
})

function initVorschau()
{
    let select = document.querySelector('select');
    let inputs = document.querySelectorAll('input');
    let textarea = document.querySelector('textarea');

    inputs.forEach(input => {
        input.addEventListener("keyup", createString);
    });

    textarea.addEventListener("keyup", createString);

    select.addEventListener("change", createString);
}

function createString() {


    let anrede = document.getElementById("anrede").value;
    let vorname = document.getElementById("vorname").value
    let nachname = document.getElementById("nachname").value
    let email = document.getElementById("email").value
    let nachricht = document.getElementById("nachricht").value

    let pVorschau = document.getElementById("content");
    let string = '';

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
    if(nachricht)
    {
        string = string + '<br>"' + nachricht + '"';
    }

    pVorschau.innerHTML = string;

};