export interface RoomType {
  name: string;
  description: string;
  pricePerNight: number;
  maxOccupancy: number;
  images: {
    thumb: string;
    medium: string;
    large: string;
  };
  amenities: string[];
}

export const ROOM_TYPES: RoomType[] = [
  {
    name: 'Single Room',
    description: 'Our cozy Single Room is perfect for solo travelers seeking comfort and convenience. Featuring a comfortable queen-sized bed, modern amenities, and a stylish design, this room offers a relaxing retreat in the heart of the city.',
    pricePerNight: 150,
    maxOccupancy: 2,
    images: {
      thumb: 'assets/thumb/room_6.jpg',
      medium: 'assets/medium/room_6.jpg',
      large: 'assets/large/room_6.jpg',
    },
    amenities: [
      'Queen-sized bed',
      'Flat-screen TV with streaming services',
      'Mini-fridge',
      'Coffee maker',
      'In-room safe',
      'High-speed Wi-Fi',
      'Luxury toiletries'
    ]
  },
  {
    name: 'Double Queen Room',
    description: 'This spacious Double Queen Room is ideal for families or groups of friends. It features two comfortable queen-sized beds, modern amenities, and a stylish design, providing a relaxing retreat in the heart of the city.',
    pricePerNight: 175,
    maxOccupancy: 4,
    images: {
      thumb: 'assets/thumb/room_3.jpg',
      medium: 'assets/medium/room_3.jpg',
      large: 'assets/large/room_3.jpg',
    },
    amenities: [
      'Two Queen-sized beds',
      'Flat-screen TV with streaming services',
      'Mini-fridge',
      'Coffee maker',
      'In-room safe',
      'High-speed Wi-Fi',
      'Luxury toiletries'
    ]
  },
  {
    name: 'City Suite',
    description: 'Experience the vibrant city life with stunning views from our City Suite. This spacious room features modern decor, a comfortable king-sized bed, and a private balcony overlooking the city skyline.',
    pricePerNight: 250,
    maxOccupancy: 2,
    images: {
      thumb: 'assets/thumb/room_1.jpg',
      medium: 'assets/medium/room_1.jpg',
      large: 'assets/large/room_1.jpg',
    },
    amenities: [
      'King-sized bed',
      'Private balcony with city views',
      'Flat-screen TV with streaming services',
      'Mini-fridge',
      'Coffee maker',
      'In-room safe',
      'High-speed Wi-Fi',
      'Luxury toiletries'
    ]
  },
  // Additional room types can be added here
];
