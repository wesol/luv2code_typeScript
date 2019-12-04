let array: string [] = ["A", "B", 'C'];
let numbers: number [] = [1, 2, 2.1, 3.34];

numbers.push(90);

for (let s of array) {
    console.log(s);
}

let total: number = 0;

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    total += numbers[i];
}

let average : number;

average = total / numbers.length;

console.log("average is " + average)