function doubleCartItemQuantities(cart) {
    // Create a new array to store the corrected quantities
    const correctedCart = [];
  
    // Loop through each item in the cart array
    for (let i = 0; i < cart.length; i++) {
      // Double the quantity of the item and store it in the correctedCart array
      const correctedQuantity = cart[i] * 2;
      correctedCart.push(correctedQuantity);
    }
  
    return correctedCart;
  }
  
  // Example usage:
  const cart = [1, 2, 3, 4, 5];
  const correctedCart = doubleCartItemQuantities(cart);
  console.log(correctedCart); // Output: [2, 4, 6, 8, 10]
  