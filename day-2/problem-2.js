const fs = require("fs");

fs.readFile("./input.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    const arr = data.trim().split("\n").map((item) => item.split(" "));
    let valid_password_count = 0

    for (let i = 0; i < arr.length; i++) {
      const element = arr[i]; // individual row from the input 
      const letter_to_validate = element[1].slice(0, 1)
      const password = element[2]

      // subtract 1 from the positions to compensate for no concept of index zero!
      const position1 = (parseInt(element[0].split('-')[0], 10) - 1)
      const position2 = (parseInt(element[0].split('-')[1], 10) - 1)

      //check the first position from the policy
      if(password[position1] === letter_to_validate) {
        // if the position is valid, check the second position
        if(password[position2] !== letter_to_validate) {
          // if the second position is not the same, the password is valid!
          valid_password_count++
        }
      } else {
        if(password[position2] === letter_to_validate) {
          valid_password_count++
        }
      }
    }
    console.log({valid_password_count})
  }
});

// 403