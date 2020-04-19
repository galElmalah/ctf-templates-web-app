import * as React from 'react';
import * as style from './Page.module.scss';
import { Container, Header, Divider } from 'semantic-ui-react';

export const Page = ({ title, children }) => {
  return (
    <Container textAlign={'left'} className={style.pageContainer}>
      <Header as='h1'> {title}</Header>
      <Divider />
      {children}
    </Container>
  );
};
