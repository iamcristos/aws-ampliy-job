import React from 'react';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';
import './App.css';

import Jobs from './components/Jobs';
import Header from './components/Header';

Amplify.configure(awsconfig);
function App() {
  return (
    <div>
      <Header />
      <div className="App" >
        <Jobs />
      </div>
    </div>
  );
}

const authTheme = {navBar: {backgroundColor: '#556cd6', border:0, color: 'white'}}
export default withAuthenticator(App,  {includeGreetings: true, theme: authTheme, signUpConfig:{
  hiddenDefaults: ['phone_number']
}},)
// export default withAuthenticator(App, true);
