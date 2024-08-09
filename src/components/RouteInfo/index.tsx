import {Text, View} from 'react-native';
import React from 'react';
import {TEXT, HEADING} from '../../styles/textStyles.ts';
import {styles} from './styles.ts';

interface RouteInfoProps {
  name: string;
  route: string;
}

export const RouteInfo: React.FC<RouteInfoProps> = ({name, route}) => (
  <View style={styles.routeInfo}>
    <Text style={[HEADING.h3, styles.text]}>{name}</Text>
    <Text style={[TEXT.xs, styles.text]}>{route}</Text>
  </View>
);
