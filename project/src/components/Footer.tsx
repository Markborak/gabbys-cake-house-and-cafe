import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, MapPin, Phone, Clock, ExternalLink } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brown-900 text-cream-100 py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and about */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Logo />
            </div>
            <p className="mt-4 text-cream-200">
              Delicious handcrafted cakes, pastries, and coffee in the heart of Naivasha, Kenya.
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.instagram.com/gabbyscakehouse"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream-100 hover:text-pink-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://wanderlog.com/profile/share/gabbyscakehouse"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream-100 hover:text-pink-400 transition-colors"
                aria-label="Wanderlog"
              >
                <ExternalLink size={24} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-cream-50">Menu</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/menu?category=cakes" className="hover:text-pink-400 transition-colors">
                  Cakes
                </Link>
              </li>
              <li>
                <Link to="/menu?category=pastries" className="hover:text-pink-400 transition-colors">
                  Pastries
                </Link>
              </li>
              <li>
                <Link to="/menu?category=drinks" className="hover:text-pink-400 transition-colors">
                  Coffee & Drinks
                </Link>
              </li>
              <li>
                <Link to="/menu?category=sandwiches" className="hover:text-pink-400 transition-colors">
                  Sandwiches
                </Link>
              </li>
            </ul>
          </div>

          {/* Opening hours */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-cream-50">Opening Hours</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Monday - Friday</p>
                  <p>8:30 AM - 7:00 PM</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Saturday</p>
                  <p>8:30 AM - 6:00 PM</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Sunday</p>
                  <p>Closed</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-cream-50">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <p>Moi Avenue, Naivasha, Kenya</p>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <p>+254 719 346351</p>
              </li>
              <li>
                <Link to="/contact" className="btn btn-primary mt-2">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brown-700 mt-10 pt-6 text-center text-cream-300">
          <p>&copy; {new Date().getFullYear()} Gabby's Cake House & Café. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;