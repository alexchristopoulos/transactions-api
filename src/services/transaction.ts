import { datasource } from 'db/dataSource';
import { Account, Transaction } from 'db/entities';
import { BadRequest, NotFoundError } from 'utils/errors';

type TransferMoneyParams = {
  sourceAccountId: string;
  targetAccountId: string;
  amount: number;
};

const { manager } = datasource;

export const getTransactions = async () => await manager.find(Transaction);

export const transferMoney = async ({
  amount,
  sourceAccountId,
  targetAccountId,
}: TransferMoneyParams) => {
  await manager.transaction(async (transactionalEntityManager) => {
    const sourceAccount = await transactionalEntityManager
      .createQueryBuilder(Account, 'account')
      .setLock('pessimistic_write')
      .where('account.id = :id', { id: sourceAccountId })
      .getOne();

    if (!sourceAccount) {
      throw new NotFoundError(
        'Source account not found',
        'transfer.sourceAccount.notFound',
      );
    }

    if (sourceAccount.balance < amount) {
      throw new BadRequest(
        'Insufficient balance in source account',
        'transfer.sourceAccount.insufficientBalance',
      );
    }

    const targetAccount = await transactionalEntityManager
      .createQueryBuilder(Account, 'account')
      .setLock('pessimistic_write')
      .where('account.id = :id', { id: targetAccountId })
      .getOne();

    if (!targetAccount) {
      throw new NotFoundError(
        'Target account not found',
        'transfer.targetAccount.notFound',
      );
    }

    sourceAccount.balance = Number(sourceAccount.balance);
    targetAccount.balance = Number(targetAccount.balance);

    sourceAccount.balance -= amount;
    targetAccount.balance += amount;

    await transactionalEntityManager.save(sourceAccount);
    await transactionalEntityManager.save(targetAccount);

    const transaction = new Transaction();
    transaction.sourceAccount = sourceAccount.id;
    transaction.targetAccount = targetAccount.id;
    transaction.amount = amount;

    await transactionalEntityManager.save(transaction);
  });
};
