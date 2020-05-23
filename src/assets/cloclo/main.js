const fill_I = document.querySelector('.fill_I');
const fill_M = document.querySelector('.fill_M');
const fill_A = document.querySelector('.fill_A');
const fill_G = document.querySelector('.fill_G');
const fill_E = document.querySelector('.fill_E');
const empties = document.querySelectorAll('.empty');

// Fill listeners
fill_I.addEventListener('dragstart', dragStart_I);
fill_I.addEventListener('dragend', dragEnd_I);
fill_M.addEventListener('dragstart',dragStart_M);
fill_M.addEventListener('dragend',dragEnd_M);
fill_A.addEventListener('dragstart',dragStart_A);
fill_A.addEventListener('dragend',dragEnd_A);
fill_G.addEventListener('dragstart',dragStart_G);
fill_G.addEventListener('dragend',dragEnd_G);
fill_E.addEventListener('dragstart',dragStart_E);
fill_E.addEventListener('dragend',dragEnd_E);


var encours = 0;

// Loop through empty boxes and add listeners
for (const empty of empties) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}
// Drag Functions

function dragStart_I() {
  this.className += ' hold';
  setTimeout(() => (this.className = 'invisible'), 0);
  encours = 1;
  console.log(encours);

}

function dragEnd_I() {
  this.className = 'fill_I';
  encours = 0;
  console.log(encours);
}
function dragStart_M() {
  this.className += ' hold';
  setTimeout(() => (this.className = 'invisible'), 0);
  encours = 2;
    console.log(encours);

}
function dragEnd_M() {
  this.className = 'fill_M';
  encours = 0;
}
function dragStart_A() {
  this.className += ' hold';
  setTimeout(() => (this.className = 'invisible'), 0);
  encours = 3;
  console.log(encours);
}
function dragEnd_A() {
  this.className = 'fill_A';
  encours = 0;
}
function dragStart_G() {
  this.className += ' hold';
  setTimeout(() => (this.className = 'invisible'), 0);
  encours = 4;  console.log(encours);

}
function dragEnd_G() {
  this.className = 'fill_G';
  encours = 0;
}
function dragStart_E() {
  this.className += ' hold';
  setTimeout(() => (this.className = 'invisible'), 0);
  encours = 5;  console.log(encours);

}
function dragEnd_E() {
  this.className = 'fill_E';
  encours = 0;
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.className += ' hovered';
}

function dragLeave() {
  this.className = 'empty';
}

function dragDrop() {
  this.className = 'empty';
  if(encours == 1){this.append(fill_I);};
  if(encours == 2){this.append(fill_M);};
  if(encours == 3){this.append(fill_A);};
  if(encours == 4){this.append(fill_G);};
  if(encours == 5){this.append(fill_E);};
}

function check() {

  //todo 
  var ok = 1;
  var compteur = 5;

  //il va faire des vérifications 
  var val1 = document.getElementById("1");
  val1 = val1.innerHTML;
  var val2 = document.getElementById("2");
  val2 = val2.innerHTML;
  var val3 = document.getElementById("3");
  val3 = val3.innerHTML;
  var val4 = document.getElementById("4");
  val4 = val4.innerHTML;
  var val5 = document.getElementById("5");
  val5 = val5.innerHTML;
  /*console.log(val1);
  val1 = val1.innerHTML;
  console.log(val1);*/
  if(val1 == "<div class=\"empty\"><div id=\"M\" class=\"fill_M\" draggable=\"true\"></div></div>"){
    console.log("ok");

  }
  else{
    console.log("docteur nous avons une erreur");
    ok = 0;
    compteur = compteur -1;
  }
  if(val2 == "<div class=\"empty\"><div id=\"A\" class=\"fill_A\" draggable=\"true\"></div></div>"){
    console.log("ok");
  }
  else{
    console.log("docteur nous avons une erreur");
    ok = 0;
    compteur = compteur-1;
  }

  if(val3 == "<div class=\"empty\"><div id=\"G\" class=\"fill_G\" draggable=\"true\"></div></div>"){
    console.log("ok");
  }
  else{
    console.log("docteur nous avons une erreur");
    ok = 0;
    compteur = compteur - 1;
  }
  if(val4 == "<div class=\"empty\"><div id=\"I\" class=\"fill_I\" draggable=\"true\"></div></div>"){
    console.log("ok");
  }
  else{
    console.log("docteur nous avons une erreur");
    ok = 0;
    compteur = compteur - 1;
  }
  if(val5 == "<div class=\"empty\"><div id=\"E\" class=\"fill_E\" draggable=\"true\"></div></div>"){
    console.log("ok");
  }
  else{
    console.log("docteur nous avons une erreur");
    ok = 0;
    compteur = compteur - 1;
  }



  //une fois que les vérifications sont faites : 
  if(ok == 1){
     document.getElementById("sortie").innerHTML = "<a href = \"indexNOIR2.html\" > BRAVO! route pour le niveau 2</a>"; 
    console.log("on voit bien apparaitre le mot magie à la fin");
  }
  else{
     document.getElementById("sortie").innerHTML = "Non c'est pas ça, mais tu as "+ compteur + " lettres bien placées";
    console.log("le mot magie n'est pas encore la");
  }
}