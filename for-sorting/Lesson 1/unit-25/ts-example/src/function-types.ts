function sum(a: number, b: number): number {
    return a + b;
}

const mul = (a: number, b: number): number => a * b;

function sayHi(userName: string, greeting?: string): void {
    console.log(`${greeting ?? 'Hi'}, ${userName}!`)
}

function sayHi2(userName: string, greeting: string = 'Hi'): void {
    console.log(`${greeting}, ${userName}!`)
}

const sumResult = sum(1, 2); // number
