const fs = require("fs");

fs.readFile("./input.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    const arr = data.trim().split("\n").map((item) => item.split(" "));
    let valid_password_count = 0

    for (let i = 0; i < arr.length; i++) {
      const element = arr[i]; // individual row from the input
      const valid_letter = element[1].slice(0, 1)
      const password = [...element[2]]

       // this counter keeps track of how many times the letter was repeated
      let counter = 0;
      // iterate over characters in the password
      for (let j = 0; j < password.length; j++) {
        const element = password[j];
        if(element === valid_letter) counter++
      }
      const policy_min = parseInt(element[0].split('-')[0], 10)
      const policy_max = parseInt(element[0].split('-')[1], 10)

      if((counter >= policy_min) && (counter <= policy_max)) {
        valid_password_count++
      }
    }
    console.log({valid_password_count})
  }
});