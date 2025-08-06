import { Suspense, lazy } from 'react';

import { CTErrorBoundary } from '@/components';
import { CTLayoutDashboardLoader } from '@/layouts';

const UsersPage = lazy(() => import('./Users.page'));

export const Users = () => {
  return (
    <CTErrorBoundary>
      <Suspense fallback={<CTLayoutDashboardLoader />}>
        <UsersPage />
      </Suspense>
    </CTErrorBoundary>
  );
};
