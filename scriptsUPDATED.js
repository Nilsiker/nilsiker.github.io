var type;
var result;

class Die {
  constructor(typeAssign) {
    type = typeAssign;
    result = 1;
  }

  function roll(){
    result = Math.rand(6)+1;
  }

  function show(type,result){
    document.getElementById('result').innerHTML += "<img src=\"" + result + "\" alt=\"\" class=\"" + type + "\"> ";
  }
}

function printAll(){

}
