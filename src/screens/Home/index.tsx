import React, {Component} from 'react';
import {View} from 'react-native';

import styles from './styles';
import {CalcOperation} from './home.controller';
import Button from '../../components/Button';
import Display from '../../components/Display';

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  currentIndex: 0,
};

class HomeScreen extends Component {
  state = {...initialState};

  addDigit = (n: string) => {
    const clearDisplay =
      (this.state.displayValue === '0' && n !== '.') || this.state.clearDisplay;

    if (n === '.' && !clearDisplay && this.state.displayValue.includes('.')) {
      return;
    }

    const currentValue = clearDisplay ? '' : this.state.displayValue;
    const displayValue = currentValue + n;
    this.setState({displayValue, clearDisplay: false});

    if (n !== '.') {
      const newValue = parseFloat(displayValue);
      const values = [...this.state.values];
      values[this.state.currentIndex] = newValue;
      this.setState({values});
    }
  };

  clearMemory = () => {
    this.setState(initialState);
  };

  setOperation = (operation: string) => {
    if (this.state.currentIndex === 0) {
      this.setState({operation, currentIndex: 1, clearDisplay: true});
    } else {
      const values = [...this.state.values];
      try {
        values[0] = CalcOperation(values[0], values[1], this.state.operation);
      } catch (e) {
        values[0] = this.state.values[0];
      }

      values[1] = 0;
      const equals = operation === '=';
      this.setState({
        displayValue: `${values[0]}`,
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        // clearDisplay: !equals,
        clearDisplay: true,
        values,
      });
    }
  };

  render(): React.ReactNode {
    return (
      <View style={styles.container}>
        <Display text={`${this.state.displayValue}`} />
        <View style={styles.buttons}>
          <Button label={'AC'} triple onClick={this.clearMemory} />
          <Button label={'/'} operation onClick={this.setOperation} />
          <Button label={'7'} onClick={this.addDigit} />
          <Button label={'8'} onClick={this.addDigit} />
          <Button label={'9'} onClick={this.addDigit} />
          <Button label={'*'} operation onClick={this.setOperation} />
          <Button label={'4'} onClick={this.addDigit} />
          <Button label={'5'} onClick={this.addDigit} />
          <Button label={'6'} onClick={this.addDigit} />
          <Button label={'-'} operation onClick={this.setOperation} />
          <Button label={'1'} onClick={this.addDigit} />
          <Button label={'2'} onClick={this.addDigit} />
          <Button label={'3'} onClick={this.addDigit} />
          <Button label={'+'} operation onClick={this.setOperation} />
          <Button label={'0'} double onClick={this.addDigit} />
          <Button label={'.'} onClick={this.addDigit} />
          <Button label={'='} operation onClick={this.setOperation} />
        </View>
      </View>
    );
  }
}

export default HomeScreen;
