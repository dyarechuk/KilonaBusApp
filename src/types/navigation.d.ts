import {SCREENS} from '../constants.ts';
import {ParamListBase} from '@react-navigation/native';

export type AppStackParamList = {
  [SCREENS.MAIN]: undefined;
  [SCREENS.LOCATION]: undefined;
  [SCREENS.BOOKING]: undefined;
} & ParamListBase;
