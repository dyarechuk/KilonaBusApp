import React from 'react';
import {View} from 'react-native';
import {SCREENS} from '../../types/constants';
import {MainIcon} from '../../assets/icons/main_icon';
import {LocationIcon} from '../../assets/icons/location_icon';
import {PALETTE} from '../../styles/palette';
import {BookingIcon} from '../../assets/icons/booking_icon';

interface IconNavProps {
  name: string;
  size?: number;
  color?: string;
}

export const NavIcon: React.FC<IconNavProps> = ({
  name,
  size = 30,
  color = PALETTE.primary,
}) => {
  const renderIcon = () => {
    switch (name) {
      case SCREENS.MAIN:
        return <MainIcon color={color} size={size} />;
      case SCREENS.LOCATION:
        return <LocationIcon color={color} size={size} />;
      case SCREENS.BOOKING:
        return <BookingIcon color={color} size={size} />;
      default:
        return (
          <View style={{width: size, height: size, backgroundColor: color}} />
        );
    }
  };

  return <>{renderIcon()}</>;
};
