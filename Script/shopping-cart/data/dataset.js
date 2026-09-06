export const products = [
  // SMARTPHONES
  {
    id: 1,
    category: "Smartphone",
    name: "Apple iPhone 16",
    price: 1799,
    description: "Premium smartphone featuring a 6.7-inch OLED display, A18 processor, and advanced camera system.",
    inStock: true,
    stockQuantity: 25,
    image: "https://picsum.photos/100",
    reviews: [
      {
        user: "John Smith",
        rating: 5,
        date: "2026-01-15",
        comment: "Fantastic phone with an amazing camera."
      },
      {
        user: "Sarah Jones",
        rating: 4,
        date: "2026-02-10",
        comment: "Very fast and responsive, but expensive."
      },
      {
        user: "Michael Lee",
        rating: 5,
        date: "2026-03-05",
        comment: "Battery life easily lasts all day."
      }
    ]
  },

  {
    id: 2,
    category: "Smartphone",
    name: "Samsung Galaxy S25",
    price: 1599,
    description: "Flagship Android smartphone with AI features, AMOLED display, and triple-camera setup.",
    inStock: true,
    stockQuantity: 18,
    image: "https://picsum.photos/200",
    reviews: [
      {
        user: "Emma Brown",
        rating: 5,
        date: "2026-01-20",
        comment: "Beautiful screen and excellent camera quality."
      },
      {
        user: "David Wilson",
        rating: 4,
        date: "2026-02-18",
        comment: "Smooth performance and great battery life."
      },
      {
        user: "Lisa Chen",
        rating: 4,
        date: "2026-03-15",
        comment: "AI tools are genuinely useful."
      }
    ]
  },

  {
    id: 3,
    category: "Smartphone",
    name: "Google Pixel 10",
    price: 1399,
    description: "Google smartphone with pure Android experience and AI-powered photography.",
    inStock: true,
    stockQuantity: 15,
    image: "https://picsum.photos/300",
    reviews: [
      {
        user: "Tom Harris",
        rating: 5,
        date: "2026-01-08",
        comment: "Best smartphone camera I've ever used."
      },
      {
        user: "Kate Martin",
        rating: 5,
        date: "2026-02-05",
        comment: "Pure Android experience is fantastic."
      },
      {
        user: "Chris Evans",
        rating: 4,
        date: "2026-03-07",
        comment: "Smart AI features and smooth performance."
      }
    ]
  },

  {
    id: 4,
    category: "Smartphone",
    name: "OnePlus 14",
    price: 1099,
    description: "Performance-focused smartphone with ultra-fast charging and smooth display.",
    inStock: true,
    stockQuantity: 12,
    image: "https://picsum.photos/400",
    reviews: [
      {
        user: "Ryan Clark",
        rating: 5,
        date: "2026-01-11",
        comment: "Incredible value for the price."
      },
      {
        user: "Anna Green",
        rating: 4,
        date: "2026-02-22",
        comment: "Charging speed is unbelievably fast."
      },
      {
        user: "Peter White",
        rating: 4,
        date: "2026-03-10",
        comment: "Very smooth and responsive."
      }
    ]
  },

  {
    id: 5,
    category: "Smartphone",
    name: "Xiaomi 15 Pro",
    price: 1199,
    description: "Powerful smartphone with premium cameras, fast charging, and long battery life.",
    inStock: false,
    stockQuantity: 0,
    image: "https://picsum.photos/500",
    reviews: [
      {
        user: "Sophia Hall",
        rating: 5,
        date: "2026-01-14",
        comment: "Excellent hardware and camera quality."
      },
      {
        user: "James Walker",
        rating: 4,
        date: "2026-02-17",
        comment: "Great value compared to competitors."
      },
      {
        user: "Olivia Scott",
        rating: 4,
        date: "2026-03-21",
        comment: "Battery lasts all day with ease."
      }
    ]
  },

  // LAPTOPS
  {
    id: 6,
    category: "Laptop",
    name: "Apple MacBook Pro 16",
    price: 3999,
    description: "Professional laptop with Apple Silicon processor and stunning Retina display.",
    inStock: true,
    stockQuantity: 8,
    image: "https://picsum.photos/600",
    reviews: [
      {
        user: "Daniel Kim",
        rating: 5,
        date: "2026-01-18",
        comment: "Outstanding performance for development work."
      },
      {
        user: "Rachel Young",
        rating: 5,
        date: "2026-02-11",
        comment: "The display is bright and incredibly sharp."
      },
      {
        user: "George Hill",
        rating: 4,
        date: "2026-03-08",
        comment: "Fantastic laptop, though very expensive."
      }
    ]
  },

  {
    id: 7,
    category: "Laptop",
    name: "Dell XPS 15",
    price: 2799,
    description: "Premium Windows laptop with OLED display and excellent performance.",
    inStock: true,
    stockQuantity: 10,
    image: "https://picsum.photos/700",
    reviews: [
      {
        user: "Amy Carter",
        rating: 5,
        date: "2026-01-06",
        comment: "Excellent build quality and display."
      },
      {
        user: "Matthew Allen",
        rating: 4,
        date: "2026-02-20",
        comment: "Great laptop for productivity tasks."
      },
      {
        user: "Rebecca Adams",
        rating: 4,
        date: "2026-03-14",
        comment: "Powerful and reliable."
      }
    ]
  },

  {
    id: 8,
    category: "Laptop",
    name: "HP Spectre x360",
    price: 2499,
    description: "Convertible touchscreen laptop offering tablet and laptop functionality.",
    inStock: true,
    stockQuantity: 6,
    image: "https://picsum.photos/800",
    reviews: [
      {
        user: "Melissa Ross",
        rating: 5,
        date: "2026-01-12",
        comment: "Love the flexibility of the 2-in-1 design."
      },
      {
        user: "Andrew Wright",
        rating: 4,
        date: "2026-02-16",
        comment: "Touchscreen works beautifully."
      },
      {
        user: "Jason King",
        rating: 4,
        date: "2026-03-03",
        comment: "Premium feel and excellent battery."
      }
    ]
  },

  {
    id: 9,
    category: "Laptop",
    name: "Lenovo ThinkPad X1 Carbon",
    price: 2699,
    description: "Business-class laptop featuring exceptional keyboard and security features.",
    inStock: true,
    stockQuantity: 9,
    image: "https://picsum.photos/900",
    reviews: [
      {
        user: "Karen Baker",
        rating: 5,
        date: "2026-01-10",
        comment: "Best keyboard of any laptop I've used."
      },
      {
        user: "Steve Murphy",
        rating: 5,
        date: "2026-02-09",
        comment: "Lightweight and ideal for travel."
      },
      {
        user: "Linda Bell",
        rating: 4,
        date: "2026-03-12",
        comment: "Strong security and business features."
      }
    ]
  },

  {
    id: 10,
    category: "Laptop",
    name: "ASUS ZenBook 14",
    price: 1999,
    description: "Lightweight ultrabook designed for productivity and long battery life.",
    inStock: false,
    stockQuantity: 0,
    image: "https://picsum.photos/1000",
    reviews: [
      {
        user: "Ben Cooper",
        rating: 4,
        date: "2026-01-25",
        comment: "Great balance of portability and power."
      },
      {
        user: "Natalie Reed",
        rating: 5,
        date: "2026-02-13",
        comment: "Very lightweight and easy to carry."
      },
      {
        user: "Mark Foster",
        rating: 4,
        date: "2026-03-09",
        comment: "Battery life is impressive."
      }
    ]
  }
];
