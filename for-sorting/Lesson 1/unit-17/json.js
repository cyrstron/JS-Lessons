const jsonString = '{"a": 1}';

const obj = JSON.parse(jsonString); // {a: 1}
const string = JSON.stringify(obj); // '{"a": 1}'

const value = JSON.parse('key: value'); // Error!

try {
    const value = JSON.parse('key: value');
} catch (err) {
    console.log(err); // Error
}
