import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import React, {useEffect, useState} from 'react';
import {Animated, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Heading} from '../../components/Heading/index.tsx';
import {RouteInfo} from '../../components/RouteInfo/index.tsx';
import {Seat} from '../../components/Seat/index.tsx';
import {useBusStore} from '../../store/busStore.ts';
import {sharedStyles} from '../../styles/sharedStyles.ts';
import {TEXT} from '../../styles/textStyles.ts';
import {SCREENS} from '../../types/constants.ts';
import {AppStackParamList} from '../../types/navigation';
import {BusRoute} from '../../types/types';
import {divideArrayIntoQuarters} from '../../utils/divideArrayIntoQuarters.ts';
import {getRouteById} from '../../utils/getRouteById.ts';
import {styles} from './styles.ts';
import ScrollView = Animated.ScrollView;

interface BookingScreenProps {
  navigation: BottomTabNavigationProp<AppStackParamList, SCREENS.LOCATION>;
}

export const BookingScreen: React.FC<BookingScreenProps> = ({navigation}) => {
  const [currentRoute, setCurrentRoute] = useState<BusRoute | null>(null);
  const routeId = useBusStore(state => state.busId);
  const [firstSegment, secondSegment, thirdSegment, fourthSegment] =
    divideArrayIntoQuarters(currentRoute?.seats || []);

  useEffect(() => {
    const route = getRouteById(routeId || '');
    if (route) {
      setCurrentRoute(route);
    }
  }, [routeId]);
  return (
    <SafeAreaView>
      <View style={sharedStyles.header}>
        <View style={sharedStyles.title}>
          <Heading text={'Seat availability'} />
        </View>
        {currentRoute && (
          <View style={[sharedStyles.headerContent, styles.headerInfo]}>
            <RouteInfo
              name={currentRoute.routeTitle}
              route={currentRoute.route}
            />
            <View style={styles.box}>
              <View style={styles.boxValue}>
                <Text style={TEXT.s}>Reserved</Text>
                <View style={[styles.boxColor, styles.reserved]} />
              </View>
              <View style={styles.boxValue}>
                <Text style={TEXT.s}>Available</Text>
                <View style={styles.boxColor} />
              </View>
            </View>
          </View>
        )}
      </View>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.seatsContainer}>
          <View style={styles.seatsRow}>
            <View style={styles.seatsColumn}>
              {firstSegment.map(seat => (
                <Seat
                  key={seat.seatNumber}
                  number={seat.seatNumber}
                  isReserved={seat.reserved}
                  navigation={navigation}
                />
              ))}
            </View>
            <View style={styles.seatsColumn}>
              {secondSegment.map(seat => (
                <Seat
                  key={seat.seatNumber}
                  number={seat.seatNumber}
                  isReserved={seat.reserved}
                  navigation={navigation}
                />
              ))}
            </View>
          </View>
          <View style={styles.seatsRow}>
            <View style={styles.seatsColumn}>
              {thirdSegment.map(seat => (
                <Seat
                  key={seat.seatNumber}
                  number={seat.seatNumber}
                  isReserved={seat.reserved}
                  navigation={navigation}
                />
              ))}
            </View>
            <View style={styles.seatsColumn}>
              {fourthSegment.map(seat => (
                <Seat
                  key={seat.seatNumber}
                  number={seat.seatNumber}
                  isReserved={seat.reserved}
                  navigation={navigation}
                />
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
