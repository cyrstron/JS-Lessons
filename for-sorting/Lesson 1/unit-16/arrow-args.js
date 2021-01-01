const func1 = () => {
    console.log(arguments); // Error!
}

const func2 = (...args) => {
    console.log(args);
}

func2('a', 'b', 'c'); // ['a', 'b', 'c']
