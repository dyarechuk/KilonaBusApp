import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles.ts';
import image from '../../assets/bus.png';
import {TEXT, HEADING} from '../../styles/textStyles.ts';

interface BusRouteCardProps {
  routeTitle: string;
  route: string;
  handlePress: () => void;
}

export const BusRouteCard: React.FC<BusRouteCardProps> = ({
  routeTitle,
  route,
  handlePress,
}) => (
  <TouchableOpacity onPress={handlePress} style={styles.routeCard}>
    <View style={styles.routeCardHeader}>
      <Text style={[HEADING.h2, styles.cardText]}>{routeTitle}</Text>
      <Text style={[TEXT.m, styles.cardText]}>{route}</Text>
    </View>
    <Image source={image} />
  </TouchableOpacity>
);
