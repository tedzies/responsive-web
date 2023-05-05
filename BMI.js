var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("male");
var female = document.getElementById("female");
var form = document.getElementById("form");
var hasil = document.getElementById("hasil");

function calcBMI() {
  var p = [age.value, height.value, weight.value];
  if(male.checked){
    p.push("male");
  }else if(female.checked){
    p.push("female");
  }
  var bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100);

  if(bmi<18.5){
    result = 'Underweight';
  }else if(18.5<=bmi&&bmi<=24.9){
    result = 'Healthy';
  }else if(25<=bmi&&bmi<=29.9){
    result = 'Overweight';
  }else if(30<=bmi&&bmi<=34.9){
    result = 'Obese';
  }else if(35<=bmi){
    result = 'Extremely obese';
  }
  var h1 = document.createElement("h1");
  var h3 = document.createElement("h3");
  var r = document.createTextNode(result);
  var b = document.createTextNode(parseFloat(bmi).toFixed(2));

  h1.appendChild(r);
  h3.appendChild(b);
  hasil.appendChild(h1);
  hasil.appendChild(h3);
  hasil.style.textAlign = 'center';
  hasil.innerHTML += "<a class='d-grid mx-auto btn btn-outline-primary m-3' href='index.html'>Hitung Ulang</a>";
} 