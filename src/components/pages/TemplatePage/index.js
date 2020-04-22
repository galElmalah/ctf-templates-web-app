import * as React from 'react';
import { Page } from '../../Page';
import { Placeholder } from 'semantic-ui-react';
import { Label, Segment } from 'semantic-ui-react';
import { CodeArea } from '../../CodeArea';

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
const _templateData = {
  name: 'docs-viewer',
  namespace: 'gal',
  description: 'a template to generate wix-docs viewers',
  templateStructure: {
    '{{someKey}}': 'some content',
  },
};

export const TemplatePage = ({ match }) => {
  const [templateData, setTemplateData] = React.useState();
  React.useEffect(() => {
    setTimeout(() => {
      setTemplateData(_templateData);
    }, 1000);
  }, []);

  return (
    <Page title={`${match.params.templateId} Template`}>
      {templateData ? (
        <TemplateDetails template={templateData} />
      ) : (
        <TemplatePagePlaceholder />
      )}
    </Page>
  );
};

const TemplateDetails = ({ template }) => {
  return (
    <>
      <Label>{`@${template.namespace}`}</Label>
      <Label>{template.name}</Label>
      <CodeArea
        title={'create this template with the following command'}
        code={`ctf i @${template.namespace}/${template.name}`}
      />
      <Segment>{template.description}</Segment>
    </>
  );
};
