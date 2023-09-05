// console.log(saberi(2,5))

function saberi(a, b) {
    return a + b;
}

function oduzmi(a, b) {
    return a - b;
}

// console.log(saberi(2,5))

function izvrsiOperaciju(funkcija, a, b) {
    return funkcija(a, b);
}

// console.log(izvrsiOperaciju(saberi, 12, 42));
// console.log(izvrsiOperaciju(oduzmi, 12, 42));

let funkcijaSabiranje = saberi;

// console.log(funkcijaSabiranje(1,2));


function saberi(a) {
    return function(b) {
        return a + b;
    }
}
  
var sab3 = saberi(3);
console.log(sab3(5));