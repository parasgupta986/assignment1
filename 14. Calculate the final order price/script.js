const calculateTotalCost = (cart) => {
    return cart.reduce((totalCost, item) => {
      return totalCost + (item.unitPrice * item.quantity);
    }, 0);
  };
  
  // Example usage:
  const cart = [
    { unitPrice: 20, quantity: 3 },
    { unitPrice: 15, quantity: 2 },
    { unitPrice: 10, quantity: 5 }
  ];
  
  const totalCost = calculateTotalCost(cart);
  console.log("Total cost of items in the cart:", totalCost);
  