import React from 'react'
import { Amplify } from 'aws-amplify';
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
Amplify.configure(awsExports);
import AppRoute from './routes/AppRoute';



function App() {
  return (
    <>
    <Authenticator.Provider>
      <AppRoute/>
    </Authenticator.Provider>
    </>
  );
}

export default App;
