function calcVolume(height, width, depth) {
    return height * width * depth;
}

console.log(calcVolume(100, 10, 10)); // 10000

function curriedVolume(height) {
    return function (width) {
        return function (depth) {
            return calcVolume(height, width, depth);
        }
    }
}

console.log(curriedVolume(100)(10)(10)); // 10000

function calcDiscount(discount) {
    return function (price) {
        return price * (1 - discount);
    }
}

const discount5Perc = calcDiscount(0.05);
const discount50Perc = calcDiscount(0.5);

console.log(discount5Perc(100)); // 95
console.log(discount50Perc(100)); // 50
