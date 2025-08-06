import cx from 'classnames';

import imgCompanyLogo from '@/assets/images/img__company_logo.svg';
import { CTSeoMeta } from '@/components';

import type { CTLayoutAuthProps } from './CTLayoutAuth.type';

import './CTLayoutAuth.style.scss';

const CTLayoutAuthComponent: React.FC<CTLayoutAuthProps> = ({
  children,
  className,
  isWithoutLogo = false,
  meta,
  subtitle,
  title,
  ...rest
}) => {
  return (
    <main className={cx('ct_layout_auth__main', className)} {...rest}>
      <CTSeoMeta meta={meta} />
      <section className="ct_layout_auth__card">
        {!isWithoutLogo && (
          <img
            src={imgCompanyLogo}
            alt="Company Logo"
            className="ct_layout_auth__logo"
          />
        )}

        <h1 className="ct_layout_auth__title">{title}</h1>
        {subtitle && <p className="ct_layout_auth__subtitle">{subtitle}</p>}

        <div className="ct_layout_auth__inner">{children}</div>
      </section>
    </main>
  );
};

export default CTLayoutAuthComponent;
