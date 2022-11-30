let pomme = "Elle est belle ma pomme !";

console.log(pomme.lastIndexOf('m'));

let pop = document.getElementById('index-pomme');
pop.innerText = pomme.indexOf('pomme');

let loc = document.getElementById('last-index-m');
loc.innerText = pomme.lastIndexOf('m');

if(pomme.startsWith('Elle')) {
    console.log("Elle est belle ma pomme ! Commence par elle");
}

if(pomme.endsWith('!')) {
    console.log("Elle est belle ma pomme ! Se termine par un point d'exclamation");
}

let pom = document.getElementById('pomme');
pom.innerText = pomme.substring(18, 23);

let moc = document.getElementById('one-line');

let tableau = pomme.split("");

for(let i = 0; i < tableau.length; i++) {
    moc.innerText += tableau[i];
}