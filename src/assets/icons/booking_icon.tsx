import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../../types/types';

export const BookingIcon = ({
  color = '#000000',
  size = 32,
  ...props
}: IconProps) => (
  <Svg viewBox="0 0 32 32" width={size} height={size} {...props}>
    <Path
      fill={color}
      d="M16.067 11.156a1.6 1.6 0 1 0 0-3.198 1.6 1.6 0 0 0 0 3.198zM17.153 13.289v-1.066h-3.199v1.066h1.066v9.063h-1.066v1.066h4.265v-1.066h-1.066z"
    />
    <Path
      fill={color}
      d="M16 2.672C8.639 2.672 2.672 8.64 2.672 16c0 7.362 5.968 13.328 13.328 13.328S29.328 23.362 29.328 16C29.328 8.639 23.36 2.672 16 2.672zm0 25.59C9.239 28.262 3.738 22.761 3.738 16S9.238 3.738 16 3.738c6.761 0 12.262 5.501 12.262 12.262S22.762 28.262 16 28.262z"
    />
  </Svg>
);
