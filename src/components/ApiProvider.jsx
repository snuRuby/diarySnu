import React from 'react';
import * as firebase from 'firebase/app';

import { ApiContext } from '../util/useApi';
import Api from '../api';
import firebaseConfig from '../firebaseConfig';

const ApiProvider = (props) => {
  firebase.initializeApp(firebaseConfig)
  const api = new Api();

  return <ApiContext.Provider value={api} {...props} />;
};

export default ApiProvider;
