const customerAccount = {
    name: "John Doe",
    balance: 5000,
  
    deposit: function(amount) {
      if (amount > 0) {
        this.balance += amount;
        console.log(`Deposit of Rs. ${amount} successful. New balance: Rs. ${this.balance}`);
      } else {
        console.log("Invalid amount for deposit.");
      }
    },
  
    withdraw: function(amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrawal of Rs. ${amount} successful. New balance: Rs. ${this.balance}`);
      } else {
        console.log("Insufficient balance or invalid amount for withdrawal.");
      }
    }
  };
  
  // Example usage:
  console.log("Initial balance:", customerAccount.balance);
  customerAccount.deposit(2000);
  customerAccount.withdraw(1000);
  customerAccount.withdraw(7000);

  