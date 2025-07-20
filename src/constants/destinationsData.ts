import Gonder from '../assets/gonder.png';
import Nairobi from '../assets/nairobi.png';
import Kampala from '../assets/kampala.png';

export interface DestinationsData {
  id: number;
  img: string;
  place: { country: string; city: string };
  price: number;
  numberOfDays: number;
}

export const destinationsData: DestinationsData[] = [
  {
    id: 1,
    img: Kampala,
    place: { city: 'Kampala,', country: 'Uganda' },
    price: 7.89,
    numberOfDays: 17,
  },
  {
    id: 2,
    img: Gonder,
    place: { city: 'Gonder,', country: 'Ethiopia' },
    price: 8.42,
    numberOfDays: 21,
  },
  {
    id: 3,
    img: Nairobi,
    place: { city: 'Nairobi,', country: 'Kenya' },
    price: 4.12,
    numberOfDays: 2,
  },
];
