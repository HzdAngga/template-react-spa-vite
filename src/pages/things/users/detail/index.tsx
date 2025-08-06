import { Suspense, lazy } from 'react';

import { CTErrorBoundary } from '@/components';
import { CTLayoutDashboardLoader } from '@/layouts';

const UsersDetailPage = lazy(() => import('./UsersDetail.page'));

export const UsersDetail = () => {
  return (
    <CTErrorBoundary>
      <Suspense fallback={<CTLayoutDashboardLoader />}>
        <UsersDetailPage />
      </Suspense>
    </CTErrorBoundary>
  );
};
