import {SvgProps} from 'react-native-svg';

interface Seat {
  seatNumber: number;
  reserved: boolean;
}

interface IconProps extends SvgProps {
  size?: number;
  color?: string;
}

interface BusRoute {
  id: string;
  routeTitle: string;
  route: string;
  totalSeats: number;
  seats: Seat[];
  avgSpeed: number;
}

interface Position {
  latitude: number;
  longitude: number;
}
