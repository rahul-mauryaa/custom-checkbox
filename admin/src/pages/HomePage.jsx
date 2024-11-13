import { Main } from '@strapi/design-system';
import { useIntl } from 'react-intl';

import { getTranslation } from '../utils/getTranslation';
import Checkbox from '../components/Checkbox';

const HomePage = () => {
  const { formatMessage } = useIntl();

  return (
    <Main>
      <h1>Welcome</h1>
      <Checkbox />
    </Main>
  );
};

export { HomePage };
