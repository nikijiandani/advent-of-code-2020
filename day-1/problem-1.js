const fs = require("fs");

fs.readFile("./input.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  // trim the data for whitespace then split the string of numbers
  // into an array of integers
  const arr = data
    .trim()
    .split("\n")
    .map((item) => parseInt(item, 10));

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === 2020) {
        console.log(arr[i] * arr[j]);
        return;
      }
    }
  }
});
