export interface PackageItinerary {
  day: number;
  title: string;
  description: string;
  activities: string[];
}

export interface PackageReview {
  id: string;
  name: string;
  rating: number;
  date: string;
  comment: string;
  avatar?: string;
}

export interface PackageContent {
  overview: string;
  highlights: string[];
  itinerary: PackageItinerary[];
  reviews: PackageReview[];
  inclusions: string[];
  exclusions: string[];
}

export const packageContent: Record<string, PackageContent> = {
  "cultural-varanasi": {
    overview: "Experience the spiritual heart of India in Varanasi, one of the world's oldest continuously inhabited cities. This sacred journey takes you through ancient ghats, mystical temples, and the divine Ganges River. Witness the mesmerizing Ganga Aarti ceremony, explore narrow lanes filled with history, and immerse yourself in the profound spirituality that has drawn pilgrims for millennia. Our expert guides will share the deep cultural significance of each site while ensuring you experience the authentic essence of this holy city.",
    highlights: [
      "Witness the spectacular Ganga Aarti at Dashashwamedh Ghat",
      "Take a sunrise boat ride on the sacred Ganges River",
      "Visit the golden Kashi Vishwanath Temple",
      "Explore the ancient Sarnath Buddhist site",
      "Experience traditional silk weaving workshops",
      "Participate in evening prayer ceremonies"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival and Sacred Evening",
        description: "Arrive in Varanasi and check into your heritage hotel overlooking the Ganges. Evening visit to Dashashwamedh Ghat for the magnificent Ganga Aarti ceremony with thousands of devotees.",
        activities: ["Airport pickup with traditional welcome", "Heritage hotel check-in", "Evening Ganga Aarti ceremony", "Traditional vegetarian dinner", "Orientation about Varanasi's spiritual significance"]
      },
      {
        day: 2,
        title: "Sunrise Spirituality and Temple Darshan",
        description: "Early morning boat ride on the Ganges to witness the sunrise and morning rituals. Visit ancient temples including the revered Kashi Vishwanath Temple.",
        activities: ["5:30 AM sunrise boat ride on Ganges", "Kashi Vishwanath Temple darshan", "Annapurna Temple visit", "Traditional breakfast at local eatery", "Silk weaving workshop in old city", "Evening meditation session"]
      },
      {
        day: 3,
        title: "Sarnath - Where Buddha Preached",
        description: "Full day excursion to Sarnath, where Buddha gave his first sermon after enlightenment. Explore the archaeological museum and ancient stupas in this UNESCO World Heritage site.",
        activities: ["Sarnath archaeological site exploration", "Dhamek Stupa meditation", "Sarnath Museum with Buddha artifacts", "Chaukhandi Stupa visit", "Traditional lunch at monastery", "Mulagandha Kuti Vihar temple"]
      },
      {
        day: 4,
        title: "Cultural Immersion and Farewell",
        description: "Morning exploration of old city's narrow lanes, visit to Banaras Hindu University, and final blessings before departure.",
        activities: ["Old city walking tour through ancient lanes", "BHU campus and Vishwanath Temple", "Traditional music performance", "Souvenir shopping for silk and brass", "Final Ganges blessing ceremony", "Airport transfer"]
      }
    ],
    reviews: [
      {
        id: "1",
        name: "Rajesh Kumar",
        rating: 5,
        date: "2024-02-10",
        comment: "Incredible spiritual experience! The Ganga Aarti at Dashashwamedh Ghat was absolutely mesmerizing. Our guide explained the deep significance of each ritual. The sunrise boat ride was peaceful and the temples were magnificent. The heritage hotel by the river was perfect. Highly recommend for anyone seeking spiritual awakening."
      },
      {
        id: "2",
        name: "Priya Patel",
        rating: 4,
        date: "2024-01-28",
        comment: "Took my family for a spiritual journey - what an amazing experience! The ancient temples and ghats have such powerful energy. Sarnath was particularly moving, standing where Buddha gave his first sermon. The silk weaving workshop was fascinating. Only suggestion is to book hotels in advance during festival season."
      },
      {
        id: "3",
        name: "Amit Singh",
        rating: 5,
        date: "2023-12-15",
        comment: "Perfect for elderly parents! The spiritual atmosphere of Varanasi touched their hearts deeply. Kashi Vishwanath Temple darshan was the highlight. The boat ride was comfortable and our guide was very knowledgeable about the history. The vegetarian food was excellent. Book the heritage hotel - worth every rupee!"
      }
    ],
    inclusions: [
      "3 nights accommodation in heritage hotel",
      "All meals (breakfast, lunch, dinner)",
      "Private boat rides on Ganges",
      "Expert local guide",
      "All temple entry fees",
      "Airport transfers",
      "Sarnath excursion with transport",
      "Traditional silk workshop"
    ],
    exclusions: [
      "International flights",
      "Personal expenses",
      "Tips and gratuities",
      "Travel insurance",
      "Additional activities not mentioned",
      "Alcoholic beverages"
    ]
  },

  "beach-andaman": {
    overview: "Discover the pristine beauty of the Andaman Islands, India's tropical paradise in the Bay of Bengal. This comprehensive island-hopping adventure takes you through Port Blair's rich history, Havelock's world-famous beaches, and Neil Island's serene landscapes. Experience crystal-clear waters, vibrant coral reefs, and diverse marine life while exploring the fascinating colonial history and indigenous culture of these remote islands.",
    highlights: [
      "Visit the historic Cellular Jail and witness the Light & Sound Show",
      "Relax at Radhanagar Beach - Asia's most beautiful beach",
      "Experience thrilling water sports at Elephant Beach",
      "Explore vibrant coral reefs through snorkeling and sea walking",
      "Witness stunning sunsets at Laxmanpur Beach on Neil Island",
      "Discover the unique Natural Coral Bridge formation"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival at Port Blair and Historical Tour",
        description: "Arrive at Veer Savarkar International Airport and begin your Andaman adventure with a historical exploration of Port Blair, including the famous Cellular Jail.",
        activities: [
          "Airport pickup and hotel check-in",
          "Local lunch and refreshment",
          "Visit Cellular Jail (Kala Pani) - colonial prison",
          "Evening stroll at Corbyn's Cove Beach",
          "Cellular Jail Light & Sound Show",
          "Dinner at local restaurant"
        ]
      },
      {
        day: 2,
        title: "Explore Havelock Island and Radhanagar Beach",
        description: "Ferry to Havelock Island and visit the world-renowned Radhanagar Beach, perfect for swimming and sunset viewing.",
        activities: [
          "Check out and ferry to Havelock Island (1-2 hours)",
          "Resort check-in and lunch",
          "Visit Radhanagar Beach - Asia's most beautiful beach",
          "Swimming and sunbathing on white sand",
          "Breathtaking sunset photography",
          "Beachside dinner at resort"
        ]
      },
      {
        day: 3,
        title: "Adventure and Water Sports at Havelock",
        description: "Experience thrilling water sports at Elephant Beach, the hub for marine adventures and coral reef exploration.",
        activities: [
          "Boat ride or forest trek to Elephant Beach",
          "Snorkeling among vibrant coral reefs",
          "Sea walking underwater experience",
          "Glass-bottom boat ride for marine life viewing",
          "Return to resort for lunch and relaxation",
          "Evening scooter ride to Kalapathar Beach or local market exploration"
        ]
      },
      {
        day: 4,
        title: "Discover Neil Island and its Natural Wonders",
        description: "Ferry to the peaceful Neil Island and explore its famous beaches and unique natural rock formations.",
        activities: [
          "Check out and ferry to Neil Island (1 hour)",
          "Hotel check-in on Neil Island",
          "Visit Laxmanpur Beach for stunning sunset views",
          "Explore Natural Coral Bridge (Howrah Bridge) during low tide",
          "Photography at unique rock formations",
          "Peaceful evening at resort"
        ]
      },
      {
        day: 5,
        title: "Neil Island Beaches and Return to Port Blair",
        description: "Explore more of Neil Island's beautiful beaches before returning to Port Blair for your final night.",
        activities: [
          "Early morning visit to Sitapur Beach for sunrise",
          "Bharatpur Beach for clear shallow waters",
          "Glass-bottom boat rides at Bharatpur",
          "Check out and ferry back to Port Blair",
          "Port Blair hotel check-in",
          "Local market shopping for souvenirs"
        ]
      },
      {
        day: 6,
        title: "Departure",
        description: "Final exploration of Port Blair's cultural attractions before departure.",
        activities: [
          "Visit Samudrika Marine Museum",
          "Anthropological Museum for island culture",
          "Last-minute souvenir shopping",
          "Hotel check-out",
          "Airport transfer for departure"
        ]
      }
    ],
    reviews: [
      {
        id: "1",
        name: "Ravi Krishnan",
        rating: 5,
        date: "2024-02-15",
        comment: "Absolutely magical experience! Radhanagar Beach is truly paradise on earth. The water sports at Elephant Beach were thrilling - snorkeling revealed such beautiful coral reefs. Cellular Jail's Light & Sound Show was deeply moving. Neil Island was so peaceful and perfect for relaxation. The ferry rides between islands were comfortable and scenic."
      },
      {
        id: "2",
        name: "Kavya Nair",
        rating: 5,
        date: "2024-01-28",
        comment: "Perfect honeymoon destination! The beaches are pristine with crystal clear water. Sea walking at Elephant Beach was an unforgettable experience - felt like walking in an aquarium. The Natural Coral Bridge on Neil Island is a natural wonder. Sunsets at Laxmanpur Beach were breathtaking. Highly recommend for couples seeking a tropical paradise."
      },
      {
        id: "3",
        name: "Suresh Patel",
        rating: 4,
        date: "2024-01-10",
        comment: "Great family vacation! Kids loved the water sports and glass-bottom boat rides. The historical significance of Cellular Jail was educational. Beaches are clean and safe for swimming. Only suggestion is to book water sports in advance during peak season. The island hopping was well-organized and transfers were smooth."
      }
    ],
    inclusions: [
      "5 nights accommodation (Port Blair, Havelock, Neil Island)",
      "All inter-island ferry transfers",
      "Airport pickup and drop",
      "Cellular Jail Light & Sound Show tickets",
      "Water sports activities at Elephant Beach",
      "Snorkeling equipment and guide"
    ],
    exclusions: [
      "International flights to Port Blair",
      "Personal expenses and shopping",
      "Travel insurance",
      "Tips and gratuities",
      "Additional water sports not mentioned",
      "Alcoholic beverages",
      "Scuba diving (available at extra cost)"
    ]
  },
  "beach-goa": {
    overview: "Experience the vibrant beaches of Goa with this comprehensive package that perfectly balances relaxation, adventure, culture, and nightlife. From the bustling beaches of North Goa to the serene shores of South Goa, explore Portuguese heritage, indulge in water sports, witness magnificent waterfalls, and enjoy the famous Goan nightlife. This package offers the complete Goa experience with luxury beachfront accommodations, cultural tours, and authentic Goan cuisine.",
    highlights: [
      "Explore historic Fort Aguada with panoramic Arabian Sea views",
      "Experience thrilling water sports at Baga and Anjuna beaches",
      "Visit UNESCO World Heritage churches in Old Goa",
      "Take a scenic Mandovi River cruise with cultural performances",
      "Witness the magnificent four-tiered Dudhsagar Falls",
      "Enjoy Goa's famous nightlife at Tito's and beach clubs"
    ],
    itinerary: [
      {
        day: 1,
        title: "North Goa - Beaches and Forts",
        description: "Arrive in Goa and explore the historic Fort Aguada followed by beach hopping through North Goa's most famous beaches, ending with vibrant nightlife.",
        activities: [
          "Airport/railway station pickup and hotel check-in",
          "Traditional Goan breakfast at beachside cafe",
          "Fort Aguada exploration with lighthouse visit",
          "Candolim Beach for serene afternoon relaxation",
          "Calangute Beach bustling hub experience",
          "Baga Beach sunset and dinner at beach shacks",
          "Nightlife at famous clubs like Tito's or Mambo's"
        ]
      },
      {
        day: 2,
        title: "North Goa - Markets and Water Sports",
        description: "Experience the famous Anjuna Flea Market, enjoy thrilling water sports, and catch a spectacular sunset at Chapora Fort.",
        activities: [
          "Anjuna Flea Market shopping (Wednesday) or cliff exploration",
          "Breakfast at beachside shack",
          "Water sports at Vagator/Anjuna Beach - parasailing, jet skiing",
          "Banana boat rides and other marine adventures",
          "Seafood lunch at beach restaurant",
          "Chapora Fort sunset viewing (Dil Chahta Hai Fort)",
          "Traditional Goan dinner with fish curry and prawn balchão"
        ]
      },
      {
        day: 3,
        title: "Old Goa and Panjim Cultural Tour",
        description: "Explore UNESCO World Heritage churches in Old Goa, discover colorful Panjim, and enjoy an evening river cruise with cultural performances.",
        activities: [
          "Old Goa UNESCO World Heritage site visit",
          "Basilica of Bom Jesus with St. Francis Xavier relics",
          "Se Cathedral - one of Asia's largest churches",
          "Panjim capital city exploration",
          "Fontainhas Latin Quarter colorful houses walk",
          "Mandovi River evening cruise with folk dances",
          "Optional casino visit on Mandovi River"
        ]
      },
      {
        day: 4,
        title: "South Goa - Dudhsagar Falls and Spice Plantation",
        description: "Adventure day trip to magnificent Dudhsagar Falls through dense forests, followed by spice plantation tour and relaxation at pristine Palolem Beach.",
        activities: [
          "Early morning departure to Dudhsagar Falls",
          "Jeep safari through Bhagwan Mahaveer Sanctuary",
          "Four-tiered waterfall exploration and photography",
          "Spice plantation tour with medicinal properties learning",
          "Traditional Goan lunch served on banana leaf",
          "Transfer to South Goa and Palolem Beach check-in",
          "Palolem Beach crescent-shaped coastline relaxation",
          "Optional Saturday Silent Disco experience"
        ]
      },
      {
        day: 5,
        title: "South Goa Beaches and Departure",
        description: "Explore the tranquil beaches of South Goa, enjoy last-minute shopping, and prepare for departure with unforgettable Goan memories.",
        activities: [
          "Agonda Beach turtle nesting site visit",
          "Colva Beach - one of Goa's oldest popular beaches",
          "Beach relaxation and final swimming",
          "Local market souvenir shopping",
          "Traditional Goan lunch",
          "Hotel check-out and packing",
          "Airport/railway station transfer for departure"
        ]
      }
    ],
    reviews: [
      {
        id: "1",
        name: "Rohit Gupta",
        rating: 5,
        date: "2024-02-18",
        comment: "Perfect Goa experience! The itinerary covered everything - from historic forts to amazing beaches. Fort Aguada views were spectacular and the water sports at Baga Beach were thrilling. Dudhsagar Falls was absolutely breathtaking - the jeep safari was an adventure itself. The nightlife at Tito's was legendary! Great mix of culture, adventure, and relaxation."
      },
      {
        id: "2",
        name: "Sneha Reddy",
        rating: 4,
        date: "2024-02-05",
        comment: "Amazing girls' trip! Anjuna Flea Market was a shopper's paradise - got so many unique items. The Old Goa churches were beautiful and full of history. Palolem Beach in South Goa was so peaceful compared to the busy North Goa beaches. The Mandovi River cruise with cultural performances was a highlight. Spice plantation tour was educational and fun!"
      },
      {
        id: "3",
        name: "Arjun Mehta",
        rating: 5,
        date: "2024-01-22",
        comment: "Perfect honeymoon destination! The contrast between North and South Goa was amazing. Candolim and Palolem beaches were romantic and beautiful. The Portuguese architecture in Fontainhas was charming for photography. Goan fish curry was delicious! The silent disco at Palolem was a unique experience. Highly recommend for couples seeking beach romance with adventure."
      }
    ],
    inclusions: [
      "4 nights accommodation in beachfront hotels",
      "Daily breakfast and select meals",
      "Airport/railway station transfers",
      "Fort Aguada and Old Goa guided tours",
      "Dudhsagar Falls jeep safari with guide",
      "Spice plantation tour with traditional lunch",
      "Mandovi River cruise with cultural show",
      "Water sports equipment and safety gear"
    ],
    exclusions: [
      "International flights to Goa",
      "Personal expenses and shopping",
      "Alcoholic beverages",
      "Travel insurance",
      "Tips and gratuities",
      "Additional water sports not mentioned",
      "Casino entry fees and gambling",
      "Scooter/car rental (available at extra cost)"
    ]
  },
  "cultural-haridwar-rishikesh": {
    overview: "Embark on a transformative spiritual journey through Haridwar and Rishikesh, two of India's most sacred cities nestled in the foothills of the Himalayas. Experience the divine confluence of the Ganges, participate in ancient yoga traditions, and witness spectacular evening aartis. From the bustling ghats of Haridwar to the serene ashrams of Rishikesh, this package offers a perfect blend of spirituality, adventure, and cultural immersion in the 'Yoga Capital of the World'.",
    highlights: [
      "Witness the magnificent Ganga Aarti at Har Ki Pauri",
      "Participate in authentic yoga sessions by the Ganges",
      "Visit ancient temples and ashrams",
      "Experience white water rafting on the Ganges",
      "Explore the Beatles Ashram",
      "Take a cable car ride to Mansa Devi Temple"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Haridwar",
        description: "Arrive in Haridwar and check into your riverside hotel. Evening visit to Har Ki Pauri for the spectacular Ganga Aarti ceremony.",
        activities: ["Railway station pickup", "Hotel check-in", "Har Ki Pauri Ganga Aarti", "Traditional dinner", "Evening temple visit"]
      },
      {
        day: 2,
        title: "Haridwar Temple Circuit",
        description: "Full day exploring Haridwar's sacred temples including Mansa Devi and Chandi Devi via cable car rides.",
        activities: ["Mansa Devi Temple cable car", "Chandi Devi Temple visit", "Maya Devi Temple", "Local market exploration", "Holy dip in Ganges", "Evening aarti participation"]
      },
      {
        day: 3,
        title: "Transfer to Rishikesh",
        description: "Morning transfer to Rishikesh. Visit Laxman Jhula and Ram Jhula. Evening yoga session by the Ganges.",
        activities: ["Transfer to Rishikesh", "Laxman Jhula exploration", "Ram Jhula visit", "Parmarth Niketan Ashram", "Sunset yoga session", "Vegetarian dinner"]
      },
      {
        day: 4,
        title: "Adventure and Spirituality",
        description: "Morning white water rafting followed by visits to famous ashrams and the Beatles Ashram.",
        activities: ["White water rafting", "Beatles Ashram exploration", "Maharishi Mahesh Yogi Ashram", "Meditation session", "Ayurvedic massage"]
      },
      {
        day: 5,
        title: "Departure",
        description: "Final morning yoga session and departure.",
        activities: ["Morning yoga by Ganges", "Souvenir shopping", "Final temple visit", "Railway station transfer"]
      }
    ],
    reviews: [
      {
        id: "1",
        name: "Vikram Sharma",
        rating: 5,
        date: "2024-01-20",
        comment: "Amazing spiritual and adventure combination! The yoga sessions by the Ganges were life-changing. Haridwar's Ganga Aarti gave me goosebumps and Rishikesh is truly the yoga capital. The white water rafting was thrilling! Beatles Ashram was fascinating. Perfect trip for both spirituality and adventure. Our guide knew every temple's history."
      }
    ]
  }
}