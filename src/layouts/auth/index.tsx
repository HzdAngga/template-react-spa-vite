import { Suspense, lazy } from 'react';

import { CTErrorBoundary } from '@/components';

import CTLayoutAuthLoader from './CTLayoutAuth.loader';
import type { CTLayoutAuthProps } from './CTLayoutAuth.type';

const CTLayoutAuthComponent = lazy(() => import('./CTLayoutAuth.component'));

const CTLayoutAuth: React.FC<CTLayoutAuthProps> = (props) => {
  return (
    <CTErrorBoundary>
      <Suspense fallback={<CTLayoutAuthLoader />}>
        <CTLayoutAuthComponent {...props} />
      </Suspense>
    </CTErrorBoundary>
  );
};

export { CTLayoutAuth, type CTLayoutAuthProps, CTLayoutAuthLoader };
