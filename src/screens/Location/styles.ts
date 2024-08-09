import {StyleSheet} from 'react-native';
import {PALETTE} from '../../styles/palette.ts';

export const styles = StyleSheet.create({
  location: {width: '100%', height: '100%'},
  speedometer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  speedometerText: {
    color: PALETTE.black,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
