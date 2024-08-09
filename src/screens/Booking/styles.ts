import {StyleSheet} from 'react-native';
import {PALETTE} from '../../styles/palette.ts';

export const styles = StyleSheet.create({
  headerInfo: {
    gap: 53,
  },
  box: {
    alignItems: 'center',
    gap: 5,
  },
  boxValue: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  boxColor: {
    width: 23,
    aspectRatio: 1,
    backgroundColor: PALETTE.white,
    borderRadius: 5,
  },
  reserved: {
    backgroundColor: PALETTE.secondary,
  },
  scrollContainer: {
    paddingHorizontal: 35,
    marginTop: 79,
    marginBottom: 170,
  },
  seatsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 45,
  },
  seatsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 14,
  },
  seatsColumn: {
    gap: 19,
  },
});
