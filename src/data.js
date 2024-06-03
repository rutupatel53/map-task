const sampleData = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1575650693902-8ead804c0732?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
    title: "Petra, Jordan",
    description:
      "Explore the ancient city of Petra, a UNESCO World Heritage site known for its rock-cut architecture and vibrant history.",
    tag: "Spring",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1588384153148-ebd739ac430c?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Statue of Liberty, USA",
    description:
      "Visit the iconic Statue of Liberty in New York City, a symbol of freedom and democracy.",
    tag: "Summer",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "James Bond Island, Thailand",
    description:
      "Discover the stunning James Bond Island,known for its limestone karsts and emerald waters.",
    tag: "Winter",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1547393027-a632f1004ad6?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Positano, Italy",
    description:
      "Experience the charm of Positano, a picturesque village on the Amalfi Coast known for its colorful buildings and beautiful beaches.",
    tag: "Summer",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1585506942812-e72b29cef752?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Taj Mahal, India",
    description:
      "Marvel at the Taj Mahal, an exquisite white marble mausoleum and one of the Seven Wonders of the World.",
    tag: "Winter",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "The Gateway Of India, Mumbai",
    description:
      "Visit the Goi in Mumbai, a grand arch overlooking the Arabian Sea, rich in historical significance.",
    tag: "Winter",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1562816216-b088c027377d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Eiffel Tower, France",
    description:
      "Ascend the Eiffel Tower in Paris, a global cultural icon of France and one of the most recognizable structures in the world.",
    tag: "Spring",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1509195070461-b99ef33ceb67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8",
    title: "Great Wall of China",
    description:
      "Walk along the Great Wall of China, a magnificent feat of ancient defensive architecture.",
    tag: "Spring",
  },
  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1588071646033-7d4b60fc39e5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Dubai Marina Beach, UAE",
    description:
      "Relax at Dubai Marina Beach, an urban waterfront development offering luxury, entertainment, and stunning views.",
    tag: "Winter",
  },
  {
    id: 10,
    image:
      "https://images.unsplash.com/photo-1615473787506-24ca223bf0e1?q=80&w=1908&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Patnem Beach, Goa",
    description:
      "Unwind on Patnem Beach in Goa, known for its serene atmosphere, golden sands, and vibrant beach shacks.",
    tag: "Winter",
  },
  {
    id: 11,
    image:
      "https://images.unsplash.com/photo-1570000569657-2387f8710d70?q=80&w=1956&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Venice, Italy",
    description:
      "Experience the magic of Venice, a city of canals, gondolas, and historic architecture.",
    tag: "Spring",
  },
  {
    id: 12,
    image:
      "https://images.unsplash.com/photo-1580452356610-d8428b35410d?q=80&w=1709&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Baa Atoll, Maldives",
    description:
      "Dive into the crystal-clear waters of Baa Atoll in the Maldives, known for its stunning marine biodiversity.",
    tag: "Summer",
  },
  {
    id: 13,
    image:
      "https://images.unsplash.com/photo-1685701448456-ceba683d9b42?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Agatti Island, India",
    description:
      "Explore Agatti Island in Lakshadweep, India, known for its pristine beaches and turquoise waters.",
    tag: "Winter",
  },
  {
    id: 14,
    image:
      "https://images.unsplash.com/photo-1559164314-d0b3de46e8d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
    title: "Namibia, Africa",
    description:
      "Discover the vast and diverse landscapes of Namibia, from the Namib Desert to the wildlife-rich Etosha National Park.",
    tag: "Autumn",
  },
  {
    id: 15,
    image:
      "https://images.unsplash.com/photo-1629980521562-5c69f03e7253?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Pragser Wildsee, Italy",
    description:
      "Visit Pragser Wildsee, a stunning lake in the Dolomites known for its emerald waters and surrounding mountain scenery.",
    tag: "Summer",
  },
  {
    id: 16,
    image:
      "https://images.unsplash.com/photo-1517971053567-8bde93bc6a58?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "El Nido, Philippines",
    description:
      "Experience the natural beauty of El Nido, known for its limestone cliffs, white sand beaches, and crystal-clear waters.",
    tag: "Summer",
  },
  {
    id: 17,
    image:
      "https://images.unsplash.com/photo-1568322503878-6c2762c21724?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Cappadocia, Turkey",
    description:
      "Explore the unique landscape of Cappadocia, famous for its fairy chimneys, cave dwellings, and hot air balloon rides.",
    tag: "Spring",
  },
  {
    id: 18,
    image:
      "https://images.unsplash.com/photo-1578155173088-710a9aef3849?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8",
    title: "Wind Palace, Jaipur",
    description:
      "Visit the Hawa Mahal, or Wind Palace, in Jaipur, India, known for its intricate latticework and historical significance.",
    tag: "Winter",
  },
  {
    id: 19,
    image:
      "https://images.unsplash.com/photo-1650445683345-9d9d4cc1d8a4?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Devprayag, India",
    description:
      "Witness the confluence of rivers, a sacred site in Uttarakhand where the Alaknanda and Bhagirathi rivers meet.",
    tag: "Spring",
  },
  {
    id: 20,
    image:
      "https://images.unsplash.com/photo-1628265512314-a9464859fe0c?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Rann of Kutch, India",
    description:
      "Explore the vast salt marsh of the Rann of Kutch in Gujarat, known for its white desert landscape and cultural festivals.",
    tag: "Winter",
  },
];

export default sampleData;
