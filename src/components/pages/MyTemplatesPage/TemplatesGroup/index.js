import * as React from 'react';
import { Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export const TemplatesGroup = ({ templates }) => {
  return (
    <Card.Group>
      {templates.map((item) => (
        <Card
          header={item.name}
          description={item.description}
          meta={`v${item.version}`}
          as={Link}
          link
          to={`/my-templates/${item.name}`}
        />
      ))}
    </Card.Group>
  );
};
