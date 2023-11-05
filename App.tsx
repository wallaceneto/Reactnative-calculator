import React from 'react';
import {SafeAreaView, View} from 'react-native';

import styles from './src/global/styles';
import Button from './src/components/Button';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttons}>
        <Button label={'AC'} onClick={() => {}} />
        <Button label={'/'} onClick={() => {}} />
        <Button label={'7'} onClick={() => {}} />
        <Button label={'8'} onClick={() => {}} />
        <Button label={'9'} onClick={() => {}} />
        <Button label={'*'} onClick={() => {}} />
        <Button label={'4'} onClick={() => {}} />
        <Button label={'5'} onClick={() => {}} />
        <Button label={'6'} onClick={() => {}} />
        <Button label={'-'} onClick={() => {}} />
        <Button label={'1'} onClick={() => {}} />
        <Button label={'2'} onClick={() => {}} />
        <Button label={'3'} onClick={() => {}} />
        <Button label={'+'} onClick={() => {}} />
        <Button label={'0'} onClick={() => {}} />
        <Button label={'.'} onClick={() => {}} />
        <Button label={'='} onClick={() => {}} />
      </View>
    </SafeAreaView>
  );
}

export default App;
