import { Helmet } from 'react-helmet-async';

import imgCompanyLogo from '@/assets/images/img__company_logo.svg';

import type { CTSeoMetaProps } from './CTSeoMeta.type';

const CTSeoMeta: React.FC<CTSeoMetaProps> = ({ meta }) => {
  const {
    titlePage = 'Custom Title',
    descriptionPage = 'Custom Template for React and written with TypeScript.',
  } = meta || {};

  return (
    <Helmet>
      <title>{titlePage}</title>
      <meta name="description" content={descriptionPage} />
      <link
        rel="preload"
        as="image"
        href={imgCompanyLogo}
        type="image/svg+xml"
      />
      {/** Please add more meta if needed */}
    </Helmet>
  );
};

export default CTSeoMeta;
