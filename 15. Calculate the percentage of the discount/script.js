const calculatePercentageDiscount = (originalPrice, discountedPrice) => {
    const discountAmount = originalPrice - discountedPrice;
    const percentageDiscount = (discountAmount / originalPrice) * 100;
    return parseFloat(percentageDiscount.toFixed(2)); // Round off to two decimal places
  };
  
  // Example usage:
  const originalPrice = 1000;
  const discountedPrice = 800;
  const percentageDiscount = calculatePercentageDiscount(originalPrice, discountedPrice);
  console.log("Percentage discount:", percentageDiscount + "%");
  