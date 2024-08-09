import {StyleSheet} from 'react-native';
import {PALETTE} from '../../styles/palette.ts';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: PALETTE.white,
  },
  bar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 17,
  },
  icon: {
    padding: 10,
    borderRadius: 25,
  },
});
