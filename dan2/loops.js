let array = [54, 23, 22, 356, 75, 2];

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

for (let num of array) 
    console.log(num);

// let objekat = {
//     ime: 'Ivan',
//     prezime: 'Popović',
//     prosjek: '6.34'
// }

// for (key in objekat){
//     console.log(key);
//     console.log(objekat[key]);
// }


let cars = ["Auto 1", "Auto 2", "Auto 3", "Auto 4", "Auto 5"];
for (i = 0, len = cars.length, text = ""; i < len; i++) {
    text += cars[i] + " ... ";
}
// console.log(text);

for (var i = 0, text = ""; i < 10; i++) {
    if (i === 3) {
        break;
    }
    text += "The number is " + i + "\n";
}
  
// console.log(text);
  
  
for (var i = 0, text = ""; i < 10; i++) {
    if (i === 3) {
        continue;
    }   
    text += "The number is " + i + "\n";
}
// console.log(text);

// for (;i < cars.length;i++) {} - ako je i vec definisano prije
// for (;i < cars.length;) { i++ } - ne preporucuje se
// for (;;) - infinite loop