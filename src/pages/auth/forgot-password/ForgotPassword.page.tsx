import { Button, Form, Input } from 'antd';

import { CTForm } from '@/components';
import { CTLayoutAuth } from '@/layouts';

import {
  kForgotPasswordFormField,
  kForgotPasswordPageMeta,
} from './ForgotPassword.constant';

import '@/styles/scss/utils/_padding.scss';
import './ForgotPassword.style.scss';

const ForgotPasswordPage: React.FC = () => {
  const handleSubmit = (value: unknown) => {
    // eslint-disable-next-line no-console
    console.log(value);
  };

  return (
    <CTLayoutAuth
      title="Forgot Password Company"
      subtitle="Please input your email and we will send you link to reset your password."
      meta={kForgotPasswordPageMeta}>
      <CTForm onFinish={handleSubmit} className="ct_forgot_password_page__form">
        <Form.Item name={kForgotPasswordFormField.EMAIL} className="mb--4">
          <Input type="email" placeholder="Email" />
        </Form.Item>
        <Form.Item noStyle>
          <Button type="primary" block htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </CTForm>
    </CTLayoutAuth>
  );
};

export default ForgotPasswordPage;
