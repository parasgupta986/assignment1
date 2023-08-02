function colorMixer(color1, color2) {
    let resultColor;
  
    switch (color1) {
      case 'red':
        switch (color2) {
          case 'blue':
            resultColor = 'purple';
            break;
          case 'yellow':
            resultColor = 'orange';
            break;
          default:
            resultColor = 'Invalid color combination';
            break;
        }
        break;
      case 'blue':
        switch (color2) {
          case 'red':
            resultColor = 'purple';
            break;
          case 'yellow':
            resultColor = 'green';
            break;
          default:
            resultColor = 'Invalid color combination';
            break;
        }
        break;
      case 'yellow':
        switch (color2) {
          case 'red':
            resultColor = 'orange';
            break;
          case 'blue':
            resultColor = 'green';
            break;
          default:
            resultColor = 'Invalid color combination';
            break;
        }
        break;
      default:
        resultColor = 'Invalid color combination';
        break;
    }
  
    console.log('Resulting color:', resultColor);
  }
  
  // Test cases
  colorMixer('red', 'blue'); // Output: Resulting color: purple
  colorMixer('blue', 'red'); // Output: Resulting color: purple
  colorMixer('red', 'yellow'); // Output: Resulting color: orange
  colorMixer('yellow', 'red'); // Output: Resulting color: orange
  colorMixer('blue', 'yellow'); // Output: Resulting color: green
  colorMixer('yellow', 'blue'); // Output: Resulting color: green
  colorMixer('red', 'green'); // Output: Resulting color: Invalid color combination
  