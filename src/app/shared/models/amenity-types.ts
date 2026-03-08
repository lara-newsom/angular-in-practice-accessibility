import { ImageData } from "../../image-data";

export interface Amenity {
  name: string;
  description: string;
  images: ImageData;
  details?: string[];
}

export const AMENITIES: Amenity[] = [
  {
    name: 'Outdoor Pool',
    description: 'Relax and unwind in our beautiful outdoor pool. Take a refreshing dip, soak up the sun on our comfortable lounge chairs, and enjoy the serene atmosphere of our poolside oasis.',
    images: {
      alt: 'A beautiful outdoor pool with an elegant modern waterfall. A cozy seating area with an umbrella and a table is poolside.',
      src: {
        thumb: 'assets/thumb/amenities_1.jpg',
        medium: 'assets/medium/amenities_1.jpg',
        large: 'assets/large/amenities_1.jpg',
      },
    },
    details: [
      'Heated for year-round swimming.',
      'Poolside service for drinks and snacks.',
      'Shallow section for children.',
    ]
  },
  {
    name: 'Workout Facilities',
    description: 'Stay active and energized in our state-of-the-art fitness center. Equipped with a wide range of modern cardio and strength-training equipment, our fitness center has everything you need for a satisfying workout.',
    images: {
        alt: 'The hotel\'s modern fitness center with state-of-the-art equipment.',
        src: {
          thumb: 'assets/thumb/amenities_2.jpg',
          medium: 'assets/medium/amenities_2.jpg',
          large: 'assets/large/amenities_2.jpg',
        },
      },
    details: [
      'Cardio: Treadmills, bikes, and rowing machines.',
      'Strength: Free weights, machines, and resistance bands.',
      'Mobility: Yoga mats, foam rollers, and stretching areas.',
    ]
  },
  {
    name: 'Fine Dining and Room Service',
    description: 'Indulge your taste buds at our on-site fine dining restaurant, where our expert chefs create exquisite dishes using the freshest local ingredients. For a more intimate dining experience, we also offer 24/7 room service, allowing you to enjoy a delicious meal in the comfort of your own room.',
    images: {
        alt: 'The hotel serves a five star breakfast buffet with a variety of delicious options.',
        src: {
          thumb: 'assets/thumb/amenities_4.jpg',
          medium: 'assets/medium/amenities_4.jpg',
          large: 'assets/large/amenities_4.jpg',
        },
      },
      details: [
        'Gourmet dishes with the finest ingredients.',
        '24/7 room service available.',
        'Vegetarian, vegan, and gluten-free options available.',
      ]
  }
];
