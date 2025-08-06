/**
 * Replace the children of CTLayoutDashboard to your desire code.
 * Also remember to remove unnecessary CSS classes in Home.style.scss.
 */

import { CTLayoutDashboard } from '@/layouts';
import { useAuthStore } from '@/stores/auth';

import { kHomePageMeta } from './Home.constant';
import './Home.style.scss';

const HomePage: React.FC = () => {
  const userInfo = useAuthStore((state) => state.userInfo);

  return (
    <CTLayoutDashboard
      breadcrumbProps={{
        isHidden: true,
      }}
      meta={kHomePageMeta}
      titlePage={
        <div>
          <p>Welcome Back,</p>
          <h1>{userInfo?.name}</h1>
        </div>
      }>
      <section className="ct_homepage">
        <div className="card big" />
        <div className="card sma" />
        <div className="card sma" />
        <div className="card sma" />
        <div className="card med" />
      </section>
    </CTLayoutDashboard>
  );
};

export default HomePage;
