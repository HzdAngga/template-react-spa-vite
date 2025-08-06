import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';

import { RouteEndpointsCommon } from '@/constants/route-endpoint';

import './404.style.scss';

const Error404: React.FC = () => {
  return (
    <main className="error_404_page">
      <Result
        className="error_404_page__illust"
        status="404"
        title="Oops..."
        subTitle="Sorry, the page you requested does not exist."
        extra={
          <Link to={RouteEndpointsCommon.HOME}>
            <Button type="primary">Back Home</Button>
          </Link>
        }
      />
    </main>
  );
};

export default Error404;
