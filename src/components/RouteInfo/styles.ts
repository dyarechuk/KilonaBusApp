import {StyleSheet} from 'react-native';
import {PALETTE} from '../../styles/palette.ts';

export const styles = StyleSheet.create({
  routeInfo: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomRightRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: PALETTE.primary,
  },
  text: {
    fontFamily: 'Poppins-Regular',
    color: PALETTE.white,
  },
});
