let value;

if (true) {
  value = 1;
} else {
  value = 2;
}

const value1 = true ? 1 : 2; // 1
const value2 = false ? 1 : 2; // 2

const isPasswordValid = true;

const greeting = isPasswordValid ? 'Hello!' : 'Go away!';

const value3 = 10 > 2 ? '10 is bigger!' : '2 is bigger!';

const age = 18;
const greeting = (age < 14) ? 'Hey kid!' :
  (age < 18) ? 'Hello young man!' :
  (age < 100) ? 'Good day sir!' :
  'You can\'t be serious!'; // Don't do that!
