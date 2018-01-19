import { IAccountData, ITransfer } from './AccountData';

export interface IIotaBasic {
  getReceiveAddress(): Promise<string>;
  sendTransaction(
    receivingAddress: string,
    value: number,
    pow: boolean,
    data?: any
  ): Promise<any>;
  getChecksum(): string;
  getBalance(): Promise<number>;
  getAccountData(): Promise<IAccountData>;
}