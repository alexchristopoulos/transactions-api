import { Response } from 'express';
import { transferMoney } from 'services/transaction';
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
