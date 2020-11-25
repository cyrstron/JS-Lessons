const elems = document.querySelectorAll('.elem');

console.log(elems.forEach); // undefined

Array.prototype.forEach.call(elem, function (elem) {
    console.log(elem); 
}); // it works!

Array.prototype.forEach.call('Hello', function (elem) {
    console.log(elem); // 'H', 'e', 'l', 'l', 'o'
});
