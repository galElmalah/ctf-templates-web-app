import * as React from 'react';
import * as style from './TemplatePage.module.scss';
import { Page } from '../../Page';
import { Placeholder } from 'semantic-ui-react';

const TemplatePagePlaceholder = () => (
  <Placeholder>
    <Placeholder.Paragraph>
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
    </Placeholder.Paragraph>
    <Placeholder.Paragraph>
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
    </Placeholder.Paragraph>
    <Placeholder.Paragraph>
      <Placeholder.Image square />
    </Placeholder.Paragraph>
  </Placeholder>
);

export const TemplatePage = ({ match }) => {
  return (
    <Page title={`${match.params.templateId} Template`}>
      <TemplatePagePlaceholder />
    </Page>
  );
};
