/**
 * Direction:
 * Find missing number from the list
 *
 * Expected Result:
 * 8
 */
const numbers = [9, 6, 4, 2, 3, 5, 7, 0, 1];

function result(numbers) {
  // Your Code Here
  let result = 1;

  numbers.sort(function(a, b) {
    return b - a;
  });

  for (let i = 2; i <= numbers.length; i++) {
    result += i;
    result -= numbers[i - 2];
  }

  return result;
}

console.log(result(numbers));
