import React from 'react';
import { Cake } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <Cake className="h-8 w-8 text-pink-600 mr-2" />
      <div className="flex flex-col">
        <span className="font-playfair text-xl font-bold leading-tight">Gabby's</span>
        <span className="text-xs uppercase tracking-wider text-brown-600">Cake House & Café</span>
      </div>
    </div>
  );
};

export default Logo;