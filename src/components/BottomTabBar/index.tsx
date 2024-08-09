/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {useTabBarStore} from '../../store/tabBarStore';
import {TouchableOpacity, View} from 'react-native';
import {styles} from './styles.ts';
import {PALETTE} from '../../styles/palette.ts';
import {NavIcon} from '../NavIcon';

export const BottomTabBar: React.FC<BottomTabBarProps> = ({
  state: routeState,
  navigation,
}) => {
  const visible = useTabBarStore(state => state.visible);
  const setTabBarStatus = useTabBarStore(state => state.setTabBarStatus);

  return (
    <View
      style={[
        styles.container,
        {
          display: visible ? 'flex' : 'none',
          paddingBottom: 20,
        },
      ]}>
      <View style={styles.bar}>
        {routeState.routes.map((route, index) => {
          const isFocused = routeState.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            setTabBarStatus(!!index);

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TouchableOpacity
              key={route.name}
              onPress={onPress}
              style={[
                styles.icon,
                {
                  backgroundColor: isFocused
                    ? PALETTE.secondaryActive
                    : 'transparent',
                },
              ]}>
              <NavIcon
                name={route.name}
                color={isFocused ? PALETTE.primaryActive : PALETTE.primary}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};
