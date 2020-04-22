import * as React from 'react';
import { Header, Segment } from 'semantic-ui-react';
import * as style from './HomePage.module.scss';

export const HomePage = ({ match }) => {
  const spans = [];
  for (let i = 0; i < 20; i++) {
    spans.push(<span key={i} />);
  }

  return (
    <main>
      <Header as='h1'>CTF</Header>
      <div className={style.document}>{spans}</div>
    </main>
  );
};
