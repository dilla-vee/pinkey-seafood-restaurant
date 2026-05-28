import './style.css';
import logoImg from './assets/logo.png';
import heroDishImg from './assets/hero_dish.png';
import oystersImg from './assets/oysters.png';
import crabImg from './assets/crab.png';

// Custom Accommodations and Activities Images
import threeBedroomHouseImg from './assets/custom_images/three_bedroom_house.jpg';
import privateVillaImg from './assets/custom_images/private_villa.jpg';
import studioRoomImg from './assets/custom_images/studio_room_1.jpg';
import oneBedroomApartmentImg from './assets/custom_images/one_bedroom_apartment_1.jpg';

// Imported generated images for Robinson Island & African Pool
import glassBoatRobinsonImg from './assets/custom_images/glass_boat_robinson.png';
import africanPoolAdventureImg from './assets/custom_images/african_pool_adventure.png';
import wasiniIslandImg from './assets/custom_images/wasini_island.png';
import shimbaHillsImg from './assets/custom_images/shimba_hills.png';
import sunsetCongoRiverImg from './assets/custom_images/sunset_congo_river.png';
import villageRetreatImg from './assets/custom_images/village_retreat.png';
import dianiCityTourImg from './assets/custom_images/diani_city_tour.png';
import snorkelingSnacksImg from './assets/custom_images/snorkeling_snacks.png';

// Vegetable Sources Menu Images
import vegetableSourcesImg from './assets/menu/vegetable_sources.png';
import grilledChickenImg from './assets/menu/grilled_chicken.png';
import grilledOctopusImg from './assets/menu/grilled_octopus.png';
import calamariImg from './assets/menu/calamari.png';
import gingerCrabImg from './assets/menu/ginger_crab.png';
import grilledLobsterImg from './assets/menu/grilled_lobster.png';
import grilledKingPrawnImg from './assets/menu/grilled_king_prawn.png';
import grilledFishFilletImg from './assets/menu/grilled_fish_fillet.png';
import curryChickenImg from './assets/menu/curry_chicken.png';
import fishFingerImg from './assets/menu/fish_finger.png';

// Interfaces
interface MenuItem {
  id: string;
  name: string;
  category: 'starters' | 'entrees' | 'platters';
  price: string;
  description: string;
  tags: string[];
  image: string;
}

interface Activity {
  id: string;
  name: string;
  price: string;
  description: string;
  badge: string;
  image: string;
}

interface Cottage {
  id: string;
  name: string;
  beds: number;
  price: string;
  description: string;
  amenities: string[];
  image: string;
}

interface Testimonial {
  quote: string;
  stars: number;
  author: string;
  role: string;
}

// 1. Menu Items from Flyer Image
const menuItems: MenuItem[] = [
  // Section 1: Swahili & Grilled (Platters & Mains)
  {
    id: 'flyer-1',
    name: "PiNKeY 19'S SWAHILI SEA FOOD PLATTER",
    category: 'platters',
    price: 'KSH. 3000/=',
    description: 'Grilled lobster, fish, Prawn, Calamari and Crab. Served with coconut rice, Rosemary potatoes and Salad.',
    tags: ['Swahili Style', 'Platter', 'Chef Special'],
    image: heroDishImg
  },
  {
    id: 'flyer-2',
    name: "PiNKeY 19'S GRILLED LOBSTER, CRAB & CALAMARI",
    category: 'platters',
    price: 'KSH. 2300/=',
    description: 'Grilled lobster, Calamari & Crab in shell with delicious Garlic parsley butter. Served with coconut rice, Rosemary potatoes and Salad.',
    tags: ['Grilled', 'Shellfish'],
    image: crabImg
  },
  {
    id: 'flyer-3',
    name: "PiNKeY 19'S GRILLED CRAB, CALAMARI & FISH",
    category: 'platters',
    price: 'KSH. 2000/=',
    description: 'Grilled lobster, Calamari & Crab in shell with delicious parsley butter. Served with coconut rice, Rosemary potatoes and Salad.',
    tags: ['Grilled', 'Fresh Catch'],
    image: heroDishImg
  },
  {
    id: 'flyer-4',
    name: "PiNKeY 19'S GRILLED OCTOPUS - CALAMARI",
    category: 'entrees',
    price: 'KSH. 1000/=',
    description: 'Freshly grilled octopus and calamari served with Swahili style vegetable stews. Served with coconut rice, Rosemary potatoes and Salad.',
    tags: ['Garlic Butter', 'Local Favorite', 'Swahili Style'],
    image: grilledOctopusImg
  },
  {
    id: 'flyer-5',
    name: "PiNKeY 19'S GRILLED FISH & COCONUT RICE WITH CHICKEN",
    category: 'entrees',
    price: 'KSH. 1000/=',
    description: 'Succulent grilled fish served alongside traditional coconut rice and chicken seasoned with local spices.',
    tags: ['Grilled', 'Coconut Rice', 'Local Spices'],
    image: grilledFishFilletImg
  },
  
  // Section 2: Curry & Special Fries
  {
    id: 'flyer-6',
    name: "PiNKeY 19'S CURRY OCTOPUS",
    category: 'entrees',
    price: 'KSH. 1000/=',
    description: 'Curry octopus with delicious Garlic butter and sauce octopus. Served with coconut rice, Rosemary potatoes and Salad.',
    tags: ['Spicy Curry', 'Garlic Butter'],
    image: grilledOctopusImg
  },
  {
    id: 'flyer-7',
    name: "PiNKeY 19'S GRILLED KING CRAB",
    category: 'entrees',
    price: 'KSH. 1000/=',
    description: 'Juicy, flame-grilled king crab sections basted with ginger and lemon butter. Served with coconut rice and local side salads.',
    tags: ['Grilled', 'Ginger & Lemon', 'Premium Shellfish'],
    image: gingerCrabImg
  },
  {
    id: 'flyer-8',
    name: "PiNKeY 19'S CURRY CHICKEN",
    category: 'entrees',
    price: 'KSH. 1000/=',
    description: 'Curry chicken with delicious Garlic Crab. Served with coconut rice and Salad.',
    tags: ['Chicken Curry'],
    image: curryChickenImg
  },
  {
    id: 'flyer-9',
    name: "PiNKeY 19'S FISH FINGERS",
    category: 'starters',
    price: 'KSH. 1000/=',
    description: 'Crispy, golden-brown deep-fried premium fish fingers. Served with rosemary potatoes and Swahili side dishes.',
    tags: ['Crispy', 'Swahili Side'],
    image: fishFingerImg
  },
  {
    id: 'flyer-10',
    name: "PiNKeY 19'S GRILLED CHICKEN",
    category: 'entrees',
    price: 'KSH. 1000/=',
    description: 'Flame-grilled tender chicken basted in our signature Swahili marinade. Served with fresh vegetables and local starches.',
    tags: ['Grilled', 'Swahili Marinade', 'Local Favorite'],
    image: grilledChickenImg
  },

  // Section 3: Curries, Calamari & Lobster
  {
    id: 'flyer-11',
    name: "PiNKeY 19'S VEGETARIAN",
    category: 'entrees',
    price: 'KSH. 1000/=',
    description: "Pinkey 19's vegetables stew sauces. Served with coconut rice & Chapati.",
    tags: ['Vegetarian', 'Vegan Option'],
    image: vegetableSourcesImg
  },
  {
    id: 'flyer-12',
    name: "PiNKeY 19'S PRAWNS CURRY",
    category: 'entrees',
    price: 'KSH. 1800/=',
    description: 'Cooked & Added Coconut Sauce. Served with coconut rice, and Salad.',
    tags: ['Coconut Curry'],
    image: heroDishImg
  },
  {
    id: 'flyer-13',
    name: "PiNKeY 19'S FISH CURRY",
    category: 'entrees',
    price: 'KSH. 1800/=',
    description: 'Curry Fish with Delicious Garlic Butter. Served with coconut rice.',
    tags: ['Fish Curry'],
    image: grilledFishFilletImg
  },
  {
    id: 'flyer-14',
    name: "PiNKeY 19'S CALAMARI",
    category: 'starters',
    price: 'KSH. 1000/=',
    description: 'Deep Fried Calamari Rings. Served with Rosemary Potatoes, Coconut & Salad.',
    tags: ['Crispy Rings'],
    image: calamariImg
  },
  {
    id: 'flyer-15',
    name: "PiNKeY 19'S GRILLED LOBSTER & ROSEMARY POTATOES",
    category: 'entrees',
    price: 'KSH. 1000/=',
    description: 'Succulent grilled lobster tail basted with garlic butter, served alongside hot rosemary roasted potatoes.',
    tags: ['Lobster Shell', 'Garlic Butter', 'Rosemary Potatoes'],
    image: grilledLobsterImg
  },

  // Section 4: Fillets & Local Catch
  {
    id: 'flyer-16',
    name: "PiNKeY 19'S ENGLISH STYLE FISH",
    category: 'entrees',
    price: 'KSH. 1000/=',
    description: 'Smooth Butter Deep Fried Fish Fillet. Served with Rosemary Potatoes and Tartar Sauce.',
    tags: ['English Style', 'Crispy Fillet'],
    image: grilledFishFilletImg
  },
  {
    id: 'flyer-17',
    name: "PiNKeY 19'S GRILLED KING PRAWN & COCONUT RICE",
    category: 'entrees',
    price: 'KSH. 1000/=',
    description: 'Flame-grilled butterfly king prawns served on a generous bed of Swahili coconut rice with garlic butter sauce.',
    tags: ['Butterfly Prawn', 'Spicy Garlic', 'Coconut Rice'],
    image: grilledKingPrawnImg
  },
  {
    id: 'flyer-18',
    name: "PiNKeY 19'S GRILLED FISH FILLET",
    category: 'entrees',
    price: 'KSH. 1000/=',
    description: 'In Lemon, Soy Ginger Marinated Catch of the Day Grilled to Perfection. Served with Calamari Rings and Salad.',
    tags: ['Ginger Soy', 'Grilled'],
    image: grilledFishFilletImg
  },
  {
    id: 'flyer-19',
    name: 'CALAMARI ALA ROSA',
    category: 'starters',
    price: 'KSH. 1000/=',
    description: 'Stir Fresh Calamari Rings. Served with Rosemary Potatoes.',
    tags: ['Stir Fried'],
    image: calamariImg
  }
];

