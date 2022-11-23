export class BankAccount {
    private balance: number = 0
    private operations: { amount: number, balance: number }[] = []

    makeDeposit(amount: number) {
        this.balance += amount
        this.operations.push({
            amount, balance: this.balance
        })
    }

    withdraw(amount: number) {
        if (amount <= this.balance) {
            this.balance -= amount
            this.operations.push({
                amount: -amount, balance: this.balance
            })
        } else {
            throw new Error("Not enough money on account")
        }
    }

    getBalance() {
        return this.balance;
    }

    getStatement() {
        return this.operations;
    }
}
