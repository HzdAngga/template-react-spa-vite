import { Skeleton } from 'antd';

import '@/styles/scss/utils/_margin.scss';
import './CTLayoutAuth.style.scss';

const CTLayoutAuthLoader: React.FC = () => {
  return (
    <main className="ct_layout_auth__main">
      <section className="ct_layout_auth__card">
        <Skeleton.Input size="large" className="mb--2" />
        <Skeleton.Input size="large" className="mb--1" />
        <Skeleton.Input size="small" className="mb--2" />
        <Skeleton.Input className="mb--1" />
        <Skeleton.Input />
      </section>
    </main>
  );
};

export default CTLayoutAuthLoader;
