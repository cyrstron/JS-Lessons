const func1 = () => {
    console.log(arguments); // Error!
}

const func2 = (...args) => {
    console.log(arguments);
}

func2('a', 'b', 'c'); // ['a', 'b', 'c']
