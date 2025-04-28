import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Instagram, MapPin, Heart, Cake, Coffee, Utensils } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const Home: React.FC = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-24 relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=1600')",
            filter: "brightness(0.7)"
          }}
        />

        <div className="container-custom relative z-10">
          <motion.div 
            className="max-w-2xl text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-6 font-bold text-cream-50">Baking Happiness in Every Bite</h1>
            <p className="text-xl mb-8 text-cream-100">
              Welcome to Gabby's Cake House & Café, where we craft delicious cakes, pastries, 
              and coffee in the heart of Naivasha. Taste the difference of homemade goodness.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/menu" className="btn btn-primary">
                View Our Menu
              </Link>
              <Link to="/order" className="btn btn-secondary">
                Order Custom Cake
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="section bg-cream-50">
        <div className="container-custom">
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div 
              className="relative"
              variants={fadeIn}
            >
              <img 
                src="https://images.pexels.com/photos/3014910/pexels-photo-3014910.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Gabby's Cake House Interior" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                <p className="font-playfair text-pink-600 font-bold text-xl">Since 2015</p>
              </div>
            </motion.div>

            <motion.div variants={fadeIn}>
              <SectionTitle 
                title="Our Sweet Story" 
                subtitle="Family-owned bakery bringing joy through delicious treats"
              />
              <p className="mb-6">
                At Gabby's Cake House & Café, we believe that every celebration deserves something sweet. 
                Our journey began in 2015 with a passion for creating delicious, handcrafted cakes that bring 
                joy to our customers in Naivasha.
              </p>
              <p className="mb-6">
                Each of our cakes, pastries, and coffee creations is made with love and the finest ingredients. 
                Whether you're stopping by for a quick coffee, celebrating a special occasion, or just satisfying 
                a sweet craving, we're here to make your day a little sweeter.
              </p>
              <Link to="/contact" className="btn btn-primary">
                Find Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Our Specialties" 
            subtitle="Discover our most loved creations that keep our customers coming back"
            centered
          />

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {/* Featured Product 1 */}
            <motion.div className="card" variants={fadeIn}>
              <img 
                src="https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Red Velvet Cake" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Red Velvet Cake</h3>
                <p className="text-brown-700 mb-4">
                  Our signature red velvet cake with cream cheese frosting, a perfect blend of cocoa and vanilla.
                </p>
                <Link to="/menu" className="text-pink-600 font-medium hover:text-pink-700 inline-flex items-center">
                  See Details
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </motion.div>

            {/* Featured Product 2 */}
            <motion.div className="card" variants={fadeIn}>
              <img 
                src="https://images.pexels.com/photos/3992134/pexels-photo-3992134.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Coffee Cake" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Mocha Cake</h3>
                <p className="text-brown-700 mb-4">
                  Rich chocolate cake infused with coffee essence and topped with mocha buttercream.
                </p>
                <Link to="/menu" className="text-pink-600 font-medium hover:text-pink-700 inline-flex items-center">
                  See Details
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </motion.div>

            {/* Featured Product 3 */}
            <motion.div className="card" variants={fadeIn}>
              <img 
                src="https://images.pexels.com/photos/2638026/pexels-photo-2638026.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Fruit Cake" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Fresh Fruit Cake</h3>
                <p className="text-brown-700 mb-4">
                  Light vanilla sponge layered with seasonal fruits and whipped cream frosting.
                </p>
                <Link to="/menu" className="text-pink-600 font-medium hover:text-pink-700 inline-flex items-center">
                  See Details
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </motion.div>
          </motion.div>

          <div className="text-center mt-12">
            <Link to="/menu" className="btn btn-primary">
              Explore Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-cream-100">
        <div className="container-custom">
          <SectionTitle 
            title="What We Offer" 
            subtitle="From custom cakes to cozy café experiences, we've got you covered"
            centered
          />

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {/* Service 1 */}
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md text-center"
              variants={fadeIn}
            >
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-pink-100 text-pink-600 mb-6">
                <Cake size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Custom Cakes</h3>
              <p className="text-brown-700">
                Create your dream cake for any occasion. From birthdays to weddings, we make your vision come to life.
              </p>
            </motion.div>

            {/* Service 2 */}
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md text-center"
              variants={fadeIn}
            >
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-pink-100 text-pink-600 mb-6">
                <Coffee size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Café Experience</h3>
              <p className="text-brown-700">
                Enjoy our cozy café atmosphere with freshly brewed coffee and delicious treats in the heart of Naivasha.
              </p>
            </motion.div>

            {/* Service 3 */}
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md text-center"
              variants={fadeIn}
            >
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-pink-100 text-pink-600 mb-6">
                <Utensils size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Catering Services</h3>
              <p className="text-brown-700">
                Let us cater your special events with our selection of cakes, pastries, sandwiches, and beverages.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="What Our Customers Say" 
            subtitle="The sweet feedback that keeps us baking"
            centered
          />

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {/* Testimonial 1 */}
            <motion.div 
              className="bg-cream-50 p-6 rounded-lg shadow-md relative"
              variants={fadeIn}
            >
              <div className="absolute -top-4 left-6 text-pink-600">
                <Heart fill="currentColor" size={32} />
              </div>
              <p className="italic text-brown-700 mb-6 pt-4">
                "Ordered a birthday cake for my daughter and it was absolutely perfect! Not only was it beautiful, but it tasted amazing too. Will definitely be ordering again!"
              </p>
              <div className="font-bold">- Sarah M.</div>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div 
              className="bg-cream-50 p-6 rounded-lg shadow-md relative"
              variants={fadeIn}
            >
              <div className="absolute -top-4 left-6 text-pink-600">
                <Heart fill="currentColor" size={32} />
              </div>
              <p className="italic text-brown-700 mb-6 pt-4">
                "The coffee and pastries are a must-try! I stop by at least twice a week for their mocha and cinnamon rolls. Such a cozy place with friendly staff."
              </p>
              <div className="font-bold">- Michael K.</div>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div 
              className="bg-cream-50 p-6 rounded-lg shadow-md relative"
              variants={fadeIn}
            >
              <div className="absolute -top-4 left-6 text-pink-600">
                <Heart fill="currentColor" size={32} />
              </div>
              <p className="italic text-brown-700 mb-6 pt-4">
                "Gabby's catered our office event and everyone was impressed! The variety of cakes and sandwiches was perfect, and everything was so delicious."
              </p>
              <div className="font-bold">- Jane W.</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-pink-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Order Your Dream Cake?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Whether it's for a special occasion or just to treat yourself, we'd love to bake something delicious for you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/order" className="btn bg-white text-pink-600 hover:bg-cream-100">
                Order Now
              </Link>
              <Link to="/contact" className="btn border-2 border-white text-white hover:bg-pink-700">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="flex items-center justify-center gap-4 mb-10">
            <Instagram size={32} className="text-pink-600" />
            <h2 className="text-3xl font-bold">Follow Us on Instagram</h2>
          </div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {/* Instagram Images - would be dynamically fetched in a real app */}
            {[
              "https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=1600",
              "https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=1600",
              "https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&w=1600",
              "https://images.pexels.com/photos/3992131/pexels-photo-3992131.jpeg?auto=compress&cs=tinysrgb&w=1600",
              "https://images.pexels.com/photos/372851/pexels-photo-372851.jpeg?auto=compress&cs=tinysrgb&w=1600",
              "https://images.pexels.com/photos/8548572/pexels-photo-8548572.jpeg?auto=compress&cs=tinysrgb&w=1600"
            ].map((img, index) => (
              <motion.div key={index} className="relative aspect-square overflow-hidden" variants={fadeIn}>
                <img 
                  src={img} 
                  alt={`Instagram post ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-8">
            <a 
              href="https://www.instagram.com/gabbyscakehouse" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-pink-600 font-medium hover:text-pink-700"
            >
              @gabbyscakehouse
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="section bg-cream-50">
        <div className="container-custom">
          <SectionTitle 
            title="Find Us" 
            subtitle="Visit our bakery on Moi Avenue, Naivasha and experience a slice of heaven"
            centered
          />

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start space-x-4 mb-4">
                  <MapPin className="text-pink-600 h-6 w-6 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Our Location</h3>
                    <p className="text-brown-700">Moi Avenue, Naivasha, Kenya</p>
                  </div>
                </div>

                <div className="space-y-4 mt-6">
                  <h4 className="font-bold">Opening Hours</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div>Monday - Friday</div>
                    <div>8:30 AM - 7:00 PM</div>
                    <div>Saturday</div>
                    <div>8:30 AM - 6:00 PM</div>
                    <div>Sunday</div>
                    <div>Closed</div>
                  </div>
                </div>

                <div className="mt-6">
                  <Link to="/contact" className="btn btn-primary w-full">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

            <div className="h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
              {/* Google Maps iframe - would be a proper API implementation in production */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6735897184406!2d36.4315!3d-0.7177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182918439defac27%3A0x40b65b6ad0e18e95!2sMoi%20Ave%2C%20Naivasha!5e0!3m2!1sen!2sus!4v1632914426404!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="Gabby's Cake House & Café Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;