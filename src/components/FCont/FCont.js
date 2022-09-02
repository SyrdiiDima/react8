import React from 'react';

import css from './FCont.module.css';

export const FCont = ({ children }) => {
  return <div className={css.fcont}>{children}</div>;
};
