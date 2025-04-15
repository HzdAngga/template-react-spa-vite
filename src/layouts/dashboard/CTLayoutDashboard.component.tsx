import { useMemo } from 'react';

import { Breadcrumb, Button, Layout } from 'antd';
import cx from 'classnames';
import { useLocation } from 'react-router-dom';

import { CTSeoMeta } from '@/components';
import { useComponentStore } from '@/stores/common';
import { capitalize } from '@/utils/string.utils';

import { CTLayoutDashboardProps } from './CTLayoutDashboard.type';
import {
  CTLayoutDashboardHeader,
  CTLayoutDashboardSidebar,
} from './subcomponent';

import '@/styles/scss/utils/_margin.scss';
import './CTLayoutDashboard.style.scss';

const CTLayoutDashboardComponent: React.FC<CTLayoutDashboardProps> = ({
  actionButtonProps,
  breadcrumbProps,
  children,
  className,
  contentProps,
  meta,
  titlePage,
  ...rest
}) => {
  const { pathname } = useLocation();

  const paths = useMemo(() => pathname.split('/'), [pathname]);

  const isSidebarCollapsed = useComponentStore(
    (state) => state.isSidebarCollapsed
  );

  const makeTitle = useMemo(() => {
    if (!titlePage) return null;
    if (typeof titlePage === 'string')
      return (
        <h1 className="ct_layout_dashboard__content__header__title">
          {titlePage}
        </h1>
      );

    return titlePage;
  }, [titlePage]);

  return (
    <Layout className={cx('ct_layout_dashboard', className)} {...rest}>
      <CTSeoMeta meta={meta} />

      <CTLayoutDashboardHeader />
      <Layout hasSider>
        <CTLayoutDashboardSidebar />
        <Layout
          className={cx(
            'ct_layout_dashboard__inner',
            !isSidebarCollapsed && 'ct_layout_dashboard__inner--expanded'
          )}>
          {!breadcrumbProps?.isHidden && (
            <Breadcrumb
              className={cx(
                'ct_layout_dashboard__breadcrumb',
                breadcrumbProps?.className
              )}
              items={paths.map((path) => ({
                title: capitalize(path || 'home'),
              }))}
              {...breadcrumbProps}
            />
          )}

          <Layout.Content
            className={cx(
              'ct_layout_dashboard__content',
              contentProps?.className
            )}
            {...contentProps}>
            <div className="ct_layout_dashboard__content__header">
              {makeTitle}
              {Array.isArray(actionButtonProps) &&
                actionButtonProps?.length > 0 && (
                  <>
                    <span style={{ flex: 'auto' }} />
                    {actionButtonProps?.map((prop, idx) => (
                      <Button
                        key={idx}
                        className={cx(
                          'ct_layout_dashboard__content__header__button',
                          prop?.className,
                          idx < actionButtonProps?.length - 1 && 'mr--2'
                        )}
                        style={{
                          maxWidth: !prop?.block ? 120 : '',
                          ...prop?.style,
                        }}
                        type={prop?.type || 'primary'}
                        {...prop}>
                        {prop?.children}
                      </Button>
                    ))}
                  </>
                )}
            </div>
            {children}
          </Layout.Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default CTLayoutDashboardComponent;
