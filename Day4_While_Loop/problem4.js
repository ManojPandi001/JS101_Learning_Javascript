// Problem 4: Print the average of even numbers from 1 to 100 (both included)
let a = 1;
let sum = 0;
let count = 0;
while (a <= 100) {
  a++;
  if (a % 2 == 0) {
    sum = sum + a;
    count++;
  }
} console.log(sum / count)