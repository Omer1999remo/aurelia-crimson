export const products = [
  {
    id: 1,
    name: "Crimson Embrace Necklace",
    category: "jewelry",
    price: 2490,
    originalPrice: 3200,
    original_price: 3200,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&h=600&fit=crop",
    ],
    badge: "Bestseller",
    featured: true,
    description: "An exquisite necklace featuring a cascade of crimson garnets set in 18k rose gold. Each stone is hand-selected for its deep, vivid hue, creating a piece that captures the essence of timeless elegance.",
    materials: ["18k Rose Gold", "Crimson Garnets", "Diamond Accents"],
    in_stock: true,
    stock_count: 8,
    dimensions: { length: "18 inches", weight: "12g", clasp: "Lobster" },
    care_instructions: "Store in a cool, dry place. Clean gently with a soft cloth. Avoid contact with perfume and chemicals.",
  },
  {
    id: 2,
    name: "Aurelia Gold Chronograph",
    category: "watches",
    price: 4850,
    originalPrice: null,
    original_price: null,
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&h=600&fit=crop",
    ],
    badge: "New",
    featured: true,
    description: "A masterpiece of Swiss watchmaking, the Aurelia Chronograph combines precision engineering with luxurious aesthetics. The red gold case houses a meticulously crafted automatic movement visible through the sapphire caseback.",
    materials: ["18k Red Gold", "Sapphire Crystal", "Alligator Leather Strap"],
    in_stock: true,
    stock_count: 3,
    dimensions: { case: "42mm", thickness: "14mm", water_resistance: "50m" },
    care_instructions: "Avoid extreme temperatures and magnetic fields. Service every 3-5 years. Rinse with fresh water after saltwater exposure.",
  },
  {
    id: 3,
    name: "Royal Garnet Ring",
    category: "jewelry",
    price: 1890,
    originalPrice: 2200,
    original_price: 2200,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&h=600&fit=crop",
    ],
    badge: null,
    featured: true,
    description: "A stunning garnet centerpiece surrounded by a halo of brilliant-cut diamonds, set in platinum. This ring embodies regal sophistication with its deep crimson stone and impeccable craftsmanship.",
    materials: ["Platinum", "Royal Garnet", "Brilliant Diamonds"],
    in_stock: true,
    stock_count: 5,
    dimensions: { carat: "3.2ct garnet", band: "2mm platinum", diamonds: "0.5ct total" },
    care_instructions: "Remove before physical activities. Clean with warm soapy water and a soft brush. Store separately to avoid scratching.",
  },
  {
    id: 4,
    name: "Vermillion Leather Tote",
    category: "accessories",
    price: 1650,
    originalPrice: null,
    original_price: null,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&h=600&fit=crop",
    ],
    badge: "Limited",
    featured: true,
    description: "Handcrafted from the finest Italian vermillion leather, this tote combines practicality with unparalleled luxury. Featuring hand-stitched detailing and palladium hardware, it is a statement of refined taste.",
    materials: ["Italian Calf Leather", "Palladium Hardware", "Suede Lining"],
    in_stock: true,
    stock_count: 12,
    dimensions: { height: "30cm", width: "38cm", depth: "14cm" },
    care_instructions: "Store in provided dust bag. Apply leather conditioner every 3 months. Avoid direct sunlight and moisture.",
  },
  {
    id: 5,
    name: "Gold Leaf Earrings",
    category: "jewelry",
    price: 890,
    originalPrice: 1200,
    original_price: 1200,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=600&fit=crop",
    ],
    badge: null,
    featured: true,
    description: "Inspired by nature's delicate beauty, these gold leaf earrings are hand-formed from 18k yellow gold. Each leaf is uniquely textured, catching the light with every movement.",
    materials: ["18k Yellow Gold", "Post Backing"],
    in_stock: true,
    stock_count: 15,
    dimensions: { length: "3cm", width: "1.5cm", weight: "4g each" },
    care_instructions: "Handle with care. Clean with a gold polishing cloth. Store in a jewelry box to prevent tangling.",
  },
  {
    id: 6,
    name: "Imperial Cufflinks",
    category: "accessories",
    price: 650,
    originalPrice: null,
    original_price: null,
    image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=500&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=500&h=600&fit=crop",
    ],
    badge: null,
    featured: true,
    description: "Elevate any ensemble with these Imperial Cufflinks, featuring a bold geometric design in brushed gold and onyx. The perfect finishing touch for the modern gentleman.",
    materials: ["Brushed Gold", "Onyx Inlay", "T-Bar Fastening"],
    in_stock: true,
    stock_count: 20,
    dimensions: { diameter: "1.8cm", weight: "8g per pair" },
    care_instructions: "Polish gently with a soft cloth. Avoid contact with cologne and water. Store in provided presentation box.",
  },
  {
    id: 7,
    name: "Midnight Sapphire Pendant",
    category: "jewelry",
    price: 3200,
    originalPrice: null,
    original_price: null,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&h=600&fit=crop",
    ],
    badge: "Exclusive",
    featured: false,
    description: "A mesmerizing midnight blue sapphire cradled in a white gold setting with diamond accents. This pendant is a breathtaking statement of luxury and sophistication.",
    materials: ["18k White Gold", "Blue Sapphire", "Diamond Accents"],
    in_stock: true,
    stock_count: 4,
    dimensions: { stone: "2.8ct sapphire", chain: "20 inches", diamonds: "0.3ct" },
    care_instructions: "Store separately to avoid scratching. Clean with a soft brush and warm soapy water.",
  },
  {
    id: 8,
    name: "Heritage Diamond Watch",
    category: "watches",
    price: 7800,
    originalPrice: null,
    original_price: null,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&h=600&fit=crop",
    ],
    badge: null,
    featured: false,
    description: "The Heritage Diamond Watch is the pinnacle of luxury timekeeping. Encrusted with brilliant diamonds on its bezel, with a mother-of-pearl dial and Swiss quartz movement.",
    materials: ["18k Gold", "Diamonds", "Mother of Pearl", "Sapphire Crystal"],
    in_stock: true,
    stock_count: 2,
    dimensions: { case: "36mm", water_resistance: "30m", diamonds: "1.2ct" },
    care_instructions: "Service annually. Keep away from magnetic fields. Store in original presentation box.",
  },
  {
    id: 9,
    name: "Crimson Silk Scarf",
    category: "accessories",
    price: 420,
    originalPrice: null,
    original_price: null,
    image: "https://images.unsplash.com/photo-1601924921557-45e1a486b6c0?w=500&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1601924921557-45e1a486b6c0?w=500&h=600&fit=crop",
    ],
    badge: null,
    featured: false,
    description: "A luxurious silk scarf in deep crimson with an intricate gold pattern inspired by Art Deco design. Hand-rolled edges and printed using traditional techniques.",
    materials: ["100% Mulberry Silk", "Hand-Rolled Edges"],
    in_stock: true,
    stock_count: 25,
    dimensions: { size: "90cm x 90cm", weight: "60g" },
    care_instructions: "Dry clean only. Store folded in provided box. Avoid prolonged sun exposure.",
  },
  {
    id: 10,
    name: "Rose Gold Bangle",
    category: "jewelry",
    price: 1350,
    originalPrice: 1600,
    original_price: 1600,
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=500&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=500&h=600&fit=crop",
    ],
    badge: "Sale",
    featured: false,
    description: "An elegant rose gold bangle with a brushed satin finish and polished edges. Its minimalist design makes it perfect for stacking or wearing alone as a refined statement.",
    materials: ["18k Rose Gold", "Brushed Satin Finish"],
    in_stock: true,
    stock_count: 10,
    dimensions: { diameter: "6.5cm", width: "8mm", weight: "22g" },
    care_instructions: "Remove before physical activities. Clean with a jewelry polishing cloth.",
  },
];

