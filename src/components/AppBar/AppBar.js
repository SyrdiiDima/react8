import React from 'react';
import style from './AppBar.module.css';

import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth/auth-operations';

export const AppBar = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  // console.log('app bar', isLoggedIn);
  const name = useSelector(authSelectors.getUsername);
  // console.log(name);
  return (
    <div className={style.appBar}>
      <h1>Your Phonebook</h1>
      {!isLoggedIn ? (
        <ul className={style.buttonGroupe}>
          <li key="1">
            <NavLink to="/register" className={style.authButton}>
              SignUp
            </NavLink>
          </li>
          <li key="2">
            <NavLink to="/login" className={style.authButton}>
              SignIn
            </NavLink>
          </li>
        </ul>
      ) : (
        <div className={style.userGroupe}>
          <p>Hello {name}</p>
          <button
            type="button"
            className={style.logOutButton}
            onClick={() => dispatch(authOperations.logout())}
          >
            LogOut
          </button>
        </div>
      )}
    </div>
  );
};
