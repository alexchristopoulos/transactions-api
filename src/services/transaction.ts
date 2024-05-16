
import { datasource } from 'db/dataSource';
import { Account } from 'db/entities/account';
import { Transaction } from 'db/entities/transactions';

export async function transferMoney(sourceAccountId: string, targetAccountId: string, amount: number) {
    
    const {manager} = datasource;
  
    await manager.transaction(async transactionalEntityManager => {
    // Lock source account row
    const sourceAccount = await transactionalEntityManager
      .createQueryBuilder(Account, 'account')
      .setLock('pessimistic_write')
      .where('account.id = :id', { id: sourceAccountId })
      .getOne();

    if (!sourceAccount) {
      throw new Error('Source account not found');
    }

    if (sourceAccount.balance < amount) {
      throw new Error('Insufficient balance in source account');
    }

    // Lock target account row
    const targetAccount = await transactionalEntityManager
      .createQueryBuilder(Account, 'account')
      .setLock('pessimistic_write')
      .where('account.id = :id', { id: targetAccountId })
      .getOne();

    if (!targetAccount) {
      throw new Error('Target account not found');
    }

    // Update balances
    sourceAccount.balance -= amount;
    targetAccount.balance += amount;

    await transactionalEntityManager.save(sourceAccount);
    await transactionalEntityManager.save(targetAccount);

    // Create transaction entry
    const transaction = new Transaction();
    transaction.sourceAccount = sourceAccount.id;
    transaction.targetAccount = targetAccount.id;
    transaction.amount = amount;

    await transactionalEntityManager.save(transaction);
  });
}
