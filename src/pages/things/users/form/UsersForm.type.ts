import { kUsersFormField } from './UsersForm.constant';

export type TUsersFormValue = {
  [kUsersFormField.AVATAR]: string;
  [kUsersFormField.EMAIL]: string;
  [kUsersFormField.PASSWORD]: string;
  [kUsersFormField.CONFIRM_PASSWORD]?: string;
  [kUsersFormField.NAME]: string;
  [kUsersFormField.ROLE]: 'admin' | 'customer';
};
