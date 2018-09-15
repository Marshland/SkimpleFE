export interface User {
  id: string;
  email: string;
  token: string;
  expireIn: number;
  isAdmin: boolean;
}
