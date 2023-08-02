function capitalizeFirstName(name) {
    const firstLetter = name.charAt(0);
    const capitalizedFirstName = firstLetter === firstLetter.toLowerCase()
      ? firstLetter.toUpperCase() + name.slice(1)
      : name;
  
    return capitalizedFirstName;
  }
  
  // Test cases
  console.log(capitalizeFirstName("john")); // Output: John
  console.log(capitalizeFirstName("Jane")); // Output: Jane (already capitalized)
  console.log(capitalizeFirstName("aLEX")); // Output: ALEX (already capitalized)
  