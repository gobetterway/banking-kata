import {BankAccount} from "./BankAccount";

describe('Bank Account', () => {
    it('should accept deposit', () => {
        const bankAccount = new BankAccount()

        bankAccount.makeDeposit(100)

        expect(bankAccount.getBalance()).toBe(100)
    })

    it('should accept withdrawal', () => {
        const bankAccount = new BankAccount()
        bankAccount.makeDeposit(100)

        bankAccount.withdraw(80)

        expect(bankAccount.getBalance()).toBe(20)
    })

    it('should forbid overdraft', () => {
        const bankAccount = new BankAccount()
        bankAccount.makeDeposit(100)

        expect(() => bankAccount.withdraw(120)).toThrow(new Error("Not enough money on account"))
    })

    it('should display statement', () => {
        const bankAccount = new BankAccount()
        bankAccount.makeDeposit(100)
        bankAccount.withdraw(80)
        bankAccount.makeDeposit(10)

        expect(bankAccount.getStatement()).toEqual([
            { amount: 100, balance: 100},
            { amount: -80, balance: 20},
            { amount: 10, balance: 30},
        ])
    })
});
