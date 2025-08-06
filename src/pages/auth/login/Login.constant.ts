import type { FormRule } from 'antd';

import type { TComponentSeoMeta } from '@/types/common';

export const kLoginPageMeta: TComponentSeoMeta = {
  descriptionPage: 'Login page for Custom Dashboard',
  titlePage: 'Login || Custom',
};

export enum kLoginFormField {
  EMAIL = 'email',
  PASSWORD = 'password',
}

export const kLoginFormRules: Record<kLoginFormField, FormRule[]> = {
  [kLoginFormField.EMAIL]: [
    {
      type: 'email',
      message: 'Email is not valid.',
      validateTrigger: 'onSubmit',
    },
    {
      required: true,
      message: 'Please insert your email',
      validateTrigger: 'onSubmit',
    },
  ],
  [kLoginFormField.PASSWORD]: [
    {
      required: true,
      message: 'Please insert your password',
      validateTrigger: 'onSubmit',
    },
  ],
};
