import * as React from 'react';
import { Page } from '../../Page';
import { Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
const items = [
  {
    header: 'docs-viewer',
    description: 'create a template of the viewer needed for the wix docs team',
    meta: 'v1.0.1',
  },
  {
    header: 'docs-component',
    description: 'create a template for the component used by wix docs',
    meta: 'v2.0.1',
  },
  {
    header: 'docs-viewer',
    description: 'create a template of the viewer needed for the wix docs team',
    meta: 'v1.0.1',
  },
  {
    header: 'docs-component',
    description: 'create a template for the component used by wix docs',
    meta: 'v2.0.1',
  },
  {
    header: 'docs-viewer',
    description: 'create a template of the viewer needed for the wix docs team',
    meta: 'v1.0.1',
  },
  {
    header: 'docs-component',
    description: 'create a template for the component used by wix docs',
    meta: 'v2.0.1',
  },
  {
    header: 'docs-viewer',
    description: 'create a template of the viewer needed for the wix docs team',
    meta: 'v1.0.1',
  },
  {
    header: 'docs-component',
    description: 'create a template for the component used by wix docs',
    meta: 'v2.0.1',
  },
  {
    header: 'docs-viewer',
    description: 'create a template of the viewer needed for the wix docs team',
    meta: 'v1.0.1',
  },
  {
    header: 'docs-component',
    description: 'create a template for the component used by wix docs',
    meta: 'v2.0.1',
  },
  {
    header: 'docs-viewer',
    description: 'create a template of the viewer needed for the wix docs team',
    meta: 'v1.0.1',
  },
  {
    header: 'docs-component',
    description: 'create a template for the component used by wix docs',
    meta: 'v2.0.1',
  },
];

export const MyTemplatesPage = ({ children }) => {
  return (
    <Page title={'My templates'}>
      <Card.Group>
        {items.map((item) => (
          <Card {...item} as={Link} link to={`/my-templates/${item.header}`} />
        ))}
      </Card.Group>
    </Page>
  );
};
