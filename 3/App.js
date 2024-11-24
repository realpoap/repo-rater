import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/client';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';

import AuthStorage from './src/utils/authStorage';
import AuthStorageContext from './src/contexts/AuthStorageContext';

import Main from './src/components/Main';
import createApolloClient from './src/utils/apolloClient'

const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);

const App = () => {
  console.log(Constants.expoConfig.extra);

  return (
    <>
      <NativeRouter future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true,
      }}>
        <ApolloProvider client={apolloClient}>
          <AuthStorageContext.Provider value={authStorage}>
            <Main />
          </AuthStorageContext.Provider>
        </ApolloProvider>
      </NativeRouter>
      <StatusBar style="auto" />
    </>
  )
};

export default App;