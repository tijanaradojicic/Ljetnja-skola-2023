let x = 5;
let y = "Test";

const imePrezime = "Marko Markovic";

// imePrezime = "Novo";

// Let ili Var?

function varScoping() {
    var x = 1;
  
    if (true) {
      var x = 2;
      console.log(x); // 2
    }
  
    console.log(x); // 2
  }
  
  function letScoping() {
    let x = 1;
  
    if (true) {
      let x = 2;
      console.log(x); // 2
    }
  
    console.log(x); // 1
  }