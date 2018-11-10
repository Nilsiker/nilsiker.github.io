var bDie;
var sDie;
var iDie;
var armor;
var rand;
var bSucc;
var sSucc;
var iSucc;
var bTrauma;
var iTrauma;
var bLeft;
var sLeft;
var iLeft;
var armorDamage;
var damage;
var game;
var cap = 20;

function setGame(game){
    this.game = game;
}

function setBase(x) {
  switch (x) {
    case 'STR':
    case '1':
    case '2':
    case '3':
    case '31':
      bDie = document.getElementById('vSTR').value - document.getElementById('tSTR').value;
      break;
    case 'AGI':
    case '4':
    case '5':
    case '6':
    case '61':
      bDie = document.getElementById('vAGI').value - document.getElementById('tAGI').value;
      break;
    case 'WIT':
    case '7':
    case '8':
    case '9':
    case '91':
      bDie = document.getElementById('vWIT').value - document.getElementById('tWIT').value;
      break;
    case 'EMP':
    case '10':
    case '11':
    case '12':
    case '121':
      bDie = document.getElementById('vEMP').value - document.getElementById('tEMP').value;
      break;
    case '13':
      switch (document.getElementById('Spec').value) {
        case 'STR':
          bDie = document.getElementById('vSTR').value - document.getElementById('tSTR').value;
          break;
        case 'AGI':
          bDie = document.getElementById('vAGI').value - document.getElementById('tAGI').value;
          break;
        case 'WIT':
          bDie = document.getElementById('vWIT').value - document.getElementById('tWIT').value;;
          break;
        case 'EMP':
          bDie = document.getElementById('vEMP').value - document.getElementById('tEMP').value;
          break;
        default:
          break;
      }
      break;
  }
  if (bDie > cap) { return; }
  bLeft = bDie;
  
}

function setSkill(x) {
  sDie = document.getElementById(x).value;
  if (x == 13){
    switch (document.getElementById('Spec').value) {
      case 'STR':
        bDie = document.getElementById('vSTR').value - document.getElementById('tSTR').value;
        break;
      case 'AGI':
        bDie = document.getElementById('vAGI').value - document.getElementById('tAGI').value;
        break;
      case 'WIT':
        bDie = document.getElementById('vWIT').value - document.getElementById('tWIT').value;;
        break;
      case 'EMP':
        bDie = document.getElementById('vEMP').value - document.getElementById('tEMP').value;
        break;
      default:
        break;
    }
  }

  sDie = +sDie + +document.getElementById('Bonus').value;
  if (sDie > cap) { return; }
  sLeft = sDie;
}


function setItem() {
  iDie = document.getElementById("Gear").value;
  if (iDie > cap) { return; }
  iLeft = iDie;
  }

function setArmor() {
  armorDamage = 0;
  armor = document.getElementById('Armor').value - document.getElementById("aDamage").value;
}

function rollBase(x) {
  setBase(x);
  
  bSucc = 0;
  sSucc = 0;
  iSucc = 0;
  bTrauma = 0;
  iTrauma = 0;

  document.getElementById('result').innerHTML = null;

  if (bDie > 0 || sDie > 0 || iDie > 0) {
    playSound();
    document.getElementById('result').innerHTML = "<button type=\"button\" onclick=\"push(\'" + x + "\')\" style=\"background: red; color: white;\">PUSH</button><br><br>";
  }

  while (bDie && bDie < cap && bDie > 0) {
    bDie--;
    rand = Math.floor(Math.random() * 6) + 1;
    if (rand == 1) {
      document.getElementById('result').innerHTML += "<img src=\"media/" + game + "/trauma.png\" alt=\"\" class=\"" + game + "base\"> ";
      bLeft--;
      bTrauma++;
    } else {
      document.getElementById('result').innerHTML += "<img src=\"media/" + game + "/" + rand + ".png\" alt=\"\" class=\"" + game + "base\"> ";
      if (rand == 6) {
        bLeft--;
        bSucc++;
      }
    }
  }
  document.getElementById('result').innerHTML += "<br>";
}

