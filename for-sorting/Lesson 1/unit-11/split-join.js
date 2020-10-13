const string = 'Vasya-Vanya-Dunya-Dusya';

const names = string.split('-');

console.log(names); // ['Vasya', 'Vanya', 'Dunya', 'Dusya']
console.log(names.join('::')); // 'Vasya::Vanya::Dunya::Dusya'
