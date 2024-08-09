import React from 'react';
import {Animated, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppStackParamList} from '../../types/navigation';
import {SCREENS} from '../../types/constants.ts';
import {useBusStore} from '../../store/busStore.ts';
import {useTabBarStore} from '../../store/tabBarStore.ts';
import data from '../../data/routes.json';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {sharedStyles} from '../../styles/sharedStyles.ts';
import ScrollView = Animated.ScrollView;
import {Heading} from '../../components/Heading';
import {BusRouteCard} from '../../components/BusRouteCard';
import {styles} from './styles.ts';

interface MainScreenProps {
  navigation: BottomTabNavigationProp<AppStackParamList, SCREENS.MAIN>;
}

export const MainScreen: React.FC<MainScreenProps> = ({navigation}) => {
  const setBus = useBusStore(state => state.setBus);
  const setTabBarVisible = useTabBarStore(state => state.setTabBarStatus);

  const goToInfoScreen = (id: string) => {
    setBus(id);
    setTabBarVisible(true);
    navigation.navigate(SCREENS.BOOKING);
  };

  return (
    <SafeAreaView style={sharedStyles.page}>
      <View style={styles.heading}>
        <Heading text={'Select your route'} align={'center'} />
        <ScrollView
          style={styles.listContainer}
          contentContainerStyle={styles.list}>
          {data.busRoutes.map(({id, routeTitle, route}) => {
            return (
              <BusRouteCard
                key={id}
                routeTitle={routeTitle}
                route={route}
                handlePress={() => {
                  goToInfoScreen(id);
                }}
              />
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
