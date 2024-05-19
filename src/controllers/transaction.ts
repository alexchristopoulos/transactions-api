import { Request, Response } from 'express';
import { getTransactions, transferMoney } from 'services';
import { RequestWithBody } from 'utils/request';

export const transactionController = async (
  req: RequestWithBody<{
    amount: number;
    sourceAccountId: string;
    targetAccountId: string;
  }>,
  res: Response,
) => {
  const { amount, sourceAccountId, targetAccountId } = req.body;
  await transferMoney({
    amount,
    sourceAccountId,
    targetAccountId,
  });

  return res.status(200).json({
    msg: `Transferred ${amount} from ${sourceAccountId} to ${targetAccountId} successfully`,
  });
};

export const getTransactionsController = async (req: Request, res: Response) =>
  res.status(200).json(await getTransactions());
