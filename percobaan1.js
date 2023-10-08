// Contoh if
if (true) {
  console.log('Mira sedang belajar');
}
console.log('Mira sedang main');


// Contoh if else
if (false) {
  console.log('Lala makan nasi');
} else {
  console.log('Lala makan mie instan');
}


// Contoh nested if
let jalan = 17;

if (jalan < 15) {
  console.log('Lanjut berjalan');
} else if (jalan < 20) {
 console.log('Berhenti sejenak');
} else {
 console.log('BERHENTII');
}


// Contoh Switch case
let hari = "Senin";
switch (hari) {
  case "Selasa":
    console.log("Selamat hari selasa");
    break;
  
  case "Rabu":
    console.log("Selamat hari rabu");
    break;

  default:
    console.log("Tidak ada hari senin");
    break;
}


// Contoh for statement 
loopMinggu: for (let i = 1; i < 2; i++) {
  loopHari: for (let k = 1; k < 4; k++) {
    if(k==3){
      continue loopMinggu
    }
    console.log("minggu" + i +"= hari" + k)
    
  }
}


// Contoh While, do while
// While
let i = 0, n = 5;

while (i <= n) {
    console.log(i);
    i += 1;
}

// do while 
let j = 1;
let o = 10;

do {
    console.log(j);
    i++;
} while(j < o);

// Contoh function
let person = {
  firstName: "Nur Lailatul",
  lastName: "Hidayah",
  class: "A Afternoon",
};
 
(function () {
  console.log(person.firstName + " " + person.lastName + " " + person.class);
})(person);