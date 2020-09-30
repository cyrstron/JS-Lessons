const word = 'protozoologist';

let oNumber = 0;

for (let i = 0, len = word.length; i < len; i += 1) {
    const letter = word[i];

    if (letter !== 'o') continue;

    oNumber =+ 1;
}

alert(`${oNumber} O's in word "${word}"`);
