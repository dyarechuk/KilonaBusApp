import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import MapView, {Marker} from 'react-native-maps';
import {BusRoute, Position} from '../../types/types';
import {PALETTE} from '../../styles/palette.ts';
import {styles} from './styles.ts';
import {SpeedometerIcon} from '../../assets/icons/speedometer_icon.tsx';
import {TEXT} from '../../styles/textStyles.ts';
import {sharedStyles} from '../../styles/sharedStyles.ts';
import {RouteInfo} from '../../components/RouteInfo/index.tsx';
import {useBusStore} from '../../store/busStore.ts';
import {getRouteById} from '../../utils/getRouteById.ts';
import {Heading} from '../../components/Heading/index.tsx';
import {getCoordinates} from '../../utils/getCoordinates.ts';

export const LocationScreen: React.FC = () => {
  const [currentPosition, setCurrentPosition] = useState<Position | null>(null);
  const [currentRoute, setCurrentRoute] = useState<BusRoute | null>(null);
  const routeId = useBusStore(state => state.busId);

  useEffect(() => {
    const fetchLocation = async () => {
      const route = getRouteById(routeId || '');
      if (route) {
        setCurrentRoute(route);

        const firstLocation = route.route.split(' ')[0];
        const coordinates = await getCoordinates(firstLocation);

        if (coordinates) {
          setCurrentPosition(coordinates);
        }
      }
    };

    fetchLocation();
  }, [routeId]);

  return (
    <SafeAreaView>
      <View style={sharedStyles.header}>
        <View style={sharedStyles.title}>
          <Heading text={'Location'} />
        </View>
        {currentRoute && (
          <View style={sharedStyles.headerContent}>
            <RouteInfo
              name={currentRoute.routeTitle}
              route={currentRoute.route}
            />
            <View style={styles.speedometer}>
              <SpeedometerIcon />
              <Text style={[TEXT.m, styles.speedometerText]}>
                {currentRoute.avgSpeed}kmph
              </Text>
            </View>
          </View>
        )}
      </View>
      {currentPosition ? (
        <MapView
          region={{
            latitude: currentPosition.latitude,
            longitude: currentPosition.longitude,
            latitudeDelta: 0.1822,
            longitudeDelta: 0.0841,
          }}
          style={styles.location}>
          <Marker
            coordinate={{
              latitude: currentPosition.latitude,
              longitude: currentPosition.longitude,
            }}
            pinColor={'red'}
            title={'You are here!'}
          />
        </MapView>
      ) : (
        <ActivityIndicator color={PALETTE.primary} />
      )}
    </SafeAreaView>
  );
};
