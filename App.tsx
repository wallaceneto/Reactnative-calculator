import React from 'react';
import {SafeAreaView} from 'react-native';
import HomeScreen from './src/screens/Home';

import styles from './src/global/styles';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen />
    </SafeAreaView>
  );
}
