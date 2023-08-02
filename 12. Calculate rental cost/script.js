function calculateRentalCost(daysRented, carType) {
    let rentalCost;
  
    switch (carType.toLowerCase()) {
      case 'economy':
        rentalCost = 4000;
        break;
      case 'midsize':
        rentalCost = 15000;
        break;
      case 'luxury':
        rentalCost = 25000;
        break;
      default:
        return 'Invalid car type';
    }
  
    return rentalCost * daysRented;
  }
  
  // Example usage:
  const daysRented = 5;
  const carType = 'luxury';
  const totalCost = calculateRentalCost(daysRented, carType);
  console.log(`Total cost for renting a ${carType} car for ${daysRented} days is Rs. ${totalCost}/-`);
  
  
