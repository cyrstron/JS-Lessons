function printValues(value) {
    if (typeof value !== 'object') {
        console.log(value);
        return;
    } 
    
    for (let key in value) {
        printValues(value[key]);
    }
}

printValues({
    a: 1,
    b: {
      c: 2,
      d: 3,
    },
}); // 1, 2, 3
