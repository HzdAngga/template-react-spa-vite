import { Suspense, lazy } from 'react';

import { CTErrorBoundary } from '@/components';
import { CTLayoutAuthLoader } from '@/layouts';

const RegisterPage = lazy(() => import('./Register.page'));

export const Register = () => {
  return (
    <CTErrorBoundary>
      <Suspense fallback={<CTLayoutAuthLoader />}>
        <RegisterPage />
      </Suspense>
    </CTErrorBoundary>
  );
};