function rollSkill(x) {
  setSkill(x);
  while (sDie && sDie < cap && sDie > 0) {
    sDie--;
    rand = Math.floor(Math.random() * 6) + 1;
    if (rand == 6) {
      sLeft--;
      sSucc++;
    }
    document.getElementById('result').innerHTML += "<img src=\"media/" + game + "/" + rand + ".png\" alt=\"\" class=\"" + game + "skill\"> ";
  }
  document.getElementById('result').innerHTML += "<br>";
}

function rollItem() {
  setItem();
  while (iDie && iDie < cap && iDie > 0) {
    iDie--;
    rand = Math.floor(Math.random() * 6) + 1;
    if (rand == 1) {
      document.getElementById('result').innerHTML += "<img src=\"media/" + game + "/gear.png\" alt=\"\" class=\"item\"> ";
      iLeft--;
      iTrauma++;
    } else {
      document.getElementById('result').innerHTML += "<img src=\"media/" + game + "/" + rand + ".png\" alt=\"\" class=\"item\"> ";
      if (rand == 6) {
        iLeft--;
        iSucc++;
      }
    }
  }
  document.getElementById('result').innerHTML += "<br>";
}

function rollArmor() {
  setArmor();
  
  if (armor > 0){
    document.getElementById('result').innerHTML = null;
    playSound();
    document.getElementById('result').innerHTML += "<button type=\"button\" onclick=\"damageArmor()\" style=\"background: red; color: white;\">Damaged</button><br><br>";
  }
  
  while (armor > 0) {
    armor--;
    rand = Math.floor(Math.random() * 6) + 1;
    if (rand == 1) {
      document.getElementById('result').innerHTML += "<img src=\"media/" + game + "/gear.png\" alt=\"\" class=\"item\"> ";
      armorDamage++;
    } else {
      document.getElementById('result').innerHTML += "<img src=\"media/" + game + "/" + rand + ".png\" alt=\"\" class=\"item\"> ";
    }
  }
  document.getElementById('result').innerHTML += "<br>";
}

function damageArmor() {
  document.getElementById('result').innerHTML = null;
  while (armorDamage > 0) {
    armorDamage--;
    document.getElementById("aDamage").value++;
  }
}

function damageStat(x) {
  switch (x) {
    case 'STR':
      document.getElementById('tSTR').value++;
      break;
    case 'AGI':
      document.getElementById('tAGI').value++;
      break;
    case 'WIT':
      document.getElementById('tWIT').value++;
      break;
    case 'EMP':
      document.getElementById('tEMP').value++;
      break;
    case '1':
      document.getElementById("tSTR").value++;
      break;
    case '2':
      document.getElementById('tSTR').value++;
      break;
    case '3':
      document.getElementById('tSTR').value++;
      break;
    case '4':
      document.getElementById('tAGI').value++;
      break;
    case '5':
      document.getElementById('tAGI').value++;
      break;
    case '6':
      document.getElementById('tAGI').value++;
      break;
    case '7':
      document.getElementById('tWIT').value++;
      break;
    case '8':
      document.getElementById('tWIT').value++;
      break;
    case '9':
      document.getElementById('tWIT').value++;
      break;
    case '10':
      document.getElementById('tEMP').value++;
      break;
    case '11':
      document.getElementById('tEMP').value++;
      break;
    case '12':
      document.getElementById('tEMP').value++;
      break;
    case '13':
      switch (document.getElementById('Spec').value) {
        case 'STR':
          document.getElementById('tSTR').value++;
          break;
        case 'AGI':
          document.getElementById('tAGI').value++;
          break;
        case 'WIT':
          document.getElementById('tWIT').value++;
          break;
        case 'EMP':
          document.getElementById('tEMP').value++;
          break;
        default:
      }
  }
}

function playSound() {
  "use strict";
  var audio = new Audio("media/effect.mp3");
  audio.play();
}

function roll(x) {
  "use strict";
  setBase(x);
  if (bDie > 0) {
    rollBase(x);
    rollSkill(x);
    rollItem();
  }else{
    document.getElementById("result").innerHTML = null;
  }
}

