function roll(x) {

  document.getElementById('result').innerHTML = null;

  var audio = new Audio('media/effect.mp3');
  var bDie = 0;
  var sDie = 0;
  var iDie = document.getElementById('Gear').value;
  var rand = 0;



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
      sDie = document.getElementById('1').value;
      break;
    case '2':
      bDie = document.getElementById('vSTR').value - document.getElementById('tSTR').value;
      sDie = document.getElementById('2').value;
      break;
    case '3':
      bDie = document.getElementById('vSTR').value - document.getElementById('tSTR').value;
      sDie = document.getElementById('3').value;
      break;
    case '4':
      bDie = document.getElementById('vAGI').value - document.getElementById('tAGI').value;
      sDie = document.getElementById('4').value;
      break;
    case '5':
      bDie = document.getElementById('vAGI').value - document.getElementById('tAGI').value;
      sDie = document.getElementById('5').value;
      break;
    case '6':
      bDie = document.getElementById('vAGI').value - document.getElementById('tAGI').value;
      sDie = document.getElementById('6').value;
      break;
    case '7':
      bDie = document.getElementById('vWIT').value - document.getElementById('tWIT').value;
      sDie = document.getElementById('7').value;
      break;
    case '8':
      bDie = document.getElementById('vWIT').value - document.getElementById('tWIT').value;
      sDie = document.getElementById('8').value;
      break;
    case '9':
      bDie = document.getElementById('vWIT').value - document.getElementById('tWIT').value;
      sDie = document.getElementById('9').value;
      break;
    case '10':
      bDie = document.getElementById('vEMP').value - document.getElementById('tEMP').value;
      sDie = document.getElementById('10').value;
      break;
    case '11':
      bDie = document.getElementById('vEMP').value - document.getElementById('tEMP').value;
      sDie = document.getElementById('11').value;
      break;
    case '12':
      bDie = document.getElementById('vEMP').value - document.getElementById('tEMP').value;
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

  while (bDie-- && bDie < 30) {
    rand = Math.floor(Math.random() * 6) + 1;
    if (rand == 1) {
      document.getElementById('result').innerHTML += "<img src=\"media/biohazard.png\" alt=\"\" class=\"base\"> ";
    } else {
      document.getElementById('result').innerHTML += "<img src=\"media/" + rand + ".png\" alt=\"\" class=\"base\"> ";
    }
  }

  document.getElementById('result').innerHTML += "<br>";

  sDie = +sDie + +document.getElementById('Bonus').value;
  while (sDie-- && sDie < 30) {
    rand = Math.floor(Math.random() * 6) + 1;
    document.getElementById('result').innerHTML += "<img src=\"media/" + rand + ".png\" alt=\"\" class=\"skill\"> ";
  }
  audio.play();
  document.getElementById('result').innerHTML += "<br>";

  while (iDie-- && iDie < 30) {
    rand = Math.floor(Math.random() * 6) + 1;
    if (rand == 1) {
      document.getElementById('result').innerHTML += "<img src=\"media/corner-explosion.png\" alt=\"\" class=\"item\"> ";
    } else {
      document.getElementById('result').innerHTML += "<img src=\"media/" + rand + ".png\" alt=\"\" class=\"item\"> ";
    }
  }
}

function betterRandom() {
}

function flute() {
  var flute = new Audio('media/toot.mp3');
  flute.play();
}
