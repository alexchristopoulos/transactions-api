import { datasource } from "db/dataSource";
import { Account } from "db/entities/account"

type CreateAccountParams = {
    balance: number
}

type GetAccountParams = {
    id: string
}

const {manager} = datasource;

export const createAccount = async ({balance}: CreateAccountParams) => {
    const account = new Account();
    account.balance = balance;
    
    await manager.save(account);
};

export const getAccount = async ({id}: GetAccountParams) =>  await manager.findOne(Account, {where: {
        id: id
    }})
