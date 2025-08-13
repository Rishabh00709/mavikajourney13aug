export interface TravelPackage {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  duration: string;
  location: string;
  category: string;
  region: 'India' | 'International';
  image: string;
  rating: number;
  reviews: number;
  availability?: string;
}

export const travelPackages: TravelPackage[] = [
  // Indian Cultural/Spiritual Packages
  {
    id: "cultural-varanasi",
    title: "Sacred Varanasi Experience",
    description: "Immerse yourself in the spiritual heart of India. Witness the mesmerizing Ganga Aarti at Dashashwamedh Ghat, explore ancient temples, take a holy dip in the Ganges, and experience the world's oldest living city. Package includes traditional accommodation and guided spiritual tours.",
    price: 499,
    duration: "4 days",
    location: "Varanasi, Uttar Pradesh, India",
    category: "Cultural",
    region: "India",
    image: "https://images.pexels.com/photos/31984535/pexels-photo-31984535/free-photo-of-colorful-boats-on-the-ganges-river-in-varanasi.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2g",
    rating: 4.9,
    reviews: 245,
    availability: "All Year"
  },
  {
    id: "cultural-haridwar-rishikesh",
    title: "Spiritual Ganges Journey",
    description: "Experience the divine blend of spirituality and adventure in Haridwar and Rishikesh. Witness the magnificent Ganga Aarti at Har Ki Pauri, participate in yoga sessions, and explore ancient temples. Optional adventure activities available.",
    price: 599,
    duration: "5 days",
    location: "Haridwar & Rishikesh, Uttarakhand, India",
    category: "Cultural",
    region: "India",
    image: "https://images.pexels.com/photos/2161449/pexels-photo-2161449.jpeg",
    rating: 4.8,
    reviews: 178,
    availability: "All Year"
  },
  {
    id: "cultural-ayodhya",
    title: "Divine Ayodhya Pilgrimage",
    description: "Visit the sacred city of Lord Ram, featuring the magnificent Ram Mandir. Experience the divine atmosphere, explore sacred ghats, and visit historical temples. Package includes special darshan arrangements and spiritual guide.",
    price: 3999,
    duration: "3 days",
    location: "Ayodhya, Uttar Pradesh, India",
    category: "Cultural",
    region: "India",
    image: "https://images.pexels.com/photos/6773832/pexels-photo-6773832.jpeg",
    rating: 4.9,
    reviews: 156,
    availability: "All Year"
  },
  {
    id: "cultural-ujjain",
    title: "Mystical Ujjain Yatra",
    description: "Explore the ancient city of Ujjain, home to the revered Mahakaleshwar Jyotirlinga. Visit the Kumbh Mela site, experience the divine Ram Ghat aarti, and discover the rich spiritual heritage of Madhya Pradesh.",
    price: 449,
    duration: "4 days",
    location: "Ujjain, Madhya Pradesh, India",
    category: "Cultural",
    region: "India",
    image: "https://images.unsplash.com/photo-1658730487395-dcc99f5d997c?q=80&w=2268&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.7,
    reviews: 134,
    availability: "All Year"
  },
  {
    id: "cultural-puri",
    title: "Jagannath Puri Darshan",
    description: "Experience the divine presence of Lord Jagannath in Puri. Witness the majestic Jagannath Temple, enjoy the pristine beaches, and explore the rich cultural heritage of Odisha. Special darshan arrangements included.",
    price: 549,
    duration: "4 days",
    location: "Puri, Odisha, India",
    category: "Cultural",
    region: "India",
    image: "https://plus.unsplash.com/premium_photo-1694475133441-bbca84f93082?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.8,
    reviews: 167,
    availability: "All Year"
  },
  {
    id: "cultural-rameswaram",
    title: "Rameswaram Temple Trail",
    description: "Visit the southernmost of the twelve Jyotirlingas and follow the path of Lord Rama. Experience the unique floating stones, visit all 64 Tirthas, and explore the Ramayana heritage sites.",
    price: 599,
    duration: "4 days",
    location: "Rameswaram, Tamil Nadu, India",
    category: "Cultural",
    region: "India",
    image: "https://images.pexels.com/photos/5137664/pexels-photo-5137664.jpeg",
    rating: 4.7,
    reviews: 145,
    availability: "All Year"
  },
  {
    id: "cultural-madurai",
    title: "Madurai Meenakshi Temple",
    description: "Visit the magnificent Meenakshi Amman Temple, witness the evening aarti ceremony, and explore the rich cultural heritage of Madurai. Experience the famous flower market and traditional Tamil cuisine.",
    price: 499,
    duration: "3 days",
    location: "Madurai, Tamil Nadu, India",
    category: "Cultural",
    region: "India",
    image: "https://images.pexels.com/photos/5137664/pexels-photo-5137664.jpeg",
    rating: 4.8,
    reviews: 189,
    availability: "All Year"
  },
  {
    id: "cultural-dwarka",
    title: "Divine Dwarka Darshan",
    description: "Visit one of the four major Dhams, the kingdom of Lord Krishna. Experience the magnificent Dwarkadhish Temple, take a holy dip in Gomti River, and visit Bet Dwarka island.",
    price: 549,
    duration: "4 days",
    location: "Dwarka, Gujarat, India",
    category: "Cultural",
    region: "India",
    image: "https://images.pexels.com/photos/6773832/pexels-photo-6773832.jpeg",
    rating: 4.8,
    reviews: 156,
    availability: "All Year"
  },
  {
    id: "cultural-tirupati",
    title: "Divine Tirupati Darshan",
    description: "Experience the divine darshan of Lord Venkateshwara at Tirumala. Package includes special darshan arrangements, accommodation, and visits to nearby temples including Padmavathi Temple and ISKCON.",
    price: 649,
    duration: "3 days",
    location: "Tirupati, Andhra Pradesh, India",
    category: "Cultural",
    region: "India",
    image: "https://images.pexels.com/photos/2161449/pexels-photo-2161449.jpeg",
    rating: 4.9,
    reviews: 289,
    availability: "All Year"
  },

  // Indian Beach Packages
  {
    id: "beach-goa",
    title: "Goa Beach Paradise",
    description: "Experience the vibrant beaches of Goa with this all-inclusive package. Enjoy luxury beachfront resorts, water sports, and the unique Indo-Portuguese culture. Perfect for both party enthusiasts and peace seekers.",
    price: 599,
    originalPrice: 749,
    discount: 20,
    duration: "5 days",
    location: "Goa, India",
    category: "Beach",
    region: "India",
    image: "https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg",
    rating: 4.7,
    reviews: 325,
    availability: "Oct - Mar"
  },
  {
    id: "beach-andaman",
    title: "Andaman Island Escape",
    description: "Discover the pristine beaches and crystal-clear waters of the Andaman Islands. Enjoy snorkeling, scuba diving, and luxury beach resorts.",
    price: 899,
    duration: "6 days",
    location: "Andaman Islands, India",
    category: "Beach",
    region: "India",
    image: "https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg",
    rating: 4.9,
    reviews: 178,
    availability: "Nov - May"
  },
  {
    id: "beach-pondicherry",
    title: "Pondicherry French Riviera",
    description: "Experience the unique French colonial charm of Pondicherry with its pristine beaches, spiritual ashrams, and vibrant culture. Enjoy the perfect blend of Indian spirituality and French elegance with beautiful coastal views, heritage walks, and serene beach experiences.",
    price: 449,
    originalPrice: 549,
    discount: 18,
    duration: "4 days",
    location: "Pondicherry, India",
    category: "Beach",
    region: "India",
    image: "https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg",
    rating: 4.6,
    reviews: 234,
    availability: "Oct - Mar"
  },
  {
    id: "beach-lakshadweep",
    title: "Lakshadweep Coral Paradise",
    description: "Discover India's most pristine coral islands with crystal-clear lagoons, white sand beaches, and vibrant marine life. Experience untouched natural beauty, world-class snorkeling and diving, and the unique culture of these remote tropical islands. Limited permits make this an exclusive destination.",
    price: 1299,
    originalPrice: 1599,
    discount: 19,
    duration: "6 days",
    location: "Lakshadweep Islands, India",
    category: "Beach",
    region: "India",
    image: "https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg",
    rating: 4.9,
    reviews: 89,
    availability: "Oct - May"
  },

  // Indian Mountain Packages
  {
    id: "mountain-ladakh",
    title: "Ladakh Adventure",
    description: "Discover the breathtaking landscapes of Ladakh, from high-altitude lakes to ancient monasteries. Experience the unique Buddhist culture and stunning Himalayan views. Includes camping under the stars.",
    price: 899,
    duration: "7 days",
    location: "Ladakh, India",
    category: "Mountain",
    region: "India",
    image: "https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg",
    rating: 4.9,
    reviews: 189,
    availability: "Jun - Sep"
  },
  {
    id: "mountain-sikkim",
    title: "Sikkim Himalayan Trek",
    description: "Trek through the stunning landscapes of Sikkim, visit ancient monasteries, and experience the unique blend of Nepali and Tibetan culture.",
    price: 799,
    duration: "8 days",
    location: "Sikkim, India",
    category: "Mountain",
    region: "India",
    image: "https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg",
    rating: 4.8,
    reviews: 145,
    availability: "Mar - May, Sep - Nov"
  },

  // International Beach Packages
  {
    id: "beach-thailand",
    title: "Thailand Beach & Culture",
    description: "Explore the vibrant beaches, temples, and nightlife of Thailand. Visit Bangkok, Phuket, Krabi, and Pattaya. Enjoy island hopping, Thai massage, water sports, and night markets. Perfect blend of relaxation and adventure with vegetarian food options.",
    price: 45000,
    originalPrice: 55000,
    discount: 18,
    duration: "5 days",
    location: "Bangkok, Phuket, Krabi, Thailand",
    category: "Beach",
    region: "International",
    image: "https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg",
    rating: 4.8,
    reviews: 342,
    availability: "Nov - Apr"
  },
  {
    id: "beach-bali",
    title: "Bali Romantic Paradise",
    description: "Experience the romantic vibes, scenic beaches, temples, and wellness retreats of Bali. Enjoy waterfalls, surfing, beach clubs, and Ubud culture. Free visa for Indian passport holders makes it even more attractive.",
    price: 55000,
    originalPrice: 65000,
    discount: 15,
    duration: "6 days",
    location: "Bali, Indonesia",
    category: "Beach",
    region: "International",
    image: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg",
    rating: 4.9,
    reviews: 287,
    availability: "Apr - Oct"
  },

  // International Cultural Packages
  {
    id: "cultural-malaysia",
    title: "Malaysia Urban & Nature",
    description: "Perfect mix of urban excitement and natural beauty. Explore Kuala Lumpur, Langkawi, and Penang. Visit Petronas Towers, enjoy Langkawi cable car, and experience theme parks. Great shopping and Indian food availability.",
    price: 50000,
    originalPrice: 60000,
    discount: 17,
    duration: "5 days",
    location: "Kuala Lumpur, Langkawi, Malaysia",
    category: "Cultural",
    region: "International",
    image: "https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg",
    rating: 4.7,
    reviews: 198,
    availability: "All Year"
  },
  {
    id: "cultural-singapore",
    title: "Singapore Family Delight",
    description: "Clean, efficient, and family-friendly destination with Little India area. Visit Universal Studios, Marina Bay, and Sentosa. Perfect for families seeking a safe and exciting international experience.",
    price: 60000,
    originalPrice: 70000,
    discount: 14,
    duration: "4 days",
    location: "Singapore",
    category: "Cultural",
    region: "International",
    image: "https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg",
    rating: 4.8,
    reviews: 234,
    availability: "All Year"
  },
  {
    id: "cultural-vietnam",
    title: "Vietnam Heritage & Nature",
    description: "Discover Vietnamese culture, affordability, and natural beauty. Explore Hanoi, Da Nang, and Ho Chi Minh City. Experience Ha Long Bay, street food tours, and heritage towns. Easier visa process makes it accessible.",
    price: 55000,
    originalPrice: 65000,
    discount: 15,
    duration: "6 days",
    location: "Hanoi, Da Nang, Ho Chi Minh City, Vietnam",
    category: "Cultural",
    region: "International",
    image: "https://images.pexels.com/photos/1631665/pexels-photo-1631665.jpeg",
    rating: 4.6,
    reviews: 167,
    availability: "Oct - Apr"
  },

  // International Mountain/Adventure Packages
  {
    id: "mountain-nepal",
    title: "Nepal Himalayan Adventure",
    description: "Close to home with spiritual appeal including Pashupatinath temple. Experience Mount Everest views, Pokhara lakes, and trekking adventures. No visa required for Indians makes it convenient and affordable.",
    price: 30000,
    originalPrice: 35000,
    discount: 14,
    duration: "5 days",
    location: "Kathmandu, Pokhara, Nepal",
    category: "Mountain",
    region: "International",
    image: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg",
    rating: 4.8,
    reviews: 156,
    availability: "Sep - May"
  },
  {
    id: "cultural-sri-lanka",
    title: "Sri Lanka Cultural Journey",
    description: "Explore rich culture, delicious food, beautiful beaches, and fascinating history. Visit Sigiriya, Galle Fort, and enjoy the famous Ella train ride. Close proximity and cultural similarities make it perfect for Indian travelers.",
    price: 37500,
    originalPrice: 45000,
    discount: 17,
    duration: "5 days",
    location: "Colombo, Kandy, Ella, Sri Lanka",
    category: "Cultural",
    region: "International",
    image: "https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg",
    rating: 4.7,
    reviews: 189,
    availability: "Dec - Apr"
  },

  // International Luxury Packages
  {
    id: "cultural-dubai",
    title: "Dubai Luxury Experience",
    description: "Experience luxury on budget with shopping, Indian diaspora comfort, and visa ease. Visit Burj Khalifa, enjoy desert safari, Dhow cruise, and world-class malls. Perfect blend of modern luxury and traditional culture.",
    price: 60000,
    originalPrice: 70000,
    discount: 14,
    duration: "4 days",
    location: "Dubai, UAE",
    category: "Cultural",
    region: "International",
    image: "https://images.pexels.com/photos/162031/dubai-tower-arab-khalifa-162031.jpeg",
    rating: 4.9,
    reviews: 298,
    availability: "Oct - Apr"
  },

  // Existing International Packages
  {
    id: "mountain-swiss",
    title: "Swiss Alps Adventure",
    description: "Discover the majestic Swiss Alps with guided hiking tours and luxury mountain accommodations. Experience breathtaking views, gourmet Alpine cuisine, and charming mountain villages.",
    price: 2499,
    duration: "8 days",
    location: "Swiss Alps, Switzerland",
    category: "Mountain",
    region: "International",
    image: "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg",
    rating: 4.9,
    reviews: 189,
    availability: "All Year"
  },
  {
    id: "cultural-petra",
    title: "Ancient Petra Discovery",
    description: "Walk through history in the rose-red city of Petra and experience Jordanian hospitality. Explore ancient ruins, camp under desert stars, and float in the Dead Sea.",
    price: 1799,
    duration: "5 days",
    location: "Petra, Jordan",
    category: "Cultural",
    region: "International",
    image: "https://images.pexels.com/photos/4846449/pexels-photo-4846449.jpeg",
    rating: 4.9,
    reviews: 156,
    availability: "Oct - Apr"
  },
  {
    id: "cultural-kyoto",
    title: "Traditional Kyoto Experience",
    description: "Immerse yourself in the ancient traditions of Japan. Stay in a traditional ryokan, participate in a tea ceremony, visit zen gardens, and explore historic temples and shrines.",
    price: 2199,
    duration: "6 days",
    location: "Kyoto, Japan",
    category: "Cultural",
    region: "International",
    image: "https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg",
    rating: 4.9,
    reviews: 178,
    availability: "Mar - May, Oct - Nov"
  }
];