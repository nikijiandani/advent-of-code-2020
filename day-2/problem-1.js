const fs = require("fs");

fs.readFile("./input.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
    // const arr = data.split("\n").map((item) => item.split(" "));

    // for (item in arr) {
    //   console.log(item);
    // }
  }
});
