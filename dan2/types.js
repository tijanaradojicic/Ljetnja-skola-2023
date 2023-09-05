// Undefined
let x;
console.log(x);
console.log(typeof(x))

console.log(typeof("test"));
console.log(typeof(464));
console.log(typeof(true));
console.log(typeof({ime: "Marko"}));
console.log(typeof(function(){let x = 5;}))
// console.log(typeof(null));


let niz = [1, "Programiranje", false, {ime: "Marko"}, function(){let x = 5;}];
console.log(niz);

console.log(5 > 2 ? "Da": "Ne");

let objekat = {
    ime: 'Ivan',
    prezime: 'Popović',
    prosjek: '6.34'
}

console.log(objekat.ime);
console.log(objekat["ime"]);
console.log(objekat["nesto"]);