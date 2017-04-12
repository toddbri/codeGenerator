var past=[]

function genCode(){
  var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var code ='';
  for (var i=0;i<=7;i++){
    var r = getRandomIntInclusive(0,25);
    if (i===3 || i===5){
      code +="-";
    }
    code += alphabet[r];
  }

  function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
  return code;
}

for (var x =0;x<100000;x++){
  var temp = genCode();
  if (past.indexOf(temp) != -1){
    console.log("found a colission");
  } else {
    past.push(temp);
  }

}
