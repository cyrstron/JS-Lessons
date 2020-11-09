function makeFuncs() {
    let funcs = [];
  
    let i = 0;
    while (i < 10) {
      let func = function() {
        console.log( i );
      };
      funcs.push(func);
      i++;
    }
  
    return funcs;
}

const funcs = makeFuncs();

funcs[0](); // 10
funcs[5](); // 10
funcs[9](); // 10

function makeArmy() {
    let funcs = [];
  
    for (let i = 0; i < 10; i++) {
      let func = function() {
        console.log( i );
      };
      funcs.push(func);
    }
  
    return funcs;
}

funcs[0](); // 0
funcs[5](); // 5
funcs[9](); // 9

function makeFuncs() {
    let funcs = [];
  
    let i = 0;
    while (i < 10) {
        
      let func = (function (index) {
          return function () {
            console.log( index );
          }
      })(i);

      funcs.push(func);
      i++;
    }
  
    return funcs;
}

funcs[0](); // 0
funcs[5](); // 5
funcs[9](); // 9