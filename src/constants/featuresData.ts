import { HiPaperAirplane } from 'react-icons/hi';
import type { IconType } from 'react-icons';
import { FaPaypal } from 'react-icons/fa6';
import { HiMapPin } from 'react-icons/hi2';

export interface FeaturesData {
  id: number;
  icon: IconType;
  color: string;
  title: string;
  content: string;
}

export const featuresData: FeaturesData[] = [
  {
    id: 1,
    icon: HiMapPin,
    color: 'gold',
    title: 'Choose Destination',
    content:
      'Explore places you love from cities, beaches, and mountains. Select what fits your travel mood today.',
  },
  {
    id: 2,
    icon: FaPaypal,
    color: 'darkred',
    title: 'Make Payment',
    content:
      'Use any payment method you prefer — easy and secure. Transaction completes in seconds.',
  },
  {
    id: 3,
    icon: HiPaperAirplane,
    color: 'darkgreen',
    title: 'Reach Airport on Selected Date',
    content:
      'Arrive early and enjoy priority boarding services. Get assistance and updates before departure.',
  },
];
