import * as React from 'react';
import * as style from './CodeArea.module.scss';

export const CodeArea = ({ code, title }) => {
  return (
    <section className={style.codeContainer}>
      {title && <h4>{title}</h4>}
      <code className={style.codeArea}>{code}</code>
    </section>
  );
};
