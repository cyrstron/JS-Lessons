const value1 = 1;
const value2 = 4 - (a = 2); // 2

let a, b, c;
a = b = c = 2 + 2; // BAD!

let value = 2;

value += 2; // 4, same as value = value + 2 
value -= 2; // 2, same as value = value - 2 
value *= 6; // 12, same as value = value * 6 
value /= 3; // 4, same as value = value / 3
value %= 3; // 1, same as value = value % 3
