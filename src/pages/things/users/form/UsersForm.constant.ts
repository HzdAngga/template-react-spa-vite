import type { FormRule } from 'antd';

import type { TComponentSeoMeta } from '@/types/common';

export const kUsersFormPageMeta: TComponentSeoMeta = {
  descriptionPage: 'User form page for Custom Dashboard',
  titlePage: 'Add New User || Custom',
};

export enum kUsersFormField {
  AVATAR = 'avatar',
  EMAIL = 'email',
  PASSWORD = 'password',
  CONFIRM_PASSWORD = 'conf_password',
  NAME = 'name',
  ROLE = 'role',
}

export const kUsersFormRules: Record<kUsersFormField, FormRule[]> = {
  [kUsersFormField.AVATAR]: [],
  [kUsersFormField.EMAIL]: [
    {
      type: 'email',
      message: 'Email is not valid.',
      validateTrigger: 'onSubmit',
    },
    {
      required: true,
      message: 'Email is required.',
      validateTrigger: 'onSubmit',
    },
  ],
  [kUsersFormField.PASSWORD]: [
    {
      required: true,
      message: 'Password is required',
      validateTrigger: 'onSubmit',
    },
    {
      min: 4,
      message: 'Password minimal 4 characters.',
      validateTrigger: 'onSubmit',
    },
  ],
  [kUsersFormField.CONFIRM_PASSWORD]: [
    {
      required: true,
      message: 'Please confirm your password.',
      validateTrigger: 'onSubmit',
    },
    ({ getFieldValue }) => ({
      validator: (_, value) => {
        if (!value || getFieldValue(kUsersFormField.PASSWORD) === value)
          return Promise.resolve();

        return Promise.reject(new Error("Password doesn't match!"));
      },
      validateTrigger: 'onSubmit',
    }),
  ],
  [kUsersFormField.NAME]: [
    {
      required: true,
      message: 'Full name is required.',
      validateTrigger: 'onSubmit',
    },
  ],
  [kUsersFormField.ROLE]: [{ required: true, message: 'Role is required.' }],
};
