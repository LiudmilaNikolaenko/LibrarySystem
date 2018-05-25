import { Checkout } from './index';

export interface Student {
  uuid: string;
  email: string;
  gender: string;
  checkouts: Checkout[];
  given_name: string;
  family_name: string;
}

