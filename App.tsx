import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';

import styles from './src/global/styles';
import Button from './src/components/Button';
import Display from './src/components/Display';

function App(): JSX.Element {
  const [value, setValue] = useState('0');

  const addDigit = (n: string) => {
    setValue(`${n}`);
  };
  const clearMemory = () => {
    setValue('0');
  };
  const setOperation = (operation: string) => {
    console.warn(operation);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Display text={`${value}`} />
      <View style={styles.buttons}>
        <Button label={'AC'} triple onClick={clearMemory} />
        <Button label={'/'} operation onClick={setOperation} />
        <Button label={'7'} onClick={addDigit} />
        <Button label={'8'} onClick={addDigit} />
        <Button label={'9'} onClick={addDigit} />
        <Button label={'*'} operation onClick={setOperation} />
        <Button label={'4'} onClick={addDigit} />
        <Button label={'5'} onClick={addDigit} />
        <Button label={'6'} onClick={addDigit} />
        <Button label={'-'} operation onClick={setOperation} />
        <Button label={'1'} onClick={addDigit} />
        <Button label={'2'} onClick={addDigit} />
        <Button label={'3'} onClick={addDigit} />
        <Button label={'+'} operation onClick={setOperation} />
        <Button label={'0'} double onClick={addDigit} />
        <Button label={'.'} onClick={addDigit} />
        <Button label={'='} operation onClick={setOperation} />
      </View>
    </SafeAreaView>
  );
}

export default App;
