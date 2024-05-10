import { Request, Response } from 'express';
import {
  calculateMessage,
  createMessage,
  getAllMessages as getAllMessagesService,
} from 'services';
import { RequestWithBody } from 'utils/request';

export const getRoot = (req: Request, res: Response) => {
  const { name } = req.query;

  return res.status(200).json({
    msg: calculateMessage(name?.toString()),
  });
};

export const postMessage = (
  req: RequestWithBody<{ msg: string }>,
  res: Response,
) => {
  createMessage(req.body.msg);
  return res.sendStatus(200);
};

export const getAllMessages = (
  req: RequestWithBody<{ msg: string }>,
  res: Response,
) => res.status(200).json(getAllMessagesService());