// 2. Coastal Activities Offered
const activities: Activity[] = [
  {
    id: 'act-1',
    name: '2 Hours Glass Boat Ride to Robinson Island',
    price: 'KSH. 2,000',
    description: 'Explore the coral reef, feed the fish, and enjoy beautiful ocean views from our signature glass-bottom boat.',
    badge: 'Popular',
    image: glassBoatRobinsonImg
  },
  {
    id: 'act-2',
    name: 'African Pool Adventure',
    price: 'KSH. 1,500',
    description: 'Snorkel at the famous African Pool and venture onto the natural sand formation shaped like the map of Africa.',
    badge: 'Snorkeling',
    image: africanPoolAdventureImg
  },
  {
    id: 'act-3',
    name: '1 Day Trip to Wasini Island',
    price: 'KSH. 8,000',
    description: 'Full-day excursion in Kisite Marine Park. Snorkeling, dolphin watching & swimming, learning Wasini traditions, and visiting Kisite-Mpunguti Marine Park.',
    badge: 'Full Day',
    image: wasiniIslandImg
  },
  {
    id: 'act-4',
    name: '1 Day Trip to Shimbahill Park',
    price: 'KSH. 7,000',
    description: 'Wildlife viewing, scenic nature trails, beautiful waterfalls, and a fresh forest atmosphere at Shimba Hills.',
    badge: 'Nature',
    image: shimbaHillsImg
  },
  {
    id: 'act-5',
    name: 'Sunset at the Congo River',
    price: 'KSH. 1,500',
    description: 'Relax on a sailing dhow boat at the beautiful Congo River while enjoying a magical sunset experience.',
    badge: 'Sunset',
    image: sunsetCongoRiverImg
  },
  {
    id: 'act-6',
    name: 'Village Retreat Experience',
    price: 'KSH. 5,000',
    description: 'Experience local culture, village life, and authentic Mijikenda coastal traditions on a guided village tour.',
    badge: 'Cultural',
    image: villageRetreatImg
  },
  {
    id: 'act-7',
    name: 'Diani City Tour',
    price: 'KSH. 2,000',
    description: 'Explore the beauty, lifestyle, shopping spots, and hidden gems of Diani Beach town.',
    badge: 'City Tour',
    image: dianiCityTourImg
  },
  {
    id: 'act-8',
    name: 'Snorkeling + Snacks Package',
    price: 'KSH. 2,000',
    description: 'Go snorkeling at Robinson Island accompanied by fresh tropical snacks and beverages.',
    badge: 'Adventure',
    image: snorkelingSnacksImg
  },
  {
    id: 'act-9',
    name: 'Bonfire + Seafood Platter',
    price: 'KSH. 4,200',
    description: 'A warm beach bonfire under the stars paired with a rich, delicious grilled seafood platter.',
    badge: 'Dining',
    image: 'https://images.unsplash.com/photo-1561490497-43bc960ac988?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'act-10',
    name: 'Sunset Walk',
    price: 'KSH. 2,500',
    description: 'Walk along the beautiful sandy shoreline of Diani Beach as the sun sets over the ocean.',
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'act-11',
    name: 'Wasini & Robinson Island Boat Ride Experience',
    price: 'KSH. 27,000',
    description: 'Full Board Package including a custom boat ride, snorkeling, seafood meals, drinks, and a personal tour guide.',
    badge: 'Premium',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'act-12',
    name: 'Nairobi ⇄ Mombasa Transport Shuttle',
    price: 'KSH. 3,000',
    description: 'Safe, comfortable, and reliable transport shuttle service running between Nairobi and Mombasa. Price is per person.',
    badge: 'Transport',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80'
  }
];

// 3. Cottages Accommodation
const cottages: Cottage[] = [
  {
    id: 'cot-1',
    name: 'Studio Sleeping Package',
    beds: 1,
    price: 'KSH. 2,000',
    description: 'A cozy and modern 1-bedroom escape featuring beautiful Swahili furnishings, a private en-suite bathroom, high-speed Wi-Fi, and cooling air conditioning. (Minimum 2 nights: KSH. 4,000 total)',
    amenities: ['1 Queen Bed', 'En-suite Bathroom', 'Air Conditioning', 'Free Wi-Fi', 'Garden View', 'Room Service'],
    image: studioRoomImg
  },
  {
    id: 'cot-2',
    name: '1-Bedroom Apartment',
    beds: 1,
    price: 'KSH. 15,000',
    description: 'Elegant and spacious 1-bedroom apartment offering premium coastal comfort, a private living space, fully equipped en-suite amenities, and scenic balcony access. Ideal for private retreats.',
    amenities: ['1 King Bed', 'Spacious Living Area', 'En-suite Bathroom', 'Scenic Balcony', 'Air Conditioning', 'Free Wi-Fi'],
    image: oneBedroomApartmentImg
  },
  {
    id: 'cot-3',
    name: '3-Bedroom House',
    beds: 3,
    price: 'KSH. 20,000',
    description: 'A stunning, fully-furnished 3-bedroom family holiday house. Offers a spacious lounge, a private kitchen, beautiful veranda seating, and quick access to Diani Beach. Perfect for families or groups.',
    amenities: ['3 Queen Beds', 'Full Kitchen', 'Private Veranda', 'Spacious Lounge', 'Air Conditioning', 'Free Wi-Fi'],
    image: threeBedroomHouseImg
  },
  {
    id: 'cot-4',
    name: 'VIP Luxury Package',
    beds: 4,
    price: 'KSH. 12,500',
    description: 'The ultimate luxury coastal retreat. A magnificent 4-bedroom private villa featuring expansive living spaces, private lounge areas, stunning coastal views, and dedicated premium service. (Minimum 2 nights: KSH. 25,000 total)',
    amenities: ['4 King Beds', 'Luxury Lounge', 'Expansive Terrace', 'Dedicated Service', 'Full Air Conditioning', 'Free Wi-Fi'],
    image: privateVillaImg
  }
];

const testimonials: Testimonial[] = [
  {
    quote: "The Swahili Seafood Platter at Pinkey 19 was outstanding—so fresh and cooked to perfection. Combined with our stay at the Double Bed Cottage, it was the perfect Diani escape!",
    stars: 5,
    author: "Grace Mwangi",
    role: "Nairobi, Kenya"
  },
  {
    quote: "A must-visit in Diani! We booked the Glass Boat Snorkeling and the Sunset Cruise. Friendly guides, beautiful marine life, and the grilled lobster was delicious.",
    stars: 5,
    author: "Liam & Sophia",
    role: "Travelers from Germany"
  },
  {
    quote: "The Kaya Kinondo tour was spiritually moving, and coming back to Pinkey for a cold drink and curry octopus made my holiday. Highly recommended!",
    stars: 5,
    author: "Jared Omondi",
    role: "Mombasa, Kenya"
  }
];

