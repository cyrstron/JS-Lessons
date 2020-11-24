function func() {
    console.log(arguments);
    console.log(arguments.length);
    console.log(Array.isArray(arguments));
}

func('a');
// ['a']
// 1
// false

func('a', 'b', 'c'); 
// ['a', 'b', 'c']
// 3
// false
