export interface Payout {
  dateAndTime: string;
  value: string;
  username: string;
  status: string;
}

export interface MetaData {
  page?: number;
  limit: number;
  totalCount: number;
  totalPage?: number;
}