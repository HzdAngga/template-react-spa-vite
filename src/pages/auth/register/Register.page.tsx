import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';

import { CTForm } from '@/components';
import { RouteEndpointsAuth } from '@/constants/route-endpoint';
import { CTLayoutAuth } from '@/layouts';

import { kRegisterFormField, kRegisterPageMeta } from './Register.constant';

import '@/styles/scss/utils/_padding.scss';
import './Register.style.scss';

const RegisterPage: React.FC = () => {
  const handleSubmit = (value: unknown) => {
    // eslint-disable-next-line no-console
    console.log(value);
  };

  return (
    <CTLayoutAuth
      title="Register Company"
      subtitle="Let's create an account."
      meta={kRegisterPageMeta}>
      <CTForm onFinish={handleSubmit} className="ct_register_page__form">
        <Form.Item name={kRegisterFormField.EMAIL} className="mb--1">
          <Input type="email" placeholder="Email" />
        </Form.Item>
        <Form.Item name={kRegisterFormField.NAME} className="mb--1">
          <Input placeholder="Your name" />
        </Form.Item>
        <div className="ct_register_page__form__dual">
          <Form.Item name={kRegisterFormField.PASSWORD} className="mb--2">
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item
            name={kRegisterFormField.CONFIRM_PASSWORD}
            className="mb--2">
            <Input.Password placeholder="Confirm Password" />
          </Form.Item>
        </div>
        <Form.Item className="mb--2">
          <Link
            className="px--0"
            to={RouteEndpointsAuth.FORGOT_PASSWORD}
            style={{ fontWeight: 600 }}>
            Forgot Password
          </Link>
        </Form.Item>
        <Form.Item className="mb--1">
          <Button type="primary" block htmlType="submit">
            Register
          </Button>
        </Form.Item>
        <Form.Item noStyle>
          <Link to={RouteEndpointsAuth.LOGIN}>
            <Button type="primary" ghost block>
              Login
            </Button>
          </Link>
        </Form.Item>
      </CTForm>
    </CTLayoutAuth>
  );
};

export default RegisterPage;
