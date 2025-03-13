import React from 'react';
import PeopleListScreen from './src/screens/PeopleListScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <PeopleListScreen />
    </SafeAreaProvider>
  );
}

export default App;