export const mockReviews = [
  { id: 1, product_id: 1, rating: 5, comment: "The Crimson Embrace necklace exceeded every expectation. The craftsmanship is absolutely impeccable. A true heirloom piece.", title: "Eleanor Vance" },
  { id: 2, product_id: 1, rating: 4, comment: "Beautiful necklace, the garnets have incredible color. Slightly heavier than expected but worth it.", title: "Maria Santos" },
  { id: 3, product_id: 2, rating: 5, comment: "I've collected watches for 20 years, and the Aurelia Chronograph stands among the finest. The red gold detailing is mesmerizing.", title: "James Mitchell" },
  { id: 4, product_id: 3, rating: 4, comment: "Stunning ring. The garnet has amazing depth of color and the diamond halo sparkles beautifully.", title: "Ava Richardson" },
  { id: 5, product_id: 4, rating: 5, comment: "From unboxing to wearing, every moment felt luxurious. The leather quality is unmatched.", title: "Sophia Chen" },
  { id: 6, product_id: 5, rating: 5, comment: "These earrings are so delicate and beautiful. The gold leaf texture catches light perfectly.", title: "Claire Dubois" },
  { id: 7, product_id: 6, rating: 4, comment: "Excellent quality cufflinks. The onyx inlay adds a sophisticated touch to any shirt.", title: "Robert Taylor" },
];

