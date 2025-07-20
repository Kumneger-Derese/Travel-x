import Wether from '../assets/season.png';
import Customization from '../assets/parental-control.png';
import LocalEvent from '../assets/location (1).png';
import Flight from '../assets/airplane.png';

export interface ServiceData {
  id: number;
  title: string;
  content: string;
  iamge: string;
}

export const serviceData: ServiceData[] = [
  {
    id: 1,
    title: 'Calculated Weather',
    content:
      'Stay informed with precise weather data for all your planned adventures.',
    iamge: Wether,
  },
  {
    id: 2,
    title: 'Best Flights',
    content:
      'Find affordable flights, handpicked for your comfort and schedule.',
    iamge: Flight,
  },
  {
    id: 3,
    title: 'Local Events',
    content: 'Discover festivals, markets, and local experiences near you.',
    iamge: LocalEvent,
  },
  {
    id: 4,
    title: 'Custumization',
    content:
      'Tailor your journey with tours, guides, and packages just for you.',
    iamge: Customization,
  },
];
