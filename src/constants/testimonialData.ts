import profilePic1 from '../assets/profile/profile1.png';
import profilePic2 from '../assets/profile/profile2.png';
import profilePic3 from '../assets/profile/profile3.png';
import profilePic4 from '../assets/profile/profile4.png';
import profilePic5 from '../assets/profile/profil5.png';

export interface TestimonialsData {
  id: number;
  name: string;
  image: string;
  review: string;
  position: string;
}

export const testimonialsData: TestimonialsData[] = [
  {
    id: 1,
    name: 'Liya Mekonnen',
    image: profilePic1,
    review:
      'Our trip through the Simien Mountains with Aman Ethiopia Tours was absolutely breathtaking. The guides were super friendly!',
    position: 'Adventure Traveler',
  },
  {
    id: 2,
    name: 'James Mwangi',
    image: profilePic2,
    review:
      'Spirit of Kenya arranged a flawless safari for my family. Everything from the lodge to the guides was top-tier!',
    position: 'Family Vacationer',
  },
  {
    id: 3,
    name: 'Aisha Nakatudde',
    image: profilePic4,
    review:
      'My gorilla trekking experience in Bwindi was once-in-a-lifetime. Enchanted Uganda Safaris made it seamless and magical.',
    position: 'Wildlife Enthusiast',
  },
  {
    id: 4,
    name: 'David Kimani',
    image: profilePic3,
    review:
      'Bonfire Adventures handled our honeymoon perfectly. The private beaches in Diani were dreamy!',
    position: 'Honeymooner',
  },
  {
    id: 5,
    name: 'Helen Tadesse',
    image: profilePic5,
    review:
      'Exploring Lalibela with Senait Tours felt like stepping back in time. Great service and deep cultural insights.',
    position: 'Solo Explorer',
  },
];
