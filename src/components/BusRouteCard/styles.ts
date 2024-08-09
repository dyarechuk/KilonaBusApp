import {StyleSheet} from 'react-native';
import {PALETTE} from '../../styles/palette.ts';

export const styles = StyleSheet.create({
  routeCard: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: PALETTE.cardBackground,
    shadowColor: PALETTE.black,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.25,
    shadowRadius: 10.15,
    elevation: 5,
  },
  routeCardHeader: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 25,
    paddingBottom: 8,
    paddingHorizontal: 10,
    gap: 2,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: PALETTE.primary,
  },
  cardText: {
    color: PALETTE.white,
  },
});
