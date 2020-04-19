import * as React from 'react';

import { Input, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
export const Header = (props) => {
  const [activeItem, setActiveItem] = React.useState('home');

  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <Menu>
      <Menu.Item
        name='My templates'
        active={activeItem === 'home'}
        onClick={handleItemClick}
        as={Link}
        to='/my-templates'
      />
      <Menu.Item
        as={Link}
        to='/create-template'
        name='Create template'
        active={activeItem === 'messages'}
        onClick={handleItemClick}
      />

      <Menu.Menu position='right'>
        <Menu.Item>
          <Input icon='search' placeholder='Search...' />
        </Menu.Item>
        <Menu.Item
          name='logout'
          active={activeItem === 'logout'}
          onClick={handleItemClick}
        />
      </Menu.Menu>
    </Menu>
  );
};
