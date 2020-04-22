import * as React from 'react';
import { Page } from '../../Page';
import { Loader } from 'semantic-ui-react';
import { methods } from '../../../API';
import { useApi } from '../../../hooks/useApi';
import { TemplatesGroup } from './TemplatesGroup';

export const MyTemplatesPage = (props) => {
  const { isFetching, hasError, data: templates } = useApi(
    methods.fetchUserTemplates,
    { user: 'gal' },
    [],
  );
  return (
    <Page title={'My templates'}>
      {isFetching ? (
        <Loader active size='large'>
          Loading
        </Loader>
      ) : (
        <TemplatesGroup templates={templates} />
      )}
    </Page>
  );
};
