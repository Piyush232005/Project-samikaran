import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Target, Globe, ShieldCheck, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
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
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop" 
            alt="Children smiling" 
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            Empowering Lives, <br/> Building Futures
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl font-light text-gray-100 max-w-2xl mx-auto"
          >
            At Samikaran, we believe in the power of collective action to transform communities and create lasting change.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-green-600 uppercase tracking-widest mb-2">Our Mission</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Bridging the Gap for a Better Tomorrow</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              We are dedicated to providing education, healthcare, and sustainable livelihood opportunities to the underprivileged. Our holistic approach ensures that every individual has the chance to thrive and contribute to society.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="p-4 bg-green-50 rounded-xl border border-green-100">
                <Target className="w-8 h-8 text-green-600 mb-3" />
                <h4 className="font-bold text-gray-900">Focused Impact</h4>
                <p className="text-sm text-gray-600 mt-1">Targeted interventions for maximum efficiency.</p>
              </div>
              <div className="p-4 bg-yellow-50 rounded-xl border border-yellow-100">
                <Globe className="w-8 h-8 text-yellow-600 mb-3" />
                <h4 className="font-bold text-gray-900">Global Reach</h4>
                <p className="text-sm text-gray-600 mt-1">Connecting resources to needs everywhere.</p>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-yellow-400/20 rounded-2xl transform rotate-3"></div>
            <img 
              src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070&auto=format&fit=crop" 
              alt="Community work" 
              className="relative rounded-2xl shadow-xl w-full h-[500px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Why Donate Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Support Samikaran?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Your contribution creates ripples of change. Here's how we ensure your support counts.</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <ShieldCheck className="w-10 h-10 text-green-600" />,
                title: "100% Transparency",
                desc: "We practice radical transparency. Every donation is tracked, and regular reports are shared with our donors."
              },
              {
                icon: <Users className="w-10 h-10 text-blue-600" />,
                title: "Direct Community Impact",
                desc: "We work directly with beneficiaries, minimizing administrative costs to ensure funds reach those in need."
              },
              {
                icon: <Heart className="w-10 h-10 text-red-500" />,
                title: "Tax Benefits",
                desc: "Donations to Samikaran are eligible for tax exemption under section 80G of the Income Tax Act."
              }
            ].map((benefit, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
              >
                <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Dynamic Gallery Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900">Life at Samikaran</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="md:col-span-2 row-span-2 rounded-2xl overflow-hidden relative group"
          >
            <img 
              src="https://images.unsplash.com/photo-1524069290683-0457abfe42c3?q=80&w=2070&auto=format&fit=crop" 
              alt="Education" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-2xl font-bold">Education For All</h3>
              <p className="text-gray-200">Bringing quality education to remote villages.</p>
            </div>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="rounded-2xl overflow-hidden relative group"
          >
            <img 
              src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1932&auto=format&fit=crop" 
              alt="Events" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
             <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                 <span className="text-white font-bold text-lg">Healthcare Events</span>
             </div>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="rounded-2xl overflow-hidden relative group"
          >
            <img 
              src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2070&auto=format&fit=crop" 
              alt="Volunteers" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
             <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                 <span className="text-white font-bold text-lg">Our Volunteers</span>
             </div>
          </motion.div>

           <motion.div 
            whileHover={{ scale: 1.02 }}
            className="md:col-span-3 rounded-2xl overflow-hidden relative group h-[300px]"
          >
            <img 
              src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2070&auto=format&fit=crop" 
              alt="Donation drive" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-center justify-between px-10">
               <div className="text-white max-w-xl">
                   <h3 className="text-3xl font-bold mb-2">Join Our Mission</h3>
                   <p className="text-gray-200">Be a part of the change you wish to see. Every hand counts.</p>
               </div>
               <Link 
                to="/donate"
                className="hidden md:flex bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-8 rounded-full items-center gap-2 transition-all transform hover:scale-105"
               >
                   Donate Now <ArrowRight className="w-5 h-5"/>
               </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section with Parallax Feel */}
      <section className="py-20 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
             {[
                 { number: "50+", label: "Villages Adopted" },
                 { number: "10k+", label: "Lives Impacted" },
                 { number: "500+", label: "Volunteers" },
                 { number: "15+", label: "Years of Service" },
             ].map((stat, idx) => (
                 <div key={idx} className="p-4">
                     <h4 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">{stat.number}</h4>
                     <p className="text-green-100 font-medium">{stat.label}</p>
                 </div>
             ))}
        </div>
      </section>
    </div>
  );
};

export default About;

