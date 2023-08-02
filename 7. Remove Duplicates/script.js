function removeDuplicateItems(cart) {
    const uniqueItems = [];
    const itemIds = new Set();
  
    for (const item of cart) {
      if (!itemIds.has(item.id)) {
        uniqueItems.push(item);
        itemIds.add(item.id);
      }
    }
  
    return uniqueItems;
  }
  
  // Test case
  const shoppingCart = [
    { id: 1, name: "Shirt", price: 20 },
    { id: 2, name: "Shoes", price: 50 },
    { id: 1, name: "Shirt", price: 20 }, // Duplicate item
    { id: 3, name: "Hat", price: 15 },
    { id: 2, name: "Shoes", price: 50 }, // Duplicate item
    { id: 4, name: "Jeans", price: 30 },
  ];
  
  const uniqueCart = removeDuplicateItems(shoppingCart);
  console.log(uniqueCart);
  