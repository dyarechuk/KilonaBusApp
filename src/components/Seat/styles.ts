import {StyleSheet} from 'react-native';
import {PALETTE} from '../../styles/palette.ts';

export const styles = StyleSheet.create({
  seat: {
    flex: 1,
    minWidth: 47,
    minHeight: 47,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  available: {
    backgroundColor: PALETTE.white,
  },
  reserved: {
    backgroundColor: PALETTE.secondary,
  },
});
