import {PALETTE} from './palette';
import {StyleSheet} from 'react-native';

export const TEXT_COLOR = {
  black: {
    color: PALETTE.black,
  },
  white: {
    color: PALETTE.white,
  },
  primary: {
    color: PALETTE.primary,
  },
};

export const HEADING = StyleSheet.create({
  h1: {
    fontSize: 26,
    fontWeight: '500',
    lineHeight: 32.55,
  },
  h2: {
    fontSize: 25,
    fontWeight: '500',
    lineHeight: 37.5,
  },
  h3: {
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 27,
  },
});

export const TEXT = StyleSheet.create({
  xs: {
    fontFamily: 'Poppins-Regular',
    fontSize: 9,
    lineHeight: 13.5,
  },
  s: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    lineHeight: 18,
  },
  m: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    lineHeight: 21,
  },
  l: {
    fontSize: 19,
    fontFamily: 'Poppins-Regular',
    lineHeight: 28.5,
  },
});