function push(x) {
  document.getElementById('result').innerHTML = null;

  if (bLeft > 0 || sLeft > 0 || iLeft > 0) {
    damage = 0;
    playSound();

    while (bSucc > 0) {
      bSucc--;
      document.getElementById('result').innerHTML += "<img src=\"media/" + game + "/6.png\" alt=\"\" class=\"" + game + "base\"> ";
    }

    while (sSucc > 0) {
      sSucc--;
      document.getElementById('result').innerHTML += "<img src=\"media/" + game + "/6.png\" alt=\"\" class=\"" + game + "skill\"> ";
    }

    while (iSucc > 0) {
      iSucc--;
      document.getElementById('result').innerHTML += "<img src=\"media/" + game + "/6.png\" alt=\"\" class=\"item\"> ";
    }

    while (bTrauma > 0) {
      bTrauma--;
      damage++;
      document.getElementById('result').innerHTML += "<img src=\"media/" + game + "/trauma.png\" alt=\"\" class=\"" + game + "base\"> ";
    }

    while (iTrauma > 0) {
      iTrauma--;
      document.getElementById('result').innerHTML += "<img src=\"media/" + game + "/gear.png\" alt=\"\" class=\"item\"> ";
    }
    document.getElementById('result').innerHTML += "<br>";

    while (bLeft > 0) {
      bLeft--;
      rand = Math.floor(Math.random() * 6) + 1;
      if (rand == 1) {
        document.getElementById('result').innerHTML += "<img src=\"media/" + game + "/trauma.png\" alt=\"\" class=\"" + game + "base\"> ";
        damage++;
      } else {
        document.getElementById('result').innerHTML += "<img src=\"media/" + game + "/" + rand + ".png\" alt=\"\" class=\"" + game + "base\"> ";
      }
    }
    document.getElementById('result').innerHTML += "<br>";

    while (sLeft > 0) {
      sLeft--;
      rand = Math.floor(Math.random() * 6) + 1;
      document.getElementById('result').innerHTML += "<img src=\"media/" + game + "/" + rand + ".png\" alt=\"\" class=\"" + game + "skill\"> ";
    }
    document.getElementById('result').innerHTML += "<br>";

    while (iLeft > 0) {
      iLeft--;
      rand = Math.floor(Math.random() * 6) + 1;
      if (rand == 1) {
        document.getElementById('result').innerHTML += "<img src=\"media/" + game + "/gear.png\" alt=\"\" class=\"item\"> ";
      } else {
        document.getElementById('result').innerHTML += "<img src=\"media/" + game + "/" + rand + ".png\" alt=\"\" class=\"item\"> ";
      }
    }
    document.getElementById('result').innerHTML += "<br>";
    while (damage > 0) {
      damage--;
      damageStat(x);
    }
  }
}

function rollArtefact(){
  var level = document.getElementById('artlevel').value;
  var temp;
  if (level != ""){ playSound(); }
  if (level == 1){
    temp = Math.floor(Math.random() * 8) + 1;

  }else if (level == 2){
    temp = Math.floor(Math.random() * 10) + 1;

  }else if( level == 3){
    temp = Math.floor(Math.random() * 12) + 1;
  }

  if (temp < 7){
    document.getElementById('result').innerHTML += "<img src=\"media/fbl/" + temp + ".png\" alt=\"\" class=\"art" + level + "\"> ";
  }
  else if (temp == 7){
    document.getElementById('result').innerHTML += "<img src=\"media/fbl/6.png\" alt=\"\" class=\"art" + level + "\"> ";
  }
  else if (temp == 8 || temp == 9){
    document.getElementById('result').innerHTML += "<img src=\"media/fbl/art2.png\" alt=\"\" class=\"art" + level + "\"> ";
  }
  else if (temp == 10 || temp == 11){
    document.getElementById('result').innerHTML += "<img src=\"media/fbl/art3.png\" alt=\"\" class=\"art" + level + "\">";
  }
  else if (temp == 12){
    document.getElementById('result').innerHTML += "<img src=\"media/fbl/art4.png\" alt=\"\" class=\"art" + level + "\"> ";
  }
  document.getElementById('result').innerHTML += "<br>";
}

function flute() {
  var flute = new Audio('media/toot.mp3');
  flute.play();
}