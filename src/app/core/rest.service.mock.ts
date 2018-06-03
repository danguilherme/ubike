import { Bike } from './models/bike';

export const fetchNearDocks: { [key: string]: Bike[] } = {
  '7': [
    {
      id: 1,
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
