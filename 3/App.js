import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/client';
import { StatusBar } from 'expo-status-bar';

import Main from './src/components/Main';
import createApolloClient from './src/utils/apolloClient'

const apolloClient = createApolloClient();

const App = () => {
  return (
    <>
      <NativeRouter future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true,
      }}>
        <ApolloProvider client={apolloClient}>
          <Main />
        </ApolloProvider>
      </NativeRouter>
      <StatusBar style="auto" />
    </>
  )
};

export default App;