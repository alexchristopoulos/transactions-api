const messageList: Array<string> = [];

export const calculateMessage = (name?: string) =>
  name ? `Hello ${name}` : `Hello world`;

export const createMessage = (message: string) => messageList.push(message);

export const getAllMessages = () => messageList;
