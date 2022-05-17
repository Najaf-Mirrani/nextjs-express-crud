export type user = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
};

export type donation = {
  id: string;
  userId: string;
  amount: number;
  tip: number;
};
