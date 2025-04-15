// TODO: Optimize the navigations

import { ConfigProvider } from 'antd';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClientProvider } from 'react-query';
import { RouterProvider } from 'react-router-dom';

import { antdTheme } from '@/configs/antd/antdTheme.config';
import { queryClient } from '@/configs/query/query.config';
import { router } from '@/routes';

function App() {
  return (
    <HelmetProvider>
      <ConfigProvider theme={antdTheme}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ConfigProvider>
    </HelmetProvider>
  );
}

export default App;
