import {Platform, StyleSheet} from 'react-native';
import {PALETTE} from './palette.ts';

export const sharedStyles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: PALETTE.background,
    paddingBottom: Platform.OS === 'android' ? 20 : null,
  },
  header: {
    paddingTop: 25,
    paddingBottom: 18,
  },
  title: {
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 45,
    paddingRight: 15,
  },
});
