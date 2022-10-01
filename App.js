import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation';



export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
      <StatusBar style="light" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    /* alignItems: 'center',
    justifyContent: 'center', */
  },
});
