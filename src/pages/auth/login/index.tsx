import { Suspense, lazy } from 'react';

import { CTErrorBoundary } from '@/components';
import { CTLayoutAuthLoader } from '@/layouts';

const LoginPage = lazy(() => import('./Login.page'));

export const Login = () => {
  return (
    <CTErrorBoundary>
      <Suspense fallback={<CTLayoutAuthLoader />}>
        <LoginPage />
      </Suspense>
    </CTErrorBoundary>
  );
};
