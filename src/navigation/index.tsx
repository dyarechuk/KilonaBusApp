import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React, {useMemo} from 'react';
import {BottomTabBar} from '../components/BottomTabBar';
import {BookingScreen} from '../screens/Booking/index.tsx';
import {LocationScreen} from '../screens/Location';
import {MainScreen} from '../screens/Main';
import {SCREENS} from '../types/constants.ts';
import {AppStackParamList} from '../types/navigation';

const Tab = createBottomTabNavigator<AppStackParamList>();

function CustomTabBarComponent(props: BottomTabBarProps) {
  return <BottomTabBar {...props} />;
}

export const Navigation: React.FC = () => {
  const renderTabBar = useMemo(() => CustomTabBarComponent, []);

  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={renderTabBar}
        screenOptions={{headerShown: false}}
        initialRouteName={SCREENS.MAIN}>
        <Tab.Screen name={SCREENS.MAIN} component={MainScreen} />
        <Tab.Screen name={SCREENS.LOCATION} component={LocationScreen} />
        <Tab.Screen name={SCREENS.BOOKING} component={BookingScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
