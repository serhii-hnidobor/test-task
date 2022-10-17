import React, { ReactElement } from 'react';
import logo from '../logo.svg';
import style from './style.module.scss';

function App(): ReactElement {
  return (
    <div className={style['app']}>
      <header className={style['app-header']}>
        <img src={logo} className={style['app-logo']} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className={style['app-link']} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export { App };
