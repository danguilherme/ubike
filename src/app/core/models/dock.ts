import { Marker } from './marker';

export interface Dock extends Marker {
  id: number;
  availableBikes: number;
  name: string;
  address: string;
  estimateTime: string;
}
