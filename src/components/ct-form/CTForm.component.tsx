import { Form } from 'antd';
import cx from 'classnames';

import type { CTFormProps } from './CTForm.type';
import './CTForm.style.scss';

const CTFormComponent: React.FC<CTFormProps> = ({
  children,
  className,
  layout = 'vertical',
  ...rest
}) => {
  return (
    <Form className={cx('ct_form', className)} layout={layout} {...rest}>
      {children}
    </Form>
  );
};

export default CTFormComponent;
