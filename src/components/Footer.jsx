import React from 'react';
import { Instagram, Facebook, Twitter, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-10 bg-white border-t border-gray-100 text-center">
            <div className="flex justify-center gap-6 mb-6">
                <a href="#" className="p-3 bg-pink-50 rounded-full text-primary hover:bg-pink-100 transition-colors">
                    <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 bg-pink-50 rounded-full text-primary hover:bg-pink-100 transition-colors">
                    <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 bg-pink-50 rounded-full text-primary hover:bg-pink-100 transition-colors">
                    <Twitter className="w-5 h-5" />
                </a>
            </div>

            <p className="flex items-center justify-center gap-2 text-text-light text-sm font-medium">
                Made with <Heart className="w-4 h-4 text-red-400 fill-current animate-pulse" /> by <span className="font-bold text-text">Antigravity</span>
            </p>
        </footer>
    );
};

export default Footer;