// Initialise DOM Content
const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <!-- Navigation -->
  <header id="navbar">
    <div class="container nav-container">
      <a href="#home" class="logo-link">
        <img src="${logoImg}" alt="PiNKeY 19 Property and Excursions Logo">
        <span>PiNKeY 19 Property and Excursions</span>
      </a>
      <ul class="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#menu">Restaurant Menu</a></li>
        <li><a href="#cottages">Cottages</a></li>
        <li><a href="#activities">Activities</a></li>
        <li><a href="#transport">Transport</a></li>
        <li><a href="#reservation">Bookings</a></li>
      </ul>
      <div class="nav-actions">
        <button id="theme-toggle" class="theme-toggle-btn" aria-label="Toggle dark theme" title="Toggle theme">
          <svg id="theme-icon-dark" class="hidden" viewBox="0 0 24 24"><path d="M12.3 22h-.1c-5.5 0-10-4.5-10-10 0-4.8 3.5-8.9 8.2-9.8.5-.1 1 .2 1.1.7.1.5-.2 1-.7 1.1-3.6.7-6.2 3.8-6.2 7.7 0 4.4 3.6 8 8 8 3.9 0 7-2.6 7.7-6.2.1-.5.6-.8 1.1-.7.5.1.8.6.7 1.1-.9 4.7-5 8.2-9.8 8.2z"/></svg>
          <svg id="theme-icon-light" class="hidden" viewBox="0 0 24 24"><path d="M12 7c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm0-10c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1s-1 .4-1 1v1c0 .6.4 1 1 1zm0 14c-.6 0-1 .4-1 1v1c0 .6.4 1 1 1s1-.4 1-1v-1c0-.6-.4-1-1-1zm8.5-7.5c0-.6-.4-1-1-1h-1c-.6 0-1 .4-1 1s.4 1 1 1h1c.6 0 1-.4 1-1zM5.5 12c0-.6-.4-1-1-1h-1c-.6 0-1 .4-1 1s.4 1 1 1h1c.6 0 1-.4 1-1zm12.6-6.1c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l.7.7c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4l-.7-.7zm-12.1 12c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l.7.7c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4l-.7-.7zm12.1 0l.7.7c.4.4 1 .4 1.4 0s.4-1 0-1.4l-.7-.7c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4zm-12.1-12.7l-.7.7c-.4.4-.4 1 0 1.4.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4l-.7-.7c-.4-.4-1-.4-1.4 0z"/></svg>
        </button>
        <a href="#reservation" class="btn btn-accent btn-sm">Book Escape</a>
        <button id="mobile-menu-btn" class="mobile-toggle" aria-label="Toggle navigation">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16m-7 6h7"/></svg>
        </button>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <section id="home" class="hero-section">
    <div class="container hero-grid">
      <div class="hero-content">
        <span class="hero-tagline">Welcome to PiNKeY 19 Property and Excursions</span>
        <h1>Seafood, Cozy Cottages & Tours</h1>
        <p>Experience the ultimate Diani getaway at PiNKeY 19 Property and Excursions. Enjoy our fresh Swahili seafood recipes, relax in premium oceanfront cottages, and embark on thrilling outdoor excursions in coastal Kenya.</p>
        <div class="hero-buttons">
          <a href="#menu" class="btn btn-primary">Our Menu</a>
          <a href="#cottages" class="btn btn-secondary">Cottages</a>
          <a href="#activities" class="btn btn-accent">Activities</a>
        </div>
      </div>
      <div class="hero-visual">
        <div class="hero-image-wrapper">
          <img src="${heroDishImg}" alt="Signature Swahili Platter at Pinkey 19">
        </div>
        <div class="badge-float">
          <div class="icon">🌴</div>
          <div class="text">
            <h4>Diani Beach, Kenya</h4>
            <p>Your coastal holiday haven</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- About Section -->
  <section id="about" class="about-section">
    <div class="container about-grid">
      <div class="about-visual">
        <img class="about-img about-img-1" src="${oystersImg}" alt="Coastal Snorkeling trip">
        <img class="about-img about-img-2" src="${crabImg}" alt="Luxury cottages at Pinkey Diani">
        <div class="about-experience">
          <h3>Kaya</h3>
          <p>Local Culture & Tours</p>
        </div>
      </div>
      <div class="about-content">
        <span class="hero-tagline">About PiNKeY 19 Property and Excursions</span>
        <h2 class="section-title">Coastal Cuisine, Comfort & Adventure</h2>
        <p>PiNKeY 19 Property and Excursions is your all-in-one getaway destination in Diani Beach. We started as the renowned <strong>PiNKeY 19 Seafood Restaurant</strong>, serving the freshest marine catches grilled with Swahili garlic butter and local coconut seasonings.</p>
        <p>Today, we invite you to escape completely. Stay in our beautiful cottages, dine on our legendary menu, and book customized coastal activities—ranging from glass boat snorkeling and mangrove walks to deep sea fishing and community village tours.</p>
        <div class="features-grid">
          <div class="feature-item">
            <div class="feature-icon">🏠</div>
            <h4>Cozy Cottages</h4>
            <p>Comfortable single & double bed escapes steps from the beach.</p>
          </div>
          <div class="feature-item">
            <div class="feature-icon">🛶</div>
            <h4>Tours & Excursions</h4>
            <p>11 specific guided local tours, boat rides, and watersports.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Menu Section -->
  <section id="menu" class="menu-section collapsed-state">
    <div class="container">
      <div class="menu-header">
        <span class="hero-tagline">Restaurant Menu</span>
        <h2 class="section-title">PiNKeY 19 Seafood Recipes</h2>
        <p style="text-align: center; max-width: 600px; margin: -0.5rem auto 2rem;">Fresh marine catches grilled or prepared in rich local curries. All prices in Kenyan Shillings (KSH).</p>
        <div class="mobile-menu-toggle-wrapper">
          <button id="mobile-menu-toggle-btn" class="btn btn-primary" type="button">Browse Full Menu (19 Items) ↓</button>
        </div>
        <div class="menu-tabs">
          <button class="tab-btn active" data-category="all">All Dishes</button>
          <button class="tab-btn" data-category="starters">Starters & Calamari</button>
          <button class="tab-btn" data-category="entrees">Mains & Curries</button>
          <button class="tab-btn" data-category="platters">Swahili Platters</button>
        </div>
      </div>
      <div id="menu-grid" class="menu-grid">
        <!-- Dynamic Cards Load Here -->
      </div>
    </div>
  </section>

  <!-- Cottages Section (New) -->
  <section id="cottages" class="about-section" style="background-color: var(--bg-card);">
    <div class="container">
      <div class="menu-header">
        <span class="hero-tagline">Coastal Accommodation</span>
        <h2 class="section-title">Cozy Beachfront Cottages</h2>
        <p style="text-align: center; max-width: 600px; margin: -0.5rem auto 3rem;">Relax in comfort. Choose between our single or double bed cottages, designed with local Swahili style and modern amenities.</p>
      </div>
      <div class="cottages-grid">
        <!-- Dynamic Cottages Load Here -->
      </div>
    </div>
  </section>

  <!-- Activities Section (New) -->
  <section id="activities" class="menu-section collapsed-state">
    <div class="container">
      <div class="menu-header">
        <span class="hero-tagline">Tours & Sports</span>
        <h2 class="section-title">Coastal Activities & Adventures</h2>
        <p style="text-align: center; max-width: 600px; margin: -0.5rem auto 3rem;">Make memories. Book from our curated list of 11 Diani excursions, walks, boat trips, and water experiences.</p>
        <div class="mobile-activities-toggle-wrapper">
          <button id="mobile-activities-toggle-btn" class="btn btn-primary" type="button">Explore Activities (11 Options) ↓</button>
        </div>
      </div>
      <div class="activities-grid">
        <!-- Dynamic Activities Load Here -->
      </div>
    </div>
  </section>

  <!-- Transport Section -->
  <section id="transport" class="about-section" style="background-color: var(--bg-card); border-top: 1px solid var(--border-light);">
    <div class="container">
      <div class="menu-header">
        <span class="hero-tagline">Safe & Reliable Travel</span>
        <h2 class="section-title">Coastal Transport Facilities</h2>
        <p style="text-align: center; max-width: 600px; margin: -0.5rem auto 3rem;">Pinkey offers secure, comfortable, and air-conditioned shuttle transfers between Nairobi and Mombasa. Sit back and enjoy a smooth, worry-free ride.</p>
      </div>
      
      <div class="transport-grid">
        <div class="transport-visual">
          <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80" alt="PiNKeY 19 Luxury Transport Shuttle Van">
          <div class="transport-badge">
            <span class="badge-icon">🚐</span>
            <div>
              <h4>Premium Shuttle</h4>
              <p>Safe • Comfortable • Reliable</p>
            </div>
          </div>
        </div>
        
        <div class="transport-content">
          <div class="transport-header-row">
            <span class="transport-tag">Shuttle Service</span>
            <span class="transport-price">KES 3,000 <small>per person</small></span>
          </div>
          <h3>Nairobi ⇄ Mombasa Transport Shuttle</h3>
          <p>Whether you are arriving for a relaxing stay at our coastal cottages or planning a day of marine excursions, we ensure your journey is seamless. Our door-to-door transfer shuttles run regularly, featuring spacious seating, high-power cooling AC, and certified professional drivers who know the coastal highway inside out.</p>
          
          <ul class="transport-features">
            <li>
              <span class="feature-icon-check">✔</span>
              <div>
                <strong>Safe & Fully Insured:</strong>
                <span>Regular mechanical inspections and full transit insurance.</span>
              </div>
            </li>
            <li>
              <span class="feature-icon-check">✔</span>
              <div>
                <strong>Comfortable Rides:</strong>
                <span>Modern air conditioning, adjustable seats, and phone chargers.</span>
              </div>
            </li>
            <li>
              <span class="feature-icon-check">✔</span>
              <div>
                <strong>Reliable Scheduled Pickups:</strong>
                <span>Punctual departures and direct drop-offs at your destination.</span>
              </div>
            </li>
            <li>
              <span class="feature-icon-check">✔</span>
              <div>
                <strong>WhatsApp Group Sync:</strong>
                <span>Live coordinates and real-time updates from your driver.</span>
              </div>
            </li>
          </ul>
          
          <button id="book-shuttle-cta" class="btn btn-accent btn-book-shuttle" type="button">Book Transport Shuttle →</button>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonials Section -->
  <section id="testimonials" class="testimonials-section">
    <div class="container">
      <span class="hero-tagline">Client Reviews</span>
      <h2 class="section-title">Loved by Travelers</h2>
      <div class="testimonial-container">
        <div class="quote-icon">“</div>
        <div class="testimonial-wrapper">
          <div id="testimonial-slider" class="testimonial-slider">
            <!-- Dynamic Testimonials Load Here -->
          </div>
        </div>
        <div id="testimonial-dots" class="testimonial-dots">
          <!-- Dynamic Dots Load Here -->
        </div>
      </div>
    </div>
  </section>

  <!-- Reservations Section -->
  <section id="reservation" class="reservation-section">
    <div class="container">
      <div class="menu-header">
        <span class="hero-tagline">Plan Your Escape</span>
        <h2 class="section-title">Bookings & Escape Planner</h2>
        <p style="text-align: center; max-width: 600px; margin: -0.5rem auto 3rem;">Build your perfect getaway. Select cottages, add coastal activities, and see your customized plan and live total in real-time.</p>
      </div>
      
      <form id="booking-form" class="booking-planner-form" novalidate>
        <div class="planner-layout">
          <!-- Column 1: Booking Info -->
          <div class="planner-column info-column">
            <div class="planner-card">
              <h3 class="planner-card-title">1. Guest Information</h3>
              <div class="form-row">
                <div class="form-group">
                  <label for="booking-name">Full Name *</label>
                  <input type="text" id="booking-name" required placeholder="John Doe">
                  <span class="form-error" id="error-name">Please enter your name</span>
                </div>
                <div class="form-group">
                  <label for="booking-email">Email Address *</label>
                  <input type="email" id="booking-email" required placeholder="john@example.com">
                  <span class="form-error" id="error-email">Please enter a valid email address</span>
                </div>
              </div>
              
              <div class="form-row">
                <div class="form-group">
                  <label for="booking-phone">Phone Number (WhatsApp Preferred) *</label>
                  <input type="tel" id="booking-phone" required placeholder="0740915426">
                  <span class="form-error" id="error-phone">Please enter your phone number</span>
                </div>
                <div class="form-group">
                  <label for="booking-guests">Party Size (Base) *</label>
                  <select id="booking-guests" required>
                    <option value="1">1 Person</option>
                    <option value="2" selected>2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="5">5 People</option>
                    <option value="6">6 People</option>
                    <option value="7">7 People</option>
                    <option value="8">8+ People</option>
                  </select>
                  <span class="form-error" id="error-guests">Please select quantity</span>
                </div>
              </div>
            </div>
            
            <div class="planner-card">
              <h3 class="planner-card-title">2. Escape Dates & Schedules</h3>
              
              <div class="date-group-header">🏡 Cottage Stay Dates <span class="header-note">(Required if booking a cottage)</span></div>
              <div class="form-row">
                <div class="form-group">
                  <label for="cottage-checkin">Check-in Date</label>
                  <input type="date" id="cottage-checkin">
                  <span class="form-error" id="error-cottage-checkin">Please pick a future check-in date</span>
                </div>
                <div class="form-group">
                  <label for="cottage-checkout">Check-out Date</label>
                  <input type="date" id="cottage-checkout">
                  <span class="form-error" id="error-cottage-checkout">Check-out must be after check-in</span>
                </div>
              </div>
              
              <div class="date-group-divider"></div>
              
              <div class="date-group-header">🛶 Excursions & Dining Schedule</div>
              <div class="form-row">
                <div class="form-group">
                  <label for="activity-date">Activity Date</label>
                  <input type="date" id="activity-date">
                  <span class="form-error" id="error-activity-date">Please pick a future date</span>
                </div>
                <div class="form-group">
                  <label for="dining-time">Optional Dining Time <span class="header-note">(Book min 1hr prior)</span></label>
                  <select id="dining-time">
                    <option value="" selected>Not Dining / Select Time</option>
                    <option value="12:00">12:00 PM (Lunch)</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="17:00">5:00 PM</option>
                    <option value="18:00">6:00 PM (Sunset)</option>
                    <option value="19:00">7:00 PM (Dinner)</option>
                    <option value="20:00">8:00 PM</option>
                    <option value="21:00">9:00 PM</option>
                  </select>
                  <span class="form-error" id="error-dining-time">Dining must be booked at least 1 hour in advance</span>
                </div>
              </div>
            </div>
            
            <div class="planner-card">
              <h3 class="planner-card-title">3. Special Requests</h3>
              <div class="form-group" style="margin-bottom: 0;">
                <label for="booking-notes">Notes, Dietary Rules or Room Requests</label>
                <textarea id="booking-notes" placeholder="E.g., twin bed preferences, child rate inquiries, extra mattress needs, allergies..."></textarea>
              </div>
            </div>
            
            <!-- Contact Details Card -->
            <div class="planner-card contact-brief-card">
              <h3>Direct Contacts</h3>
              <p>Prefer direct booking? Connect with us:</p>
              <a href="tel:+254740915426" class="brief-contact-link">
                <svg class="contact-svg-icon" viewBox="0 0 24 24" style="width: 20px; height: 20px; flex-shrink: 0;" fill="currentColor">
                  <path fill="#25D366" d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.982L2 22l5.233-1.371a9.936 9.936 0 0 0 4.779 1.22c5.507 0 9.99-4.477 9.991-9.985C22.004 6.478 17.519 2 12.012 2zm5.833 13.914c-.242.682-1.221 1.245-1.68 1.298-.458.051-.9-.127-2.902-.927-2.571-1.025-4.214-3.64-4.341-3.81-.127-.171-1.037-1.377-1.037-2.628 0-1.251.656-1.865.89-2.112.233-.247.509-.308.68-.308.17 0 .341.002.489.009.157.008.367-.06.574.453.213.529.729 1.776.793 1.908.064.13.106.284.021.455-.085.171-.127.284-.255.44-.128.156-.27.348-.383.467-.128.135-.262.282-.113.537.15.255.662 1.092 1.417 1.763.973.865 1.792 1.133 2.047 1.261.255.127.404.106.553-.064.15-.17.638-.742.809-.997.17-.255.34-.213.574-.127.234.085 1.488.701 1.743.829.255.128.425.191.489.302.064.111.064.646-.178 1.328z"/>
                </svg>
                Call/WhatsApp: +254 740915426
              </a>
              <a href="https://www.instagram.com/pinkey19seafoodrestaurant?igsh=MXg3azFyOXRuM3hhYg==" target="_blank" rel="noopener noreferrer" class="brief-contact-link">
                <svg class="contact-svg-icon" viewBox="0 0 24 24" style="width: 20px; height: 20px; flex-shrink: 0;" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <radialGradient id="ig-grad" cx="30%" cy="107%" r="130%" fx="30%" fy="107%">
                      <stop offset="0%" stop-color="#fdf497" />
                      <stop offset="5%" stop-color="#fdf497" />
                      <stop offset="45%" stop-color="#fd5949" />
                      <stop offset="60%" stop-color="#d6249f" />
                      <stop offset="90%" stop-color="#285AEB" />
                    </radialGradient>
                  </defs>
                  <rect x="2" y="2" width="20" height="20" rx="5" fill="url(#ig-grad)" />
                  <rect x="5.5" y="5.5" width="13" height="13" rx="3.5" stroke="white" stroke-width="1.5" fill="none" />
                  <circle cx="12" cy="12" r="3" stroke="white" stroke-width="1.5" fill="none" />
                  <circle cx="15.75" cy="8.25" r="0.75" fill="white" />
                </svg>
                Instagram: @pinkey19seafoodrestaurant
              </a>
              <a href="mailto:escapes@pinkeydianiescapes.com" class="brief-contact-link">
                <svg class="contact-svg-icon" viewBox="0 0 24 24" style="width: 20px; height: 20px; flex-shrink: 0;" fill="none" stroke="#ea4335" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                Email: escapes@pinkeydianiescapes.com
              </a>
            </div>
          </div>
          
          <!-- Column 2: Cart Selection & Live Invoice -->
          <div class="planner-column cart-column">
            <!-- Cottage Cart Selection -->
            <div class="planner-card cottage-selector-card collapsed-state">
              <h3 class="planner-card-title cottage-toggle-title">
                <span>🏡 Select Cottages</span>
                <span class="mobile-accordion-arrow">▼</span>
              </h3>
              <div class="cart-cottages-grid">
                <!-- Dynamically Rendered Cottages Selection Cards -->
              </div>
            </div>
            
            <!-- Activity Cart Selection -->
            <div class="planner-card activity-selector-card collapsed-state">
              <h3 class="planner-card-title activity-toggle-title">
                <span>🛶 Select Excursions & Transport</span>
                <span class="mobile-accordion-arrow">▼</span>
              </h3>
              <div class="cart-activities-grid">
                <!-- Dynamically Rendered Activities Selection Cards -->
              </div>
            </div>
            
            <!-- Live Cart Summary & Receipt -->
            <div id="live-cart-card" class="planner-card live-cart-card">
              <h3 class="planner-card-title" style="color: var(--accent-gold); display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem;">
                <span>🛒 Your Escape Summary</span>
                <span class="live-pulse">● Live</span>
              </h3>
              
              <div id="cart-summary-items" class="cart-summary-items">
                <div class="cart-empty-message">No cottages or activities selected yet. Select items above to calculate your custom package!</div>
              </div>
              
              <div class="cart-pricing-summary">
                <div class="cart-total-line">
                  <span>Grand Total:</span>
                  <strong id="cart-grand-total">KSH. 0</strong>
                </div>
                
                <div class="cart-policy-box">
                  <div class="policy-header">💳 Payment & Refund Terms</div>
                  <div class="policy-item highlight">
                    <span>Upfront Deposit (50%):</span>
                    <strong id="cart-deposit-total">KSH. 0</strong>
                  </div>
                  <div class="policy-divider"></div>
                  <div class="policy-item">
                    <span>Refund upon Cancellation (40% of Total):</span>
                    <strong id="cart-refund-total" style="color: #4caf50;">KSH. 0</strong>
                  </div>
                  <div class="policy-item">
                    <span>Non-Refundable Service Fee (10% of Total):</span>
                    <strong id="cart-fee-total" style="color: var(--accent-coral);">KSH. 0</strong>
                  </div>
                  <p class="policy-note">⚠️ Note: If you cancel, 40% of the total amount (80% of your deposit) is refunded, and 10% of the total amount (20% of your deposit) is retained as a service cost. Price-on-inquiry tours are excluded from immediate totals.</p>
                </div>
              </div>
              
              <button type="submit" class="btn btn-primary btn-submit-cart" style="width: 100%; margin-top: 1.5rem;">Book and Confirm on WhatsApp →</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </section>

  <!-- Footer -->
  <footer>
    <div class="container footer-grid">
      <div class="footer-col">
        <a href="#home" class="footer-brand">
          <img src="${logoImg}" alt="PiNKeY 19 Property and Excursions Logo">
          <span>PiNKeY 19 Property and Excursions</span>
        </a>
        <p>Exquisite fine dining seafood at PiNKeY 19, premium cottages, and cultural guided excursions in Diani Beach, Kenya.</p>
        <div class="social-links">
          <a href="#" class="social-btn" aria-label="Facebook">
            <svg style="width: 20px; height: 20px; fill: currentColor;" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href="https://www.instagram.com/pinkey19seafoodrestaurant?igsh=MXg3azFyOXRuM3hhYg==" target="_blank" rel="noopener noreferrer" class="social-btn" aria-label="Instagram">
            <svg style="width: 20px; height: 20px; fill: currentColor;" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
          </a>
          <a href="https://wa.me/254740915426" target="_blank" rel="noopener noreferrer" class="social-btn" aria-label="WhatsApp">
            <svg style="width: 20px; height: 20px; fill: currentColor;" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.731-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.864.001-2.637-1.03-5.114-2.905-6.989-1.873-1.873-4.351-2.903-6.985-2.903-5.438 0-9.864 4.42-9.867 9.867-.001 1.757.469 3.473 1.362 5.021L1.9 22.183l6.09-1.599zM15.97 12.984c-.213-.107-1.264-.624-1.46-.695-.196-.072-.34-.107-.484.108-.144.214-.557.695-.683.837-.127.143-.253.161-.466.054-.213-.107-.9-.332-1.716-1.058-.635-.566-1.064-1.266-1.189-1.48-.125-.213-.013-.328.093-.434.096-.095.213-.249.32-.374.107-.124.143-.213.213-.356.072-.143.036-.268-.018-.374-.054-.107-.484-1.168-.663-1.597-.174-.419-.347-.362-.484-.369-.125-.007-.268-.007-.41-.007-.143 0-.377.054-.573.268-.197.213-.751.734-.751 1.79 0 1.057.769 2.078.877 2.22 1.062 1.487 2.222 2.222 3.822 2.222 1.258 0 2.222-.44 2.822-1.058.468-.484.774-1.026.852-1.52.078-.494-.047-.945-.26-1.052z"/></svg>
          </a>
        </div>
      </div>
      
      <div class="footer-col">
        <h4>Discover</h4>
        <ul>
          <li><a href="#about">About Our Stays</a></li>
          <li><a href="#menu">PiNKeY 19 Menu</a></li>
          <li><a href="#activities">Coastal Tours</a></li>
          <li><a href="#reservation">Make Booking</a></li>
        </ul>
      </div>
      
      <div class="footer-col">
        <h4>Legal & Rules</h4>
        <ul>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Cottage Rules</a></li>
          <li><a href="#">Cancellation Terms</a></li>
          <li><a href="#">Allergens Directory</a></li>
        </ul>
      </div>
      
      <div class="footer-col">
        <h4>Contact Hotline</h4>
        <p>Get in touch via Call or WhatsApp for direct room reservations and activity group discount rates:</p>
        <p style="font-size: 1.25rem; font-weight: 700; color: var(--accent-ocean); margin-top: 0.5rem; display: inline-flex; align-items: center; gap: 0.5rem;">
          <svg viewBox="0 0 24 24" style="width: 24px; height: 24px; fill: currentColor;" aria-hidden="true">
            <path d="M6.62 10.79a15.15 15.15 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.48 11.48 0 003.77.6 1 1 0 011 1V20a1 1 0 01-1 1A16 16 0 013 5a1 1 0 011-1h3.5a1 1 0 011 1 11.48 11.48 0 00.6 3.77 1 1 0 01-.27 1.11z"/>
          </svg>
          0740915426
        </p>
      </div>
    </div>
    
    <div class="container footer-bottom">
      <p>&copy; ${new Date().getFullYear()} PiNKeY 19 Property and Excursions. All rights reserved.</p>
      <div class="footer-bottom-links">
        <a href="#">Diani, Kenya</a>
        <a href="#">Sitemap</a>
      </div>
    </div>
  </footer>

  <!-- Modal Overlay -->
  <div id="success-modal" class="modal-overlay">
    <div class="modal-content">
      <div class="modal-success-icon">✓</div>
      <h3>Booking Request Sent!</h3>
      <p id="modal-summary-text">Your request has been received. We will contact you back via Phone/WhatsApp shortly!</p>
      <button id="modal-close-btn" class="btn btn-primary" style="min-width: 120px;">Done</button>
    </div>
  </div>
