// Ex: 1

const returnSomething = (string) => {
  return `Something ${string}`;
};
console.log(returnSomething("Is Not Too Good !"));

//Ex: 2

const sumEvenNumbers = (start, stop) => {
  let sum = 0;
  for (let i = start; i <= stop; i++) {
    if (i % 2 == 0) sum += i;
  }
  return sum;
};
console.log(`Sum of even numbers: ${sumEvenNumbers(5, 10)}`);

//Ex: 3

const getTriangleArea = (base, height) => {
  return (base * height) / 2;
};
console.log(`Area of Triangle: ${getTriangleArea(5, 6)}`);

//Ex: 4

const isLessThanHundred = (a, b) => {
  if (a + b < 100) return true;
  return false;
};
console.log(`isLessThanHundred: ${isLessThanHundred(50, 20)}`);

//Ex: 5

const helloBye = (name, isHello) => {
  if (isHello) return `${name}, Hello !`;
  return `${name}, Bye !`;
};
console.log(helloBye("SabaiCode", 1));

//Ex: 6

const palmBattle = (p1, p2) => {
  if (
    (p1 === "rock" && p2 === "scissors") ||
    (p1 === "scissors" && p2 === "paper") ||
    (p1 === "paper" && p2 === "rock")
  )
    return "Player 1 is the winner !";
  else if (
    (p1 === "scissors" && p2 === "rock") ||
    (p1 === "paper" && p2 === "scissors") ||
    (p1 === "rock" && p2 === "paper")
  )
    return "Player 2 is the winner !";
  else return "DRAW !";
};
console.log(palmBattle("paper", "paper"));

//Ex: 7

const findSameValue = (a, b, c) => {
  let count = 0;
  if (a == b || a == c) count++;
  if (b == a || b == c) count++;
  if (c == b || c == a) count++;

  return count;
};
console.log(`Same value: ${findSameValue(2, 2, 4)}`);
