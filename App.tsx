import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';

import styles from './src/global/styles';
import Button from './src/components/Button';
import Display from './src/components/Display';

function App(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [value, setValue] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <Display text={`${value}`} />
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
