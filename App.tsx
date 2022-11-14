// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import { Pokedex } from './src/components/Pokedex/Pokemon';
import { Navigator } from './src/navigation/Navigator';

export default function App() {

  return ( <Navigator/> );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
