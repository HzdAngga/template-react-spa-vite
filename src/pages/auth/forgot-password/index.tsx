import { Suspense, lazy } from 'react';

import { CTErrorBoundary } from '@/components';
import { CTLayoutAuthLoader } from '@/layouts';

const ForgotPasswordPage = lazy(() => import('./ForgotPassword.page'));

export const ForgotPassword = () => {
  return (
    <CTErrorBoundary>
      <Suspense fallback={<CTLayoutAuthLoader />}>
        <ForgotPasswordPage />
      </Suspense>
    </CTErrorBoundary>
  );
};
