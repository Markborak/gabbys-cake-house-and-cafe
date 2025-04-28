import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';

// Menu data
const menuData = {
  cakes: [
    {
      id: 1,
      name: 'Red Velvet Cake',
      description: 'Moist red velvet cake with cream cheese frosting.',
      price: 'KSh 2,800',
      image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id: 2,
      name: 'Chocolate Mocha Cake',
      description: 'Rich chocolate cake infused with coffee flavor and mocha buttercream.',
      price: 'KSh 3,000',
      image: 'https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id: 3,
      name: 'Fresh Fruit Cake',
      description: 'Light vanilla sponge with seasonal fruits and whipped cream.',
      price: 'KSh 3,200',
      image: 'https://images.pexels.com/photos/2638026/pexels-photo-2638026.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id: 4,
      name: 'Black Forest Cake',
      description: 'Chocolate sponge with cherries, whipped cream, and chocolate shavings.',
      price: 'KSh 3,200',
      image: 'https://images.pexels.com/photos/8599720/pexels-photo-8599720.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id: 5,
      name: 'Carrot Cake',
      description: 'Spiced carrot cake with walnuts and cream cheese frosting.',
      price: 'KSh 2,800',
      image: 'https://images.pexels.com/photos/4686833/pexels-photo-4686833.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id: 6,
      name: 'Vanilla Celebration Cake',
      description: 'Classic vanilla cake with buttercream frosting and sprinkles.',
      price: 'KSh 2,500',
      image: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=1600'
    }
  ],
  pastries: [
    {
      id: 7,
      name: 'Cinnamon Rolls',
      description: 'Soft rolls with cinnamon sugar filling and cream cheese glaze.',
      price: 'KSh 250',
      image: 'https://images.pexels.com/photos/267308/pexels-photo-267308.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id: 8,
      name: 'Chocolate Croissant',
      description: 'Flaky butter croissant filled with rich chocolate.',
      price: 'KSh 200',
      image: 'https://images.pexels.com/photos/3892469/pexels-photo-3892469.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id: 9,
      name: 'Blueberry Muffin',
      description: 'Tender muffin packed with fresh blueberries.',
      price: 'KSh 150',
      image: 'https://images.pexels.com/photos/8599601/pexels-photo-8599601.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id: 10,
      name: 'Strawberry Tart',
      description: 'Buttery tart shell filled with pastry cream and fresh strawberries.',
      price: 'KSh 350',
      image: 'https://images.pexels.com/photos/806363/pexels-photo-806363.jpeg?auto=compress&cs=tinysrgb&w=1600'
    }
  ],
  drinks: [
    {
      id: 11,
      name: 'Cappuccino',
      description: 'Espresso with steamed milk and a layer of foam.',
      price: 'KSh 300',
      image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id: 12,
      name: 'Café Mocha',
      description: 'Espresso with chocolate and steamed milk, topped with whipped cream.',
      price: 'KSh 350',
      image: 'https://images.pexels.com/photos/4109744/pexels-photo-4109744.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id: 13,
      name: 'Vanilla Milkshake',
      description: 'Creamy vanilla ice cream blended with milk.',
      price: 'KSh 400',
      image: 'https://images.pexels.com/photos/4051553/pexels-photo-4051553.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id: 14,
      name: 'Fresh Orange Juice',
      description: 'Freshly squeezed orange juice.',
      price: 'KSh 250',
      image: 'https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=1600'
    }
  ],
  sandwiches: [
    {
      id: 15,
      name: 'Chicken Avocado Sandwich',
      description: 'Grilled chicken, fresh avocado, lettuce, and mayo on sourdough bread.',
      price: 'KSh 450',
      image: 'https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id: 16,
      name: 'Veggie Delight Sandwich',
      description: 'Cucumber, tomato, lettuce, bell peppers, and hummus on whole grain bread.',
      price: 'KSh 350',
      image: 'https://images.pexels.com/photos/1546039/pexels-photo-1546039.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id: 17,
      name: 'Tuna Melt',
      description: 'Tuna salad with melted cheese on toasted bread.',
      price: 'KSh 400',
      image: 'https://images.pexels.com/photos/3609894/pexels-photo-3609894.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id: 18,
      name: 'Egg & Cheese Breakfast Sandwich',
      description: 'Scrambled eggs and cheddar cheese on a freshly baked croissant.',
      price: 'KSh 300',
      image: 'https://images.pexels.com/photos/15837034/pexels-photo-15837034/free-photo-of-toasted-sandwich-with-eggs-and-bacon.jpeg?auto=compress&cs=tinysrgb&w=1600'
    }
  ]
};

const Menu: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialCategory = queryParams.get('category') || 'cakes';
  
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  // Animation variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <SectionTitle
          title="Our Menu"
          subtitle="Discover our delicious offerings, freshly made with love every day"
          centered
        />

        {/* Menu Categories */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {['cakes', 'pastries', 'drinks', 'sandwiches'].map((category) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full text-lg transition-all ${
                activeCategory === category
                  ? 'bg-pink-600 text-white shadow-md'
                  : 'bg-cream-100 text-brown-700 hover:bg-cream-200'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <motion.div 
          className="menu-grid"
          key={activeCategory}
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {menuData[activeCategory as keyof typeof menuData]?.map((item) => (
            <motion.div 
              key={item.id} 
              className="card overflow-hidden"
              variants={fadeIn}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <span className="text-pink-600 font-bold">{item.price}</span>
                </div>
                <p className="text-brown-700">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Menu;