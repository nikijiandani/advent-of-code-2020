const fs = require("fs");

// PROBLEM: Find the two entries that sum to 2020; what do you get if you multiply them together?

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
