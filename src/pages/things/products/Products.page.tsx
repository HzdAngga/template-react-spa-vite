import { CTLayoutDashboard } from '@/layouts';

import { kProductsPageMeta } from './Products.constant';

const ProductsPage: React.FC = () => {
  return (
    <CTLayoutDashboard meta={kProductsPageMeta} titlePage="Products">
      <h2>This is an example of products page.</h2>
      <p>
        I create this as a placeholder. You can delete this page if unnecessary.
      </p>
    </CTLayoutDashboard>
  );
};

export default ProductsPage;
