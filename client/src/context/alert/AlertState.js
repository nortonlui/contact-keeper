import React from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import { SET_ALERT, REMOVE_ALERT } from '../types';
import { v4 as uuid } from 'uuid';

const AlertState = (props) => {
  const initialState = [];

  const [state, dispatch] = React.useReducer(AlertReducer, initialState);

  // Actions
  // Set alert
  const setAlert = (msg, typeAlert, timeout = 5000) => {
    const id = uuid();
    dispatch({
      type: SET_ALERT,
      payload: {
        msg,
        typeAlert,
        id,
      },
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
  };

  return (
    <AlertContext.Provider
      value={{
        alerts: state,
        setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
