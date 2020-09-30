switch(x) {
    case 'value1':  // if (x === 'value1')
        // ...
        break;  
    case 'value2':  // if (x === 'value2')
        // ...
        break;  
    default:
        //...
}

const name = prompt('Say my name!', '');

switch(name) {
    case '0':
    case 1 + 1:
        alert('Nope!');
        break;
    case 1:
    case null:
        alert('Nah!');
        break;
    case 'Heisenberg':
        alert('You\'re damn right!');
        break;
    default:
        alert('Not even close!');    
}
