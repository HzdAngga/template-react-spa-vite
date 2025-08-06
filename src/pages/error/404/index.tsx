import { Suspense, lazy } from 'react';

const Error404Page = lazy(() => import('./404.page'));

export const Error404 = () => {
  return (
    <Suspense fallback={<h1>Error occured.</h1>}>
      <Error404Page />
    </Suspense>
  );
};
