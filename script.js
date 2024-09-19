var ism = prompt("Ismingizni kiriting");

var yil = +prompt("Joriy yilni kiriting");
if (isNaN(yil)) {
  yil = +prompt("Joriy yilni kiriting");
}

var tugilganYil = +prompt("Tug'ilgan yilingizni kiriting");
if (isNaN(tugilganYil)) {
  tugilganYil = +prompt("Joriy yilni kiriting");
}

alert(ism + " sizning yoshingiz " + (yil - tugilganYil) + " da");

var misolSoni = +prompt("Ishlamoqchi bo'lgan misollar sonini kiriting");

if (isNaN(misolSoni)) {
  misolSoni = +prompt("Ishlamoqchi bo'lgan misollar sonini kiriting");
}

var misolJavob = 0;
var misolTJ = 0;

for (let i = 0; i < misolSoni; i++) {
  let a = Math.round((Math.random()*(10-1))+1);
  let b = Math.round((Math.random()*(10-1))+1);
  let ishora = Math.round((Math.random() * (4 - 1)) + 1);

  console.log("a="+a);
  console.log("b="+b);
  console.log("ishora="+ishora);

  let ishoraMatni;
  switch (ishora) {
    case 1:
      misolJavob = +prompt(a + "+" + b + "=");
      misolTJ = plus(a, b);
      alert(
        misolJavob === misolTJ
          ? "Siznin javobingiz to'g'ri. Javob " + misolTJ
          : "Siznin javobingiz noto'g'ri. To'g'ri javob " + misolTJ
      );
      break;
    case 2:
      misolJavob = +prompt(a + "-" + b + "=");
      misolTJ = minus(a, b);
      alert(
        misolJavob === misolTJ
          ? "Siznin javobingiz to'g'ri. Javob " + misolTJ
          : "Siznin javobingiz noto'g'ri. To'g'ri javob " + misolTJ
      );
      break;
    case 3:
      misolJavob = +prompt(a + "*" + b + "=");
      misolTJ = kupaytirish(a, b);
      alert(
        misolJavob === misolTJ
          ? "Siznin javobingiz to'g'ri. Javob " + misolTJ
          : "Siznin javobingiz noto'g'ri. To'g'ri javob " + misolTJ
      );
      break;
    case 4:
      misolJavob = +prompt(a + "/" + b + "=");
      misolTJ = bulish(a, b);
      alert(
        misolJavob === misolTJ
          ? "Siznin javobingiz to'g'ri. Javob " + misolTJ
          : "Siznin javobingiz noto'g'ri. To'g'ri javob " + misolTJ
      );
      break;
    default:
      break;
  }
}

function plus(a, b) {
  return a + b;
}

function minus(a, b) {
  return a - b;
}
function kupaytirish(a, b) {
  return a * b;
}
function bulish(a, b) {
  return a / b;
}
