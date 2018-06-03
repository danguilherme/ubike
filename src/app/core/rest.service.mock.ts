import { Dock } from './models/dock';

export const fetchNearDocks: { [key: string]: Dock[] } = {
  '7': [
    {
      id: 1,
      name: 'Bar do Zé',
      address: 'Rua 2',
      availableBikes: 5,
      lat: -23.507118,
      lng: -46.651601,
    },
  ],
};

export const startRide: { [key: string]: { startTime: Date } } = {
  '1,1': {
    startTime: new Date(),
  },
};

export const endRide: {
  [key: string]: { endTime: Date; elapsedTime: number; distance: number };
} = {
  '1,1': {
    endTime: new Date(),
    distance: 12.2,
    elapsedTime: 41014410,
  },
};
