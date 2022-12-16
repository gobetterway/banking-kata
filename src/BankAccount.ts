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
        const format = new Intl.NumberFormat('en-US', {minimumFractionDigits: 2});
        let statement = "| DEBIT | CREDIT | BALANCE |\n"
        for (const operation of this.operations) {
            if (operation.amount > 0) {
                statement += `| ${format.format(operation.amount)} |  | ${format.format(operation.balance)} |\n`
            } else {
                statement += `|  | ${format.format(-operation.amount)} | ${format.format(operation.balance)} |\n`
            }
        }
        return statement
    }
}
