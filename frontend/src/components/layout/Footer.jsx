import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t-4 border-secondary">
        <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                <div>
                    <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">SAMIKARAN</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                        Empowering communities and creating sustainable change through education, healthcare, and social welfare programs.
                    </p>
                    <div className="flex gap-4">
                        {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                            <a key={i} href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors text-white hover:scale-110 transform">
                                <Icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>
                
                <div>
                    <h4 className="text-lg font-semibold mb-6 border-b-2 border-primary inline-block pb-2">Quick Links</h4>
                    <ul className="space-y-4 text-gray-400">
                        <li><Link to="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
                        <li><Link to="/projects" className="hover:text-secondary transition-colors">Our Projects</Link></li>
                        <li><Link to="/publications" className="hover:text-secondary transition-colors">Publications</Link></li>
                        <li><Link to="/contact" className="hover:text-secondary transition-colors">Contact Us</Link></li>
                        <li><Link to="/donate" className="hover:text-secondary transition-colors font-bold text-primary">Donate</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-semibold mb-6 border-b-2 border-primary inline-block pb-2">Contact Info</h4>
                    <ul className="space-y-4 text-gray-400">
                        <li className="flex gap-3 items-start">
                            <MapPin className="mt-1 shrink-0 text-primary" size={20} />
                            <span>123 NGO Street, Social Welfare Area, New Delhi, India</span>
                        </li>
                        <li className="flex gap-3 items-center">
                            <Phone className="shrink-0 text-primary" size={20} />
                            <span>+91 98765 43210</span>
                        </li>
                        <li className="flex gap-3 items-center">
                            <Mail className="shrink-0 text-primary" size={20} />
                            <span>contact@samikaran.org</span>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-semibold mb-6 border-b-2 border-primary inline-block pb-2">Newsletter</h4>
                    <p className="text-gray-400 mb-4">Subscribe to our newsletter for latest updates.</p>
                    <form className="flex flex-col gap-3" onSubmit={(e) => {
                        e.preventDefault();
                        const email = e.target.email.value;
                        if (!email) return;

                        // Local Storage Logic
                        const existing = JSON.parse(localStorage.getItem('subscribers') || '[]');
                        if (!existing.includes(email)) {
                            existing.push(email);
                            localStorage.setItem('subscribers', JSON.stringify(existing));
                            alert("You are subscribed! Thank you for joining us."); // Simple popup as requested
                            e.target.reset();
                        } else {
                            alert("You are already subscribed!");
                        }
                    }}>
                        <input name="email" type="email" placeholder="Your Email" className="bg-gray-800 border-none rounded-lg p-3 focus:ring-2 focus:ring-primary text-white outline-none" required />
                        <button type="submit" className="bg-primary hover:bg-emerald-700 text-white py-3 rounded-lg font-medium transition-colors shadow-lg">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
            
            <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                <p>&copy; {new Date().getFullYear()} SAMIKARAN. All rights reserved.</p>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