`;

// Helper: Get HTML Elements safely
const header = document.querySelector<HTMLElement>('#navbar')!;
const mobileMenuBtn = document.querySelector<HTMLButtonElement>('#mobile-menu-btn')!;
const themeToggleBtn = document.querySelector<HTMLButtonElement>('#theme-toggle')!;
const themeIconDark = document.querySelector<SVGElement>('#theme-icon-dark')!;
const themeIconLight = document.querySelector<SVGElement>('#theme-icon-light')!;
const menuGrid = document.querySelector<HTMLDivElement>('#menu-grid')!;
const tabBtns = document.querySelectorAll<HTMLButtonElement>('.tab-btn');
const bookingForm = document.querySelector<HTMLFormElement>('#booking-form')!;
const successModal = document.querySelector<HTMLDivElement>('#success-modal')!;
const modalCloseBtn = document.querySelector<HTMLButtonElement>('#modal-close-btn')!;

// Cottage & Activities Grid Elements
const cottagesGrid = document.querySelector<HTMLDivElement>('.cottages-grid')!;
const activitiesGrid = document.querySelector<HTMLDivElement>('.activities-grid')!;

// ----------------------------------------------------
// Cart State & Calculations Setup
// ----------------------------------------------------

interface CartState {
  cottages: { [id: string]: { selected: boolean; quantity: number } };
  activities: { [id: string]: { selected: boolean; participants: number; isNonCitizen?: boolean } };
}

const cart: CartState = {
  cottages: {},
  activities: {}
};

// Initialize Cart State dynamically
cottages.forEach(c => {
  let defaultQty = 1;
  if (c.id === 'cot-3') defaultQty = 3;
  if (c.id === 'cot-4') defaultQty = 4;
  cart.cottages[c.id] = { selected: false, quantity: defaultQty };
});

activities.forEach(a => {
  cart.activities[a.id] = { selected: false, participants: 2 };
});

// Price parser helper
const parsePrice = (priceStr: string): number => {
  if (priceStr.toLowerCase().includes('inquiry')) return 0;
  const cleaned = priceStr.replace(/[^0-9]/g, '');
  return cleaned ? parseInt(cleaned, 10) : 0;
};

// Nights calculator helper
const calculateNights = (checkin: string, checkout: string): number => {
  if (!checkin || !checkout) return 1;
  const start = new Date(checkin);
  const end = new Date(checkout);
  const diff = end.getTime() - start.getTime();
  return diff > 0 ? Math.ceil(diff / (1000 * 60 * 60 * 24)) : 1;
};

// Render cottages list inside the Booking Cart
const renderCartCottages = () => {
  const container = document.querySelector<HTMLDivElement>('.cart-cottages-grid');
  if (!container) return;
  
  container.innerHTML = cottages.map(c => {
    const isSelected = cart.cottages[c.id].selected;
    const qty = cart.cottages[c.id].quantity;
    
    let limitText = '';
    let disableQtyControl = false;
    if (c.id === 'cot-1' || c.id === 'cot-2') {
      limitText = ' (Max 1 room)';
      disableQtyControl = true;
    } else if (c.id === 'cot-3') {
      limitText = ' (Fixed 3 rooms)';
      disableQtyControl = true;
    } else if (c.id === 'cot-4') {
      limitText = ' (Fixed 4 rooms)';
      disableQtyControl = true;
    }
    
    return `
      <div class="cart-item-card cottage-cart-card ${isSelected ? 'active' : ''}" data-id="${c.id}">
        <div class="cart-item-header">
          <label class="cart-item-checkbox-wrapper">
            <input type="checkbox" class="cart-item-select" data-type="cottage" data-id="${c.id}" ${isSelected ? 'checked' : ''}>
            <span class="checkbox-custom"></span>
            <span class="cart-item-name">🏡 ${c.name}${limitText}</span>
          </label>
          <span class="cart-item-price">${c.price}/night</span>
        </div>
        ${isSelected ? `
          <div class="cart-item-controls">
            <div class="qty-control-row">
              <span class="control-label">Number of Rooms:</span>
              ${disableQtyControl ? `
                <span class="qty-locked-badge">${qty} Room${qty > 1 ? 's' : ''}</span>
              ` : `
                <div class="quantity-controller">
                  <button type="button" class="btn-qty btn-qty-minus" data-type="cottage" data-id="${c.id}">−</button>
                  <span class="qty-display">${qty}</span>
                  <button type="button" class="btn-qty btn-qty-plus" data-type="cottage" data-id="${c.id}">+</button>
                </div>
              `}
            </div>
          </div>
        ` : ''}
      </div>
    `;
  }).join('');
};

// Render activities list inside the Booking Cart
const renderCartActivities = () => {
  const container = document.querySelector<HTMLDivElement>('.cart-activities-grid');
  if (!container) return;
  
  container.innerHTML = activities.map(a => {
    const isSelected = cart.activities[a.id].selected;
    const qty = cart.activities[a.id].participants;
    
    return `
      <div class="cart-item-card activity-cart-card ${isSelected ? 'active' : ''}" data-id="${a.id}">
        <div class="cart-item-header">
          <label class="cart-item-checkbox-wrapper">
            <input type="checkbox" class="cart-item-select" data-type="activity" data-id="${a.id}" ${isSelected ? 'checked' : ''}>
            <span class="checkbox-custom"></span>
            <span class="cart-item-name">🛶 ${a.name}</span>
          </label>
          <span class="cart-item-price">${a.price}</span>
        </div>
        ${isSelected ? `
          <div class="cart-item-controls">
            <div class="qty-control-row">
              <span class="control-label">Participants:</span>
              <div class="quantity-controller">
                <button type="button" class="btn-qty btn-qty-minus" data-type="activity" data-id="${a.id}">−</button>
                <span class="qty-display">${qty}</span>
                <button type="button" class="btn-qty btn-qty-plus" data-type="activity" data-id="${a.id}">+</button>
              </div>
            </div>
          </div>
        ` : ''}
      </div>
    `;
  }).join('');
};

// Calculate and render live price summaries and deposit invoice details
const updateCartTotal = () => {
  const summaryItems = document.querySelector<HTMLDivElement>('#cart-summary-items');
  const grandTotalEl = document.querySelector<HTMLElement>('#cart-grand-total');
  const depositTotalEl = document.querySelector<HTMLElement>('#cart-deposit-total');
  const refundTotalEl = document.querySelector<HTMLElement>('#cart-refund-total');
  const feeTotalEl = document.querySelector<HTMLElement>('#cart-fee-total');
  
  if (!summaryItems || !grandTotalEl || !depositTotalEl || !refundTotalEl || !feeTotalEl) return;
  
  let total = 0;
  let detailsHtml = '';
  let selectedItemsCount = 0;
  
  const checkinVal = document.querySelector<HTMLInputElement>('#cottage-checkin')!.value;
  const checkoutVal = document.querySelector<HTMLInputElement>('#cottage-checkout')!.value;
  const nights = calculateNights(checkinVal, checkoutVal);
  
  // 1. Calculate Cottages
  cottages.forEach(c => {
    const item = cart.cottages[c.id];
    if (item && item.selected) {
      selectedItemsCount++;
      const pricePerNight = parsePrice(c.price);
      // Multiplier is 1 for whole-house rentals (3-bedroom and VIP villa), otherwise item.quantity
      const multiplier = (c.id === 'cot-3' || c.id === 'cot-4') ? 1 : item.quantity;
      const subtotal = pricePerNight * nights * multiplier;
      total += subtotal;
      
      detailsHtml += `
        <div class="cart-summary-item-line">
          <div class="summary-item-info">
            <span class="summary-emoji">🏡</span>
            <div>
              <div class="summary-item-title">${c.name}</div>
              <div class="summary-item-desc">${item.quantity} room${item.quantity > 1 ? 's' : ''} × ${nights} night${nights > 1 ? 's' : ''} stay</div>
            </div>
          </div>
          <div class="summary-item-price">KSH. ${subtotal.toLocaleString()}</div>
        </div>
      `;
    }
  });
  
  // 2. Calculate Activities
  activities.forEach(a => {
    const item = cart.activities[a.id];
    if (item && item.selected) {
      selectedItemsCount++;
      
      if (a.price.toLowerCase().includes('inquiry')) {
        detailsHtml += `
          <div class="cart-summary-item-line">
            <div class="summary-item-info">
              <span class="summary-emoji">🛶</span>
              <div>
                <div class="summary-item-title">${a.name}</div>
                <div class="summary-item-desc">${item.participants} participant${item.participants > 1 ? 's' : ''}</div>
              </div>
            </div>
            <div class="summary-item-price inquiry-tag">Inquiry Pending</div>
          </div>
        `;
      } else {
        const pricePerPerson = parsePrice(a.price);
        const subtotal = pricePerPerson * item.participants;
        total += subtotal;
        
        detailsHtml += `
          <div class="cart-summary-item-line">
            <div class="summary-item-info">
              <span class="summary-emoji">🛶</span>
              <div>
                <div class="summary-item-title">${a.name}</div>
                <div class="summary-item-desc">
                  ${item.participants} participant${item.participants > 1 ? 's' : ''} 
                </div>
              </div>
            </div>
            <div class="summary-item-price">KSH. ${subtotal.toLocaleString()}</div>
          </div>
        `;
      }
    }
  });
  
  // 3. Optional Dining Time Info
  const diningTimeVal = document.querySelector<HTMLSelectElement>('#dining-time')!.value;
  if (diningTimeVal) {
    selectedItemsCount++;
    detailsHtml += `
      <div class="cart-summary-item-line">
        <div class="summary-item-info">
          <span class="summary-emoji">🍽️</span>
          <div>
            <div class="summary-item-title">Restaurant Table Booking</div>
            <div class="summary-item-desc">Scheduled at ${diningTimeVal}</div>
          </div>
        </div>
        <div class="summary-item-price free-tag">Free Booking</div>
      </div>
    `;
  }
  
  if (selectedItemsCount === 0) {
    summaryItems.innerHTML = `<div class="cart-empty-message">No cottages or activities selected yet. Select items above to calculate your custom package!</div>`;
    grandTotalEl.innerText = `KSH. 0`;
    depositTotalEl.innerText = `KSH. 0`;
    refundTotalEl.innerText = `KSH. 0`;
    feeTotalEl.innerText = `KSH. 0`;
  } else {
    summaryItems.innerHTML = detailsHtml;
    grandTotalEl.innerText = `KSH. ${total.toLocaleString()}`;
    
    const deposit = total * 0.5;
    const refund = total * 0.4;
    const fee = total * 0.1;
    
    depositTotalEl.innerText = `KSH. ${deposit.toLocaleString()}`;
    refundTotalEl.innerText = `KSH. ${refund.toLocaleString()}`;
    feeTotalEl.innerText = `KSH. ${fee.toLocaleString()}`;
  }
};

// 1. Mobile Menu Toggle
mobileMenuBtn.addEventListener('click', () => {
  header.classList.toggle('nav-active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    header.classList.remove('nav-active');
  });
});

// Mobile Collapsible Menu and Activities Sections
const menuSection = document.querySelector('#menu')!;
const activitiesSection = document.querySelector('#activities')!;

const mobileMenuToggleBtn = document.querySelector('#mobile-menu-toggle-btn');
if (mobileMenuToggleBtn) {
  mobileMenuToggleBtn.addEventListener('click', () => {
    const isCollapsed = menuSection.classList.toggle('collapsed-state');
    mobileMenuToggleBtn.textContent = isCollapsed 
      ? 'Browse Full Menu (19 Items) ↓' 
      : 'Collapse Menu ↑';
  });
}

const mobileActivitiesToggleBtn = document.querySelector('#mobile-activities-toggle-btn');
if (mobileActivitiesToggleBtn) {
  mobileActivitiesToggleBtn.addEventListener('click', () => {
    const isCollapsed = activitiesSection.classList.toggle('collapsed-state');
    mobileActivitiesToggleBtn.textContent = isCollapsed 
      ? 'Explore Activities (11 Options) ↓' 
      : 'Collapse Activities ↑';
  });
}

// Accordion Toggles for Booking Cart on Mobile
document.querySelectorAll('.cottage-toggle-title').forEach(title => {
  title.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      const parent = title.closest('.cottage-selector-card');
      if (parent) parent.classList.toggle('collapsed-state');
    }
  });
});

document.querySelectorAll('.activity-toggle-title').forEach(title => {
  title.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      const parent = title.closest('.activity-selector-card');
      if (parent) parent.classList.toggle('collapsed-state');
    }
  });
});

// 2. Scroll Indicator Styling
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// 3. Theme Toggle Setup
const setTheme = (theme: 'dark' | 'light') => {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  if (theme === 'dark') {
    themeIconDark.style.display = 'none';
    themeIconLight.style.display = 'block';
  } else {
    themeIconDark.style.display = 'block';
    themeIconLight.style.display = 'none';
  }
};

const getPreferredTheme = (): 'dark' | 'light' => {
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme === 'dark' || storedTheme === 'light') return storedTheme;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

setTheme(getPreferredTheme());

themeToggleBtn.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  setTheme(currentTheme === 'dark' ? 'light' : 'dark');
});

// 4. Render Menu Cards
const renderMenu = (category: string) => {
  const filtered = category === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === category);

  menuGrid.style.opacity = '0';
  
  setTimeout(() => {
    menuGrid.innerHTML = filtered.map(item => {
      const dietBadges = item.tags.map(tag => `<span class="diet-badge">${tag}</span>`).join('');
      return `
        <div class="menu-card">
          <div class="menu-card-img">
            <img src="${item.image}" alt="${item.name}">
            ${item.tags.length ? `<div class="menu-card-diet">${dietBadges}</div>` : ''}
          </div>
          <div class="menu-card-content">
            <div class="menu-card-title-row">
              <h4 style="font-size: 1.05rem;">${item.name}</h4>
              <span class="menu-card-price" style="font-size: 1.15rem; color: var(--accent-coral); white-space: nowrap;">${item.price}</span>
            </div>
            <p style="margin-top: 0.5rem; font-size: 0.88rem;">${item.description}</p>
          </div>
        </div>
      `;
    }).join('');
    
    menuGrid.style.opacity = '1';
  }, 150);
};

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const category = btn.getAttribute('data-category') || 'all';
    renderMenu(category);
  });
});

renderMenu('all');

// 5. Render Cottages
const renderCottages = () => {
  if (!cottagesGrid) return;
  cottagesGrid.innerHTML = cottages.map(cot => `
    <div class="cottage-card">
      <div class="cottage-img-wrapper">
        <img src="${cot.image}" alt="${cot.name}">
        <span class="cottage-price-badge">${cot.price} / night</span>
      </div>
      <div class="cottage-content">
        <h3>${cot.name}</h3>
        <p>${cot.description}</p>
        <div class="cottage-amenities">
          ${cot.amenities.map(a => `<span class="amenity-tag">✓ ${a}</span>`).join('')}
        </div>
        <a href="#reservation" class="btn btn-primary cottage-book-btn" data-room="${cot.name}">Book Cottage</a>
      </div>
    </div>
  `).join('');

  // Add click listener to select cottage in cart and scroll
  document.querySelectorAll('.cottage-book-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const roomName = (e.currentTarget as HTMLButtonElement).getAttribute('data-room') || '';
      const foundCottage = cottages.find(c => c.name.toLowerCase().includes(roomName.toLowerCase()));
      if (foundCottage) {
        cart.cottages[foundCottage.id].selected = true;
        
        // Expand the selector card if collapsed on mobile
        const parentCard = document.querySelector('.cottage-selector-card');
        if (parentCard) parentCard.classList.remove('collapsed-state');
        
        renderCartCottages();
        updateCartTotal();
        
        // Scroll to reservation section
        const reservationSection = document.querySelector('#reservation')!;
        reservationSection.scrollIntoView({ behavior: 'smooth' });
        
        // Flash animation
        setTimeout(() => {
          const card = document.querySelector(`.cart-item-card[data-id="${foundCottage.id}"]`);
          if (card) {
            card.classList.add('pulse-highlight');
            setTimeout(() => card.classList.remove('pulse-highlight'), 2000);
          }
        }, 800);
      }
    });
  });
};

renderCottages();

// 6. Render Activities
const renderActivities = () => {
  if (!activitiesGrid) return;
  activitiesGrid.innerHTML = activities.map(act => `
    <div class="activity-card">
      <div class="activity-card-img">
        <img src="${act.image}" alt="${act.name}">
      </div>
      <div class="activity-card-content">
        <div class="activity-header-row">
          <span class="activity-badge-tag">${act.badge}</span>
          <span class="activity-price">${act.price}</span>
        </div>
        <h3>${act.name}</h3>
        <p>${act.description}</p>
        <a href="#reservation" class="activity-book-link" data-activity="${act.name}">Book Excursion →</a>
      </div>
    </div>
  `).join('');

  // Add click listener to select activity in cart and scroll
  document.querySelectorAll('.activity-book-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const actName = (e.currentTarget as HTMLAnchorElement).getAttribute('data-activity') || '';
      const foundAct = activities.find(a => a.name.toLowerCase().includes(actName.toLowerCase()));
      if (foundAct) {
        cart.activities[foundAct.id].selected = true;
        
        // Expand the selector card if collapsed on mobile
        const parentCard = document.querySelector('.activity-selector-card');
        if (parentCard) parentCard.classList.remove('collapsed-state');
        
        // Default participant count to current selected party size
        const partySize = parseInt(document.querySelector<HTMLSelectElement>('#booking-guests')!.value, 10);
        cart.activities[foundAct.id].participants = partySize;
        
        renderCartActivities();
        updateCartTotal();
        
        // Scroll to reservation section
        const reservationSection = document.querySelector('#reservation')!;
        reservationSection.scrollIntoView({ behavior: 'smooth' });
        
        // Flash animation
        setTimeout(() => {
          const card = document.querySelector(`.cart-item-card[data-id="${foundAct.id}"]`);
          if (card) {
            card.classList.add('pulse-highlight');
            setTimeout(() => card.classList.remove('pulse-highlight'), 2000);
          }
        }, 800);
      }
    });
  });
};

renderActivities();

// 6b. Bind Transport Shuttle Booking CTA
const bookShuttleBtn = document.querySelector('#book-shuttle-cta');
if (bookShuttleBtn) {
  bookShuttleBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // Transport Shuttle activity id is 'act-12'
    const transportAct = activities.find(a => a.id === 'act-12');
    if (transportAct) {
      cart.activities[transportAct.id].selected = true;
      
      // Expand the selector card if collapsed on mobile
      const parentCard = document.querySelector('.activity-selector-card');
      if (parentCard) parentCard.classList.remove('collapsed-state');
      
      // Default participant count to current selected party size
      const partySize = parseInt(document.querySelector<HTMLSelectElement>('#booking-guests')!.value, 10);
      cart.activities[transportAct.id].participants = partySize;
      
      renderCartActivities();
      updateCartTotal();
      
      // Scroll to reservation section
      const reservationSection = document.querySelector('#reservation')!;
      reservationSection.scrollIntoView({ behavior: 'smooth' });
      
      // Flash animation
      setTimeout(() => {
        const card = document.querySelector(`.cart-item-card[data-id="${transportAct.id}"]`);
        if (card) {
          card.classList.add('pulse-highlight');
          setTimeout(() => card.classList.remove('pulse-highlight'), 2000);
        }
      }, 800);
    }
  });
}

// 7. Testimonials
const renderTestimonials = () => {
  const slider = document.querySelector<HTMLDivElement>('#testimonial-slider')!;
  const dotsContainer = document.querySelector<HTMLDivElement>('#testimonial-dots')!;
  if (!slider || !dotsContainer) return;

  slider.innerHTML = testimonials.map((t, idx) => `
    <div class="testimonial-slide ${idx === 0 ? 'active' : ''}">
      <div class="testimonial-stars">${'★'.repeat(t.stars)}</div>
      <p class="testimonial-text">"${t.quote}"</p>
      <div class="testimonial-author">
        <h4>${t.author}</h4>
        <p>${t.role}</p>
      </div>
    </div>
  `).join('');
  
  dotsContainer.innerHTML = testimonials.map((_, idx) => `
    <span class="dot ${idx === 0 ? 'active' : ''}" data-index="${idx}"></span>
  `).join('');
};

renderTestimonials();

let activeTestimonialIndex = 0;
const slides = document.querySelectorAll<HTMLDivElement>('.testimonial-slide');
const dots = document.querySelectorAll<HTMLSpanElement>('.dot');
let testimonialInterval: number;

const showTestimonial = (index: number) => {
  if (!slides.length) return;
  slides.forEach((slide, idx) => {
    slide.classList.toggle('active', idx === index);
  });
  dots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === index);
  });
  const slider = document.querySelector<HTMLDivElement>('#testimonial-slider')!;
  slider.style.transform = `translateX(-${index * 100}%)`;
  activeTestimonialIndex = index;
};

const nextTestimonial = () => {
  let nextIdx = activeTestimonialIndex + 1;
  if (nextIdx >= testimonials.length) nextIdx = 0;
  showTestimonial(nextIdx);
};

const startTestimonialSlider = () => {
  clearInterval(testimonialInterval);
  testimonialInterval = window.setInterval(nextTestimonial, 5000);
};

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    const idx = parseInt(dot.getAttribute('data-index') || '0', 10);
    showTestimonial(idx);
    startTestimonialSlider();
  });
});

startTestimonialSlider();

// 8. Setup Date Limits
const setupDateLimits = () => {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  const todayDateString = `${yyyy}-${mm}-${dd}`;
  
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const yTom = tomorrow.getFullYear();
  const mTom = String(tomorrow.getMonth() + 1).padStart(2, '0');
  const dTom = String(tomorrow.getDate()).padStart(2, '0');
  const tomorrowDateString = `${yTom}-${mTom}-${dTom}`;
  
  const cIn = document.querySelector<HTMLInputElement>('#cottage-checkin')!;
  const cOut = document.querySelector<HTMLInputElement>('#cottage-checkout')!;
  const aDate = document.querySelector<HTMLInputElement>('#activity-date')!;
  
  if (cIn) { 
    cIn.min = todayDateString; 
    cIn.value = todayDateString; 
  }
  if (cOut) {
    cOut.min = tomorrowDateString;
    cOut.value = tomorrowDateString;
  }
  if (aDate) { 
    aDate.min = todayDateString; 
    aDate.value = todayDateString; 
  }
};

// 9. Initial Call to Bind and Setup Cart List
renderCartCottages();
renderCartActivities();
setupDateLimits();
updateCartTotal();

// 10. Unified Event Listeners for Cart Selection & Quantity
document.addEventListener('change', (e) => {
  const target = e.target as HTMLElement;
  if (!target) return;
  
  if (target.classList.contains('cart-item-select')) {
    const type = target.getAttribute('data-type')!;
    const id = target.getAttribute('data-id')!;
    const isChecked = (target as HTMLInputElement).checked;
    
    if (type === 'cottage') {
      cart.cottages[id].selected = isChecked;
      // Force cottage rooms based on capacity rules
      if (id === 'cot-1' || id === 'cot-2') cart.cottages[id].quantity = 1;
      if (id === 'cot-3') cart.cottages[id].quantity = 3;
      if (id === 'cot-4') cart.cottages[id].quantity = 4;
      renderCartCottages();
    } else if (type === 'activity') {
      cart.activities[id].selected = isChecked;
      // Default participant count to current selected party size
      const partySize = parseInt(document.querySelector<HTMLSelectElement>('#booking-guests')!.value, 10);
      cart.activities[id].participants = partySize;
      renderCartActivities();
    }
    updateCartTotal();
  }
});

// Qty Click Adjustments
document.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;
  if (!target) return;
  
  if (target.classList.contains('btn-qty')) {
    const type = target.getAttribute('data-type')!;
    const id = target.getAttribute('data-id')!;
    const isPlus = target.classList.contains('btn-qty-plus');
    
    if (type === 'cottage') {
      const currentQty = cart.cottages[id].quantity;
      if (isPlus) {
        cart.cottages[id].quantity = currentQty + 1;
      } else {
        cart.cottages[id].quantity = Math.max(1, currentQty - 1);
      }
      renderCartCottages();
    } else if (type === 'activity') {
      const currentParticipants = cart.activities[id].participants;
      if (isPlus) {
        cart.activities[id].participants = currentParticipants + 1;
      } else {
        cart.activities[id].participants = Math.max(1, currentParticipants - 1);
      }
      renderCartActivities();
    }
    updateCartTotal();
  }
});

// Schedule and Dates Listeners
document.querySelector('#cottage-checkin')!.addEventListener('change', () => {
  const checkinVal = document.querySelector<HTMLInputElement>('#cottage-checkin')!.value;
  const checkoutInput = document.querySelector<HTMLInputElement>('#cottage-checkout')!;
  
  if (checkinVal) {
    const minCheckoutDate = new Date(checkinVal);
    minCheckoutDate.setDate(minCheckoutDate.getDate() + 1);
    
    const yyyy = minCheckoutDate.getFullYear();
    const mm = String(minCheckoutDate.getMonth() + 1).padStart(2, '0');
    const dd = String(minCheckoutDate.getDate()).padStart(2, '0');
    
    checkoutInput.min = `${yyyy}-${mm}-${dd}`;
    if (checkoutInput.value && new Date(checkoutInput.value) < minCheckoutDate) {
      checkoutInput.value = `${yyyy}-${mm}-${dd}`;
    }
  }
  updateCartTotal();
});

document.querySelector('#cottage-checkout')!.addEventListener('change', () => {
  updateCartTotal();
});

document.querySelector('#dining-time')!.addEventListener('change', () => {
  updateCartTotal();
});

document.querySelector('#booking-guests')!.addEventListener('change', (e) => {
  const newPartySize = parseInt((e.target as HTMLSelectElement).value, 10);
  // Auto-sync activity participants with party size if they are selected
  activities.forEach(a => {
    if (cart.activities[a.id].selected) {
      cart.activities[a.id].participants = newPartySize;
    }
  });
  renderCartActivities();
  updateCartTotal();
});

// 11. Unified Form Submission and Receipt Builder
bookingForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Core Fields
  const nameEl = document.querySelector<HTMLInputElement>('#booking-name')!;
  const emailEl = document.querySelector<HTMLInputElement>('#booking-email')!;
  const phoneEl = document.querySelector<HTMLInputElement>('#booking-phone')!;
  const guestsEl = document.querySelector<HTMLSelectElement>('#booking-guests')!;
  const notesEl = document.querySelector<HTMLTextAreaElement>('#booking-notes')!;
  
  // Core Errors
  const errorName = document.querySelector<HTMLSpanElement>('#error-name')!;
  const errorEmail = document.querySelector<HTMLSpanElement>('#error-email')!;
  const errorPhone = document.querySelector<HTMLSpanElement>('#error-phone')!;
  const errorDiningTime = document.querySelector<HTMLSpanElement>('#error-dining-time')!;
  
  let isValid = true;
  
  // Reset previous errors
  document.querySelectorAll('.form-error').forEach(el => (el as HTMLElement).style.display = 'none');
  
  // Validate Core
  if (!nameEl.value.trim()) { errorName.style.display = 'block'; isValid = false; }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailEl.value.trim())) { errorEmail.style.display = 'block'; isValid = false; }
  if (!phoneEl.value.trim() || phoneEl.value.trim().length < 7) { errorPhone.style.display = 'block'; isValid = false; }
  
  // Count selections
  let selectedCottageCount = 0;
  let selectedActivityCount = 0;
  const diningTimeVal = document.querySelector<HTMLSelectElement>('#dining-time')!.value;
  
  cottages.forEach(c => { if (cart.cottages[c.id].selected) selectedCottageCount++; });
  activities.forEach(a => { if (cart.activities[a.id].selected) selectedActivityCount++; });
  
  if (selectedCottageCount === 0 && selectedActivityCount === 0 && !diningTimeVal) {
    alert('Please select at least one cottage stay, excursion, or dining time in the escape cart planner.');
    isValid = false;
  }
  
  // Validate stay dates if cottages selected
  if (selectedCottageCount > 0) {
    const cIn = document.querySelector<HTMLInputElement>('#cottage-checkin')!;
    const cOut = document.querySelector<HTMLInputElement>('#cottage-checkout')!;
    const errorCIn = document.querySelector<HTMLSpanElement>('#error-cottage-checkin')!;
    const errorCOut = document.querySelector<HTMLSpanElement>('#error-cottage-checkout')!;
    
    if (!cIn.value) { errorCIn.style.display = 'block'; isValid = false; }
    if (!cOut.value) { errorCOut.style.display = 'block'; isValid = false; }
    
    if (cIn.value && cOut.value) {
      const checkinDate = new Date(cIn.value);
      const checkoutDate = new Date(cOut.value);
      if (checkoutDate <= checkinDate) {
        errorCOut.innerText = 'Check-out date must be after check-in';
        errorCOut.style.display = 'block';
        isValid = false;
      }
    }
  }
  
  // Validate activity date if activities selected or dining time selected
  const aDate = document.querySelector<HTMLInputElement>('#activity-date')!;
  const errorADate = document.querySelector<HTMLSpanElement>('#error-activity-date')!;
  if (selectedActivityCount > 0 || diningTimeVal) {
    if (!aDate.value) { errorADate.style.display = 'block'; isValid = false; }
  }
  
  // Validate dining time 1 hour advance booking limit
  if (diningTimeVal && aDate.value) {
    const todayStr = new Date().toISOString().split('T')[0];
    if (aDate.value === todayStr) {
      const [hours, minutes] = diningTimeVal.split(':').map(Number);
      const selectedTime = new Date();
      selectedTime.setHours(hours, minutes, 0, 0);
      
      const oneHourFromNow = new Date();
      oneHourFromNow.setHours(oneHourFromNow.getHours() + 1);
      
      if (selectedTime < oneHourFromNow) {
        errorDiningTime.innerText = 'Dining must be booked at least 1 hour in advance.';
        errorDiningTime.style.display = 'block';
        isValid = false;
      }
    }
  }
  
  if (isValid) {
    let total = 0;
    let whatsappMsg = `*🌴 PiNKeY 19 ESCAPE PLANNER RECEIPT 🌴*\n`;
    whatsappMsg += `-------------------------------------\n`;
    whatsappMsg += `*Name:* ${nameEl.value.trim()}\n`;
    whatsappMsg += `*Email:* ${emailEl.value.trim()}\n`;
    whatsappMsg += `*Phone:* ${phoneEl.value.trim()}\n`;
    whatsappMsg += `*Base Party Size:* ${guestsEl.value} People\n\n`;
    
    const checkinVal = document.querySelector<HTMLInputElement>('#cottage-checkin')!.value;
    const checkoutVal = document.querySelector<HTMLInputElement>('#cottage-checkout')!.value;
    const nights = calculateNights(checkinVal, checkoutVal);
    
    whatsappMsg += `*📅 SCHEDULE DETAILS:*\n`;
    if (selectedCottageCount > 0) {
      whatsappMsg += `- Cottage Check-in: ${checkinVal}\n`;
      whatsappMsg += `- Cottage Check-out: ${checkoutVal} (${nights} Night${nights > 1 ? 's' : ''})\n`;
    }
    if (selectedActivityCount > 0) {
      const aDateVal = document.querySelector<HTMLInputElement>('#activity-date')!.value;
      whatsappMsg += `- Excursions & Transport Date: ${aDateVal}\n`;
    }
    if (diningTimeVal) {
      const aDateVal = document.querySelector<HTMLInputElement>('#activity-date')!.value || 'As scheduled';
      whatsappMsg += `- Restaurant Reservation: ${aDateVal} @ ${diningTimeVal}\n`;
    }
    whatsappMsg += `\n`;
    
    let itemizedDetails = '';
    
    // Cottages Selection WhatsApp format
    if (selectedCottageCount > 0) {
      itemizedDetails += `*🏡 COTTAGE BOOKINGS:*\n`;
      cottages.forEach(c => {
        const item = cart.cottages[c.id];
        if (item && item.selected) {
          const price = parsePrice(c.price);
          const multiplier = (c.id === 'cot-3' || c.id === 'cot-4') ? 1 : item.quantity;
          const subtotal = price * nights * multiplier;
          total += subtotal;
          itemizedDetails += `- ${c.name} (${item.quantity} Room${item.quantity > 1 ? 's' : ''}) @ KSH. ${price.toLocaleString()}/night\n`;
          itemizedDetails += `  Subtotal (${nights} Night${nights > 1 ? 's' : ''}): KSH. ${subtotal.toLocaleString()}\n`;
        }
      });
      itemizedDetails += `\n`;
    }
    
    // Activities Selection WhatsApp format
    if (selectedActivityCount > 0) {
      itemizedDetails += `*🛶 GUIDED EXCURSIONS & TRANSPORT:*\n`;
      activities.forEach(a => {
        const item = cart.activities[a.id];
        if (item && item.selected) {
          if (a.price.toLowerCase().includes('inquiry')) {
            itemizedDetails += `- ${a.name} (Qty: ${item.participants}) -> Inquiry Pending\n`;
          } else {
            const price = parsePrice(a.price);
            const subtotal = price * item.participants;
            total += subtotal;
            itemizedDetails += `- ${a.name} (Qty: ${item.participants}) @ KSH. ${price.toLocaleString()}/person\n`;
            itemizedDetails += `  Subtotal: KSH. ${subtotal.toLocaleString()}\n`;
          }
        }
      });
      itemizedDetails += `\n`;
    }
    
    // Dining Table Selection WhatsApp format
    if (diningTimeVal) {
      itemizedDetails += `*🍽️ DINING RESERVATION:*\n`;
      itemizedDetails += `- Restaurant Table for ${guestsEl.value} People @ ${diningTimeVal} (Free Booking)\n\n`;
    }
    
    whatsappMsg += itemizedDetails;
    
    // Financial math
    const deposit = total * 0.5;
    const refund = total * 0.4;
    const fee = total * 0.1;
    
    whatsappMsg += `-------------------------------------\n`;
    whatsappMsg += `*💵 ESTIMATED GRAND TOTAL:* KSH. ${total.toLocaleString()}\n`;
    whatsappMsg += `*💳 50% UPFRONT DEPOSIT:* KSH. ${deposit.toLocaleString()}\n\n`;
    whatsappMsg += `*⚠️ REFUND & CANCELLATION POLICY:*\n`;
    whatsappMsg += `- Cancel anytime and receive a *40% refund of total* (KSH. ${refund.toLocaleString()})\n`;
    whatsappMsg += `- Non-refundable service fee is *10% of total* (KSH. ${fee.toLocaleString()})\n`;
    whatsappMsg += `_(Represents 80% deposit refund, 20% deposit service cost retained)_\n`;
    
    if (notesEl.value.trim()) {
      whatsappMsg += `\n*✏️ Special Notes:* ${notesEl.value.trim()}\n`;
    }
    
    const whatsappUrl = `https://wa.me/254740915426?text=${encodeURIComponent(whatsappMsg)}`;
    
    const summaryText = `Thank you, ${nameEl.value.trim()}! We have processed your customized escape plan. A 50% upfront payment of KSH. ${deposit.toLocaleString()} is required. We are now redirecting you to WhatsApp to complete your reservation!`;
    
    document.querySelector<HTMLParagraphElement>('#modal-summary-text')!.innerText = summaryText;
    successModal.classList.add('active');
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Reset cart selections after successful checkout submission
    cottages.forEach(c => {
      cart.cottages[c.id].selected = false;
      let defaultQty = 1;
      if (c.id === 'cot-3') defaultQty = 3;
      if (c.id === 'cot-4') defaultQty = 4;
      cart.cottages[c.id].quantity = defaultQty;
    });
    activities.forEach(a => {
      cart.activities[a.id].selected = false;
      cart.activities[a.id].participants = 2;
    });
    document.querySelector<HTMLSelectElement>('#dining-time')!.value = '';
    
    renderCartCottages();
    renderCartActivities();
    updateCartTotal();
    setupDateLimits();
    bookingForm.reset();
  }
});

// Close modal event
modalCloseBtn.addEventListener('click', () => {
  successModal.classList.remove('active');
});

successModal.addEventListener('click', (e) => {
  if (e.target === successModal) {
    successModal.classList.remove('active');
  }
});
