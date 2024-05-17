import { Response } from 'express';
import { createAccount, getAccount } from 'services/account';
import { RequestWithBody } from 'utils/request';

export const createAccountController = async (
  req: RequestWithBody<{ balance: number }>,
  res: Response,
) => {
  const { balance } = req.body;
  await createAccount({ balance });

  return res.sendStatus(200);
};

export const getAccountController = async (
  req: RequestWithBody<{ id: string }>,
  res: Response,
) => {
  const { id } = req.body;
  const account = await getAccount({ id });

  return res.status(200).json(account);
};
