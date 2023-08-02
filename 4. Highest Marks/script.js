function findHighestMarks(marks) {
    let highestMarks = 0;
  
    for (let i = 0; i < marks.length; i++) {
      highestMarks = marks[i] > highestMarks ? marks[i] : highestMarks;
    }
  
    console.log("Highest marks: ", highestMarks);
  }
  
  // Test case
  const marks = [78, 92, 85, 88, 96];
  findHighestMarks(marks); // Output: Highest marks: 96
  