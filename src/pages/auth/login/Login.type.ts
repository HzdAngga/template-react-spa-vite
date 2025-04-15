import { kLoginFormField } from './Login.constant';

export type TloginFormValue = {
  [kLoginFormField.EMAIL]: string;
  [kLoginFormField.PASSWORD]: string;
};
