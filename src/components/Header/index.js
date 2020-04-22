import * as React from 'react';

import { Input, Menu } from 'semantic-ui-react';
import { Link, useLocation } from 'react-router-dom';
import { API } from '../../API';

const pathToName = (path = '') => {
  const _ = path.replace(/(\/|-)/g, ' ').trim();
  return (_ && _[0].toUpperCase() + _.substring(1)) || 'Home';
};
export const Header = (props) => {
  const location = useLocation();

  const [activeItem, setActiveItem] = React.useState(
    pathToName(location.pathname),
  );

  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <Menu>
      <Menu.Item
        name='Home'
        active={activeItem === 'Home'}
        onClick={handleItemClick}
        as={Link}
        to='/home'
      />

      <Menu.Item
        name='My templates'
        active={activeItem === 'My templates'}
        onClick={handleItemClick}
        as={Link}
        to='/my-templates'
      />
      <Menu.Item
        as={Link}
        to='/create-template'
        name='Create template'
        active={activeItem === 'Create template'}
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
