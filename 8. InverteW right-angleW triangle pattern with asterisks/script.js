function printInvertedRightTriangle(i) {
    for (let row = i; row >= 1; row--) {
      let pattern = "";
  
      // Adding spaces before the asterisks
      for (let space = 0; space < i - row; space++) {
        pattern += " ";
      }
  
      // Adding asterisks
      for (let asterisk = 0; asterisk < row; asterisk++) {
        pattern += "*";
      }
  
      console.log(pattern);
    }
  }
  
  // Test case
  const numberOfRows = 5;
  printInvertedRightTriangle(numberOfRows);
  