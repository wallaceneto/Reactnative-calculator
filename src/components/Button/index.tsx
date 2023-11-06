import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './styles';

interface Props {
  label: string;
  onClick: (x: string) => void;
  double?: boolean;
  triple?: boolean;
  operation?: boolean;
}

export default function Button(props: Props) {
  const buttonStyle: Array<any> = [styles.button];

  if (props.operation) {
    buttonStyle.push(styles.operationButton);
  }
  if (props.double) {
    buttonStyle.push(styles.buttonDouble);
  }
  if (props.triple) {
    buttonStyle.push(styles.buttonTriple);
  }

  return (
    <TouchableOpacity onPress={() => props.onClick(props.label)}>
      <Text style={buttonStyle}>{props.label}</Text>
    </TouchableOpacity>
  );
}
