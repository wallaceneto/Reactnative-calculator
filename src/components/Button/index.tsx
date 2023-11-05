import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './styles';

interface Props {
  label: String;
  onClick: () => void;
}

export default function Button(props: Props) {
  return (
    <TouchableOpacity onPress={props.onClick}>
      <Text style={styles.button}>{props.label}</Text>
    </TouchableOpacity>
  );
}
