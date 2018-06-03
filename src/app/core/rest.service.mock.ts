import { Bike } from './models/bike';

export const fetchNearDocks: { [key: string]: Bike[] } = {
  '7': [
    {
      battery: 0.8,
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
