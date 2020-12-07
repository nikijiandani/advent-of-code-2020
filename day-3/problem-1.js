const fs = require('fs')

fs.readFile('./sample.txt', "utf8", (err, data) => {
  if(err) {
    console.log(err)
  } else {
    const arr = data.trim().split('\n')
    console.log(arr.length)

    let num_of_trees = 0;

    // assuming that all rows are of equal length
    const greatest_row_index = arr[0].length - 1
    console.log({greatest_row_index})

    let current_row = 0; // index of current row in the arr
    let pointer = 0;

    while(current_row <= arr.length - 1) {
      // right 3, 1 down
      const row = arr[current_row]
      console.log({row})

      // increment pointer by 3, bring back to 0 if greater than row length to simulate the repeated pattern

      // if pointer + 3 will be greater than greatest_row_index, calculate new pointer
      if(pointer + 3 > greatest_row_index) {
        const diff = greatest_row_index - pointer
        pointer = 3 - diff
      } else {
        // else add 3 and check current position
        pointer += 3
      }
      // increment current_row on every move
      current_row++ // move down one row

      console.log(row[pointer])
      if(row[pointer] === '#') {
        num_of_trees++
      }
    }
    console.log({num_of_trees})
  }
})

//78
//87
//74