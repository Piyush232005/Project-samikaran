import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Menu, X, Heart } from 'lucide-react';
import { toggleMobileMenu, closeMobileMenu } from '../../store/slices/uiSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const { isMobileMenuOpen } = useSelector((state) => state.ui);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Publications', path: '/publications' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group" onClick={() => dispatch(closeMobileMenu())}>
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:scale-105 transition-transform shadow-md">
                S
            </div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                SAMIKARAN
            </span>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
                <Link 
                    key={link.path} 
                    to={link.path}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                        isActive(link.path) ? 'text-primary font-semibold' : 'text-gray-600'
                    }`}
                >
                    {link.name}
                </Link>
            ))}
            <Link 
                to="/donate" 
                className="flex items-center gap-2 bg-gradient-to-r from-primary to-emerald-600 hover:from-emerald-600 hover:to-primary text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
                <Heart size={18} fill="currentColor" className="animate-pulse" />
                <span>Donate</span>
            </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
            className="md:hidden p-2 text-gray-600"
            onClick={() => dispatch(toggleMobileMenu())}
        >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-lg p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
             {navLinks.map((link) => (
                <Link 
                    key={link.path} 
                    to={link.path}
                    className={`block py-2 px-4 rounded-lg ${
                        isActive(link.path) ? 'bg-primary/10 text-primary' : 'text-gray-600 hover:bg-gray-50'
                    }`}
                    onClick={() => dispatch(closeMobileMenu())}
                >
                    {link.name}
                </Link>
            ))}
             <Link 
                to="/donate" 
                className="flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-lg font-medium shadow-md"
                onClick={() => dispatch(closeMobileMenu())}
            >
                <Heart size={18} fill="currentColor" />
                <span>Donate Now</span>
            </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