export const mockOrders = [
  {
    id: 'a1b2c3d4',
    created_at: '2026-05-20T10:30:00Z',
    status: 'delivered',
    total: 3380,
    order_items: [
      { id: 'oi1', product_name: 'Crimson Embrace Necklace', product_image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=600&fit=crop', quantity: 1, price: 2490 },
      { id: 'oi2', product_name: 'Gold Leaf Earrings', product_image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=600&fit=crop', quantity: 1, price: 890 },
    ],
  },
  {
    id: 'e5f6g7h8',
    created_at: '2026-05-25T14:00:00Z',
    status: 'shipped',
    total: 4850,
    order_items: [
      { id: 'oi3', product_name: 'Aurelia Gold Chronograph', product_image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500&h=600&fit=crop', quantity: 1, price: 4850 },
    ],
  },
  {
    id: 'i9j0k1l2',
    created_at: '2026-05-28T09:15:00Z',
    status: 'pending',
    total: 2540,
    order_items: [
      { id: 'oi4', product_name: 'Royal Garnet Ring', product_image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&h=600&fit=crop', quantity: 1, price: 1890 },
      { id: 'oi5', product_name: 'Imperial Cufflinks', product_image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=500&h=600&fit=crop', quantity: 1, price: 650 },
    ],
  },
];

export const categories = [
  {
    title: "Fine Jewelry",
    description: "Handcrafted with 18k gold and precious gemstones",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=800&fit=crop"
  },
  {
    title: "Luxury Watches",
    description: "Swiss precision meets timeless design",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=800&fit=crop"
  },
  {
    title: "Leather Goods",
    description: "Italian leather crafted to perfection",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=800&fit=crop"
  }
];

export const testimonials = [
  {
    text: "The Crimson Embrace necklace exceeded every expectation. The craftsmanship is absolutely impeccable. A true heirloom piece.",
    author: "Eleanor Vance",
    location: "New York, NY",
    initials: "EV"
  },
  {
    text: "I've collected watches for 20 years, and the Aurelia Chronograph stands among the finest. The red gold detailing is mesmerizing.",
    author: "James Mitchell",
    location: "London, UK",
    initials: "JM"
  },
  {
    text: "From unboxing to wearing, every moment felt luxurious. Their customer service matches the quality of their jewelry.",
    author: "Sophia Chen",
    location: "Singapore",
    initials: "SC"
  }
];

export const features = [
  {
    icon: "✦",
    title: "Master Crafted",
    description: "Each piece is meticulously handcrafted by artisans with decades of experience in luxury goods."
  },
  {
    icon: "◈",
    title: "Authentic Materials",
    description: "We use only ethically sourced 18k gold, diamonds, and premium materials in every creation."
  },
  {
    icon: "✦",
    title: "Lifetime Warranty",
    description: "Every purchase comes with our exclusive lifetime care and maintenance guarantee."
  },
  {
    icon: "◈",
    title: "White Glove Delivery",
    description: "Complimentary insured shipping with personal white glove delivery service worldwide."
  }
];

export const footerLinks = {
  Brand: ["Our Story", "Craftsmanship", "Sustainability", "Careers"],
  "Client Care": ["Contact Us", "Shipping & Returns", "Size Guide", "Care Instructions"],
  Boutiques: ["New York", "Paris", "Tokyo", "Dubai"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Accessibility"]
};
