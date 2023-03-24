import React, {useContext, useEffect, useState} from 'react';
import Login from '../../Admin/Login';
import {Navigate} from 'react-router-dom';
import {UidContext} from '../AppContext';

import Dashboard from '../../Admin/Dashboard';

const Private = () => {
  const uid = useContext(UidContext);

  return uid ? <Dashboard /> : <Login />;
};

export default Private;
