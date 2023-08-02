function calculateTotalBillAndPerPerson(costOfDishes, numberOfPeople) {
    const totalBill = costOfDishes.reduce((acc, cost) => acc + cost, 0);
    const billPerPerson = totalBill / numberOfPeople;
  
    return {
      totalBill: totalBill,
      billPerPerson: billPerPerson,
    };
  }
  
  // Example usage:
  const costOfDishes = [250, 350, 180, 120]; // Costs of individual dishes
  const numberOfPeople = 4; // Number of people sharing the bill
  const billDetails = calculateTotalBillAndPerPerson(costOfDishes, numberOfPeople);
  console.log('Total bill:', billDetails.totalBill);
  console.log('Bill per person:', billDetails.billPerPerson);
   