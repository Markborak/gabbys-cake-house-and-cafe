import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';

// Gallery data
const galleryImages = [
  {
    id: 1,
    src: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'cakes',
    title: 'Red Velvet Cake'
  },
  {
    id: 2,
    src: 'https://images.pexels.com/photos/2638026/pexels-photo-2638026.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'cakes',
    title: 'Fruit Cake'
  },
  {
    id: 3,
    src: 'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'cakes',
    title: 'Wedding Cake'
  },
  {
    id: 4,
    src: 'https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'cakes',
    title: 'Birthday Cake'
  },
  {
    id: 5,
    src: 'https://images.pexels.com/photos/3992131/pexels-photo-3992131.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'pastries',
    title: 'Croissants'
  },
  {
    id: 6,
    src: 'https://images.pexels.com/photos/267308/pexels-photo-267308.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'pastries',
    title: 'Cinnamon Rolls'
  },
  {
    id: 7,
    src: 'https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'pastries',
    title: 'Assorted Pastries'
  },
  {
    id: 8,
    src: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'cafe',
    title: 'Coffee Art'
  },
  {
    id: 9,
    src: 'https://images.pexels.com/photos/6802983/pexels-photo-6802983.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'behind-scenes',
    title: 'Cake Decoration'
  },
  {
    id: 10,
    src: 'https://images.pexels.com/photos/6833848/pexels-photo-6833848.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'behind-scenes',
    title: 'Baking Process'
  },
  {
    id: 11,
    src: 'https://images.pexels.com/photos/372851/pexels-photo-372851.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'cafe',
    title: 'Cake and Coffee'
  },
  {
    id: 12,
    src: 'https://images.pexels.com/photos/3992134/pexels-photo-3992134.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'cakes',
    title: 'Chocolate Cake'
  }
];

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Filter categories
  const categories = ['all', 'cakes', 'pastries', 'cafe', 'behind-scenes'];

  // Animation variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3 }
    }
  };

  // Filter images based on selected category
  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  // Open image in lightbox
  const openLightbox = (src: string) => {
    setSelectedImage(src);
    document.body.style.overflow = 'hidden';
  };

  // Close lightbox
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <SectionTitle
          title="Our Gallery"
          subtitle="A visual journey through our cakes, pastries, and café moments"
          centered
        />

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full text-lg transition-all ${
                filter === category
                  ? 'bg-pink-600 text-white shadow-md'
                  : 'bg-cream-100 text-brown-700 hover:bg-cream-200'
              }`}
              onClick={() => setFilter(category)}
            >
              {category === 'all' ? 'All' : category.split('-').map(word => 
                word.charAt(0).toUpperCase() + word.slice(1)
              ).join(' ')}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          className="gallery-grid"
          key={filter}
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {filteredImages.map((image) => (
            <motion.div 
              key={image.id} 
              className="overflow-hidden rounded-lg shadow-md cursor-pointer relative aspect-square"
              variants={fadeIn}
              onClick={() => openLightbox(image.src)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <h3 className="text-white text-lg font-bold">{image.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Image Lightbox */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-4 right-4 text-white text-3xl"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              &times;
            </button>
            <img 
              src={selectedImage} 
              alt="Enlarged view" 
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}

        <div className="text-center mt-12">
          <p className="text-lg text-brown-700">
            Follow us on <a href="https://www.instagram.com/gabbyscakehouse" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700">Instagram</a> for more delicious moments!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;