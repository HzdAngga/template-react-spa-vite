import { useMemo } from 'react';

import { Button, Form, Input, Select } from 'antd';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { CTForm } from '@/components';
import {
  useCreateUser,
  useGetSingleUser,
  useUpdateUser,
} from '@/hooks/api/things';
import { CTLayoutDashboard } from '@/layouts';
import { TGetSingleUserParams } from '@/types/api/things';

import {
  kUsersFormField,
  kUsersFormPageMeta,
  kUsersFormRules,
} from './UsersForm.constant';
import type { TUsersFormValue } from './UsersForm.type';
import { handleUsersFormError, handleUsersFormSuccess } from './UsersForm.util';

import './UsersForm.style.scss';

const UsersFormPage: React.FC = () => {
  // #region Helper Hooks
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams() as TGetSingleUserParams;
  const [form] = Form.useForm();
  // #endregion

  // #region Variables
  const isEdit = useMemo(
    () => location.pathname.split('/').includes('edit'),
    [location.pathname]
  );
  const makeTitle = useMemo(() => {
    return `${isEdit ? 'Edit' : 'New'} User`;
  }, [isEdit]);
  // #endregion

  if (isEdit) kUsersFormPageMeta.titlePage = 'Edit User || Custom';

  // #region Mutator and Query
  const { mutate: mutateCreateUser, isLoading: isCreating } = useCreateUser({
    onSuccess: () => handleUsersFormSuccess(isEdit, navigate),
    onError: (err) => handleUsersFormError(err),
  });
  const { mutate: mutateUpdateUser, isLoading: isUpdating } = useUpdateUser({
    onSuccess: () => handleUsersFormSuccess(isEdit, navigate),
    onError: (err) => handleUsersFormError(err),
  });

  useGetSingleUser(
    { id: params.id },
    {
      enabled: Boolean(isEdit && params.id),
      onSuccess: (data) => {
        form.setFieldsValue({
          ...data,
          [kUsersFormField.CONFIRM_PASSWORD]: data.password,
        });
      },
    }
  );

  // #endregion

  const isSubmitting = isCreating || isUpdating;

  // #region Event Handler
  const handleSubmit = (value: TUsersFormValue) => {
    const payload = { ...value };

    delete payload.conf_password;

    if (!payload.avatar) {
      payload.avatar = `https://ui-avatars.com/api/?name=${value[
        kUsersFormField.NAME
      ]?.replace(/\s/g, '+')}`;
    }

    if (isEdit) {
      mutateUpdateUser({ id: params.id, payload });
      return;
    }

    mutateCreateUser({ payload });
    return;
  };
  // #endregion

  return (
    <CTLayoutDashboard titlePage={makeTitle} meta={kUsersFormPageMeta}>
      <CTForm form={form} onFinish={handleSubmit}>
        <Form.Item
          name={kUsersFormField.EMAIL}
          label="Email"
          rules={kUsersFormRules.email}>
          <Input placeholder="cecep@koda.so" />
        </Form.Item>
        <Form.Item noStyle>
          <div className="ct_users_form__dual">
            <Form.Item
              name={kUsersFormField.PASSWORD}
              label="Password"
              rules={kUsersFormRules.password}
              style={{ width: '100%' }}>
              <Input.Password />
            </Form.Item>
            <Form.Item
              name={kUsersFormField.CONFIRM_PASSWORD}
              label="Confirm Password"
              rules={kUsersFormRules.conf_password}
              style={{ width: '100%' }}>
              <Input.Password />
            </Form.Item>
          </div>
        </Form.Item>
        <Form.Item
          name={kUsersFormField.NAME}
          rules={kUsersFormRules.name}
          label="Full Name">
          <Input placeholder="Cecep Suracep" />
        </Form.Item>
        <Form.Item
          name={kUsersFormField.ROLE}
          label="Role"
          rules={kUsersFormRules.role}
          initialValue="">
          <Select>
            <Select.Option value="">---Select Role---</Select.Option>
            <Select.Option value="admin">Admin</Select.Option>
            <Select.Option value="customer">Customer</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item noStyle>
          <div className="ct_users_form__actions">
            <Form.Item noStyle>
              <Button
                htmlType="reset"
                type="primary"
                ghost
                disabled={isSubmitting}>
                Reset
              </Button>
            </Form.Item>
            <Form.Item noStyle>
              <Button htmlType="submit" type="primary" loading={isSubmitting}>
                Submit
              </Button>
            </Form.Item>
          </div>
        </Form.Item>
      </CTForm>
    </CTLayoutDashboard>
  );
};

export default UsersFormPage;
