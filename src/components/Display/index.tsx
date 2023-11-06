import React from 'react';
import {Text, View} from 'react-native';

import styles from './styles';

interface Props {
  text: string;
}

export default function Display(props: Props) {
  return (
    <View style={styles.display}>
      <Text style={styles.displayValue} numberOfLines={1}>
        {props.text}
      </Text>
    </View>
  );
}
