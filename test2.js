/**
 * Direction:
 * Remove duplicated data from array
 * 
 * Expected Result:
 * [1, 2, 3, 4, 5]
 */
const data = [1, 4, 2, 3, 5, 3, 2, 4];

function result(data) {
  // Your Code Here
  for (let i = 0; i < data.length; i++) {
    let swapped = false;
    for (let j = 0; j < data.length - 1; j++) {
      if (data[j] > data[j + 1]) {
        swapped = true;
        let temp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = temp;
      };
    }
    if (swapped !== true) break;
  }

  let result = [];
  data.forEach(element => {
    if (!result.includes(element)) {
      result.push(element)
    }
  });
  
  return result;
}

console.log(result(data));
