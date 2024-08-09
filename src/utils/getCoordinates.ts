import Geocoder from 'react-native-geocoding';

interface Location {
  latitude: number;
  longitude: number;
}

Geocoder.init('AIzaSyA7ZKWTO5oJXuMTkfQUOa2bNKxXPeaBcHM');

export const getCoordinates = async (
  locationName: string,
): Promise<Location | null> => {
  try {
    const json = await Geocoder.from(locationName);
    const location = json.results[0].geometry.location;
    return {
      latitude: location.lat,
      longitude: location.lng,
    };
  } catch (error) {
    console.warn(error);
    return null;
  }
};
