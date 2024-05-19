import { Request, Response } from 'express';
import { createAccount, getAccount, getAccountsSummary } from 'services';
import { RequestWithBody } from 'utils/request';

export const createAccountController = async (
  req: RequestWithBody<{ balance: number }>,
  res: Response,
) => {
  const { balance } = req.body;
  const { id, balance: initialBalance } = await createAccount({ balance });

  return res.status(200).json({
    msg: `Created account with id ${id} and initial balance ${initialBalance}`,
  });
};

export const getAccountController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const account = await getAccount({ id });

  return res.status(200).json(account);
};

export const getAccountsSummaryController = async (
  req: Request,
  res: Response,
) => res.status(200).json(await getAccountsSummary());
