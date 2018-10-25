
var bDie;
var sDie;
var iDie;
var rand;
var bSucc;
var sSucc;
var iSucc;
var bTrauma;
var iTrauma;
var bLeft;
var sLeft;
var iLeft;

function playSound(){
  var audio = new Audio('media/effect.mp3');
  audio.play();
}
function roll(x) {
  rollBase(x);
  rollSkill(x);
  rollItem();
}

function rollBase(x) {
  bSucc = 0;
  sSucc = 0;
  iSucc = 0;
  bTrauma = 0;
  iTrauma= 0;
  setBase(x);

  playSound();
  document.getElementById('result').innerHTML = null;
  document.getElementById('result').innerHTML += "<button type=\"button\" onclick=\"push()\" style=\"background: red; color: white;\">PUSH</button><br><br>";

  while (bDie-- && bDie < 30) {
    rand = Math.floor(Math.random() * 6) + 1;
    if (rand == 1) {
      document.getElementById('result').innerHTML += "<img src=\"media/biohazard.png\" alt=\"\" class=\"base\"> ";
      bLeft--;
      bTrauma++;
    } else {
      document.getElementById('result').innerHTML += "<img src=\"media/" + rand + ".png\" alt=\"\" class=\"base\"> ";
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
  while (sDie-- && sDie < 30) {
    rand = Math.floor(Math.random() * 6) + 1;
    if (rand == 6) {
      sLeft--;
      sSucc++;
    }
    document.getElementById('result').innerHTML += "<img src=\"media/" + rand + ".png\" alt=\"\" class=\"skill\"> ";
  }
  document.getElementById('result').innerHTML += "<br>";
}

function rollItem() {
  setItem();

  while (iDie-- && iDie < 30) {
    rand = Math.floor(Math.random() * 6) + 1;
    if (rand == 1) {
      document.getElementById('result').innerHTML += "<img src=\"media/corner-explosion.png\" alt=\"\" class=\"item\"> ";
      iLeft--;
      iTrauma++;
    } else {
      document.getElementById('result').innerHTML += "<img src=\"media/" + rand + ".png\" alt=\"\" class=\"item\"> ";
      if (rand == 6) {
        iLeft--;
        iSucc++;
      }
    }
  }
  document.getElementById('result').innerHTML += "<br>";
}

function rollArmor(){
  setItem();
  playSound();
  document.getElementById('result').innerHTML = null;
  while (iDie-- && iDie < 30) {
    rand = Math.floor(Math.random() * 6) + 1;
    if (rand == 1) {
      document.getElementById('result').innerHTML += "<img src=\"media/corner-explosion.png\" alt=\"\" class=\"item\"> ";
      iLeft--;
      iTrauma++;
    } else {
      document.getElementById('result').innerHTML += "<img src=\"media/" + rand + ".png\" alt=\"\" class=\"item\"> ";
      if (rand == 6) {
        iLeft--;
        iSucc++;
      }
    }
  }
  document.getElementById('result').innerHTML += "<br>";
}

function setBase(x) {
  switch (x) {
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
    case '1':
      bDie = document.getElementById('vSTR').value - document.getElementById('tSTR').value;
      break;
    case '2':
      bDie = document.getElementById('vSTR').value - document.getElementById('tSTR').value;
      break;
    case '3':
      bDie = document.getElementById('vSTR').value - document.getElementById('tSTR').value;
      break;
    case '4':
      bDie = document.getElementById('vAGI').value - document.getElementById('tAGI').value;
      break;
    case '5':
      bDie = document.getElementById('vAGI').value - document.getElementById('tAGI').value;
      break;
    case '6':
      bDie = document.getElementById('vAGI').value - document.getElementById('tAGI').value;
      break;
    case '7':
      bDie = document.getElementById('vWIT').value - document.getElementById('tWIT').value;
      break;
    case '8':
      bDie = document.getElementById('vWIT').value - document.getElementById('tWIT').value;
      break;
    case '9':
      bDie = document.getElementById('vWIT').value - document.getElementById('tWIT').value;
      break;
    case '10':
      bDie = document.getElementById('vEMP').value - document.getElementById('tEMP').value;
      break;
    case '11':
      bDie = document.getElementById('vEMP').value - document.getElementById('tEMP').value;
      break;
    case '12':
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
  bLeft = bDie;
}

function setSkill(x) {
  switch (x) {
    case '1':
      sDie = document.getElementById('1').value;
      break;
    case '2':
      sDie = document.getElementById('2').value;
      break;
    case '3':
      sDie = document.getElementById('3').value;
      break;
    case '4':
      sDie = document.getElementById('4').value;
      break;
    case '5':
      sDie = document.getElementById('5').value;
      break;
    case '6':
      sDie = document.getElementById('6').value;
      break;
    case '7':
      sDie = document.getElementById('7').value;
      break;
    case '8':
      sDie = document.getElementById('8').value;
      break;
    case '9':
      sDie = document.getElementById('9').value;
      break;
    case '10':
      sDie = document.getElementById('10').value;
      break;
    case '11':
      sDie = document.getElementById('11').value;
      break;
    case '12':

      sDie = document.getElementById('12').value;
      break;
    case '13':
      sDie = document.getElementById('13').value;
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
  sDie = +sDie + +document.getElementById('Bonus').value;
  sLeft = sDie;
}

function setItem(x) {
  iDie = document.getElementById('Gear').value;
  iLeft = iDie;
}

function push() {
  document.getElementById('result').innerHTML = null;

  playSound();

  while (bSucc--) {
    document.getElementById('result').innerHTML += "<img src=\"media/6.png\" alt=\"\" class=\"base\"> ";
  }

  while (sSucc--) {
    document.getElementById('result').innerHTML += "<img src=\"media/6.png\" alt=\"\" class=\"skill\"> ";
  }

  while (iSucc--) {
    document.getElementById('result').innerHTML += "<img src=\"media/6.png\" alt=\"\" class=\"item\"> ";
  }

  while (bTrauma--) {
    document.getElementById('result').innerHTML += "<img src=\"media/biohazard.png\" alt=\"\" class=\"base\"> ";
  }

  while (iTrauma--) {
    document.getElementById('result').innerHTML += "<img src=\"media/corner-explosion.png\" alt=\"\" class=\"item\"> ";
  }
  document.getElementById('result').innerHTML += "<br>";

  while (bLeft--) {
    rand = Math.floor(Math.random() * 6) + 1;
    if (rand == 1) {
      document.getElementById('result').innerHTML += "<img src=\"media/biohazard.png\" alt=\"\" class=\"base\"> ";
    } else {
      document.getElementById('result').innerHTML += "<img src=\"media/" + rand + ".png\" alt=\"\" class=\"base\"> ";
    }
  }
  document.getElementById('result').innerHTML += "<br>";

  while (sLeft--) {
    rand = Math.floor(Math.random() * 6) + 1;
    document.getElementById('result').innerHTML += "<img src=\"media/" + rand + ".png\" alt=\"\" class=\"skill\"> ";
  }
  document.getElementById('result').innerHTML += "<br>";

  while (iLeft--) {
    rand = Math.floor(Math.random() * 6) + 1;
    if (rand == 1) {
      document.getElementById('result').innerHTML += "<img src=\"media/corner-explosion.png\" alt=\"\" class=\"item\"> ";
    } else {
      document.getElementById('result').innerHTML += "<img src=\"media/" + rand + ".png\" alt=\"\" class=\"item\"> ";
    }
  }
  document.getElementById('result').innerHTML += "<br>";
}

function betterRandom() {}

function flute() {
  var flute = new Audio('media/toot.mp3');
  flute.play();
}
