import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {TEXT} from '../../styles/textStyles.ts';
import {styles} from './styles.ts';
import {AppStackParamList} from '../../types/navigation';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {SCREENS} from '../../types/constants.ts';

interface SeatProps {
  number: number;
  isReserved: boolean;
  navigation: BottomTabNavigationProp<AppStackParamList, SCREENS.LOCATION>;
}

export const Seat: React.FC<SeatProps> = ({number, isReserved, navigation}) => {
  const handlePress = () => {
    if (!isReserved) {
      navigation.navigate(SCREENS.LOCATION);
    }
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      disabled={isReserved}
      style={[styles.seat, isReserved ? styles.reserved : styles.available]}>
      <Text style={[TEXT.l]}>{number}</Text>
    </TouchableOpacity>
  );
};
