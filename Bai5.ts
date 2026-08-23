class BankAccount {
    private balance: number;
  
    constructor(initialBalance: number) {
      this.balance = initialBalance;
    }
    
    deposit(amount: number): void {
      if (amount <= 0) {
        console.log("Số tiền nạp phải lớn hơn 0!");
        return;
      }
      this.balance += amount;
      console.log(`Giao dịch thành công. Đã nạp ${amount}đ. Số dư hiện tại: ${this.balance}đ`);
    }
  
    withdraw(amount: number): void {
      if (amount <= 0) {
        console.log("Số tiền rút phải lớn hơn 0!");
        return;
      }
      if (amount > this.balance) {
        console.log("Giao dịch thất bại. Số dư không đủ!");
        return;
      }
      this.balance -= amount;
      console.log(`Giao dịch thành công. Đã rút ${amount}đ. Số dư hiện tại: ${this.balance}đ`);
    }
  
    getBalance(): number {
      return this.balance;
    }
  }
  
  const myAccount = new BankAccount(50000);
  myAccount.deposit(20000);  
  myAccount.withdraw(100000);
  myAccount.withdraw(30000);  