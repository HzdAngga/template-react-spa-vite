import { Suspense, lazy } from 'react';

import { CTErrorBoundary } from '@/components';
import { CTLayoutDashboardLoader } from '@/layouts';

const UsersFormPage = lazy(() => import('./UsersForm.page'));

export const UsersForm = () => {
  return (
    <CTErrorBoundary>
      <Suspense fallback={<CTLayoutDashboardLoader />}>
        <UsersFormPage />
      </Suspense>
    </CTErrorBoundary>
  );
};
