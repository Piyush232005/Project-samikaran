import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Users, BookOpen, Globe, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-amber-50">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-amber-200/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-emerald-100/30 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4" />
        
        <div className="container mx-auto px-4 z-10 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <div className="inline-block px-4 py-2 bg-white rounded-full shadow-sm text-emerald-600 font-semibold mb-6 border border-emerald-100">
              Welcome to SAMIKARAN
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-gray-900">
              Transforming <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-amber-500">Lives</span>, <br />
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-emerald-600">Futures</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
              We empower communities through education, healthcare, and social welfare. Join our mission to create a sustainable and equitable future for all.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link to="/donate" className="bg-emerald-600 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-emerald-700 hover:shadow-xl transition-all flex items-center gap-2 group">
                Donate Now
                <Heart className="group-hover:scale-110 transition-transform" size={20} fill="currentColor" />
              </Link>
              <Link to="/about" className="bg-white text-gray-800 border border-gray-200 px-8 py-4 rounded-full font-bold shadow-sm hover:bg-gray-50 transition-all flex items-center gap-2">
                Learn More
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
             {/* Placeholder for Main Hero Image - Using a decorative composition */}
             <div className="relative z-10 grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                   <div className="h-64 bg-emerald-600 rounded-2xl shadow-xl overflow-hidden relative group">
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                        <div className="absolute inset-0 flex items-center justify-center text-white font-bold opacity-50 text-2xl">Community</div>
                   </div>
                   <div className="h-40 bg-amber-400 rounded-2xl shadow-lg relative overflow-hidden">
                       <div className="absolute inset-0 flex items-center justify-center text-white font-bold opacity-50 text-xl">Education</div>
                   </div>
                </div>
                <div className="space-y-4">
                   <div className="h-40 bg-emerald-400 rounded-2xl shadow-lg relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center text-white font-bold opacity-50 text-xl">Health</div>
                   </div>
                   <div className="h-64 bg-gray-900 rounded-2xl shadow-xl overflow-hidden relative">
                        <div className="absolute inset-0 flex items-center justify-center text-white font-bold opacity-50 text-2xl">Growth</div>
                   </div>
                </div>
             </div>
             
             {/* Abstract elements */}
             <div className="absolute -top-10 -right-10 w-24 h-24 bg-yellow-300 rounded-full blur-xl opacity-60 animate-pulse" />
             <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-green-300 rounded-full blur-xl opacity-60" />
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                {[
                    { icon: Users, label: 'Lives Impacted', value: '50,000+' },
                    { icon: BookOpen, label: 'Children Educated', value: '1,200+' },
                    { icon: Globe, label: 'Villages Covered', value: '45+' },
                    { icon: Leaf, label: 'Trees Planted', value: '10,000+' }
                ].map((stat, idx) => (
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1, duration: 0.3 }}
                        key={idx}
                        className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm cursor-pointer transition-all border border-transparent hover:border-amber-400/50 hover:shadow-2xl"
                    >
                        <stat.icon size={40} className="mx-auto mb-4 text-amber-400" />
                        <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
                        <p className="text-emerald-100 font-medium">{stat.label}</p>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* Quick About */}
      <section className="py-24 bg-white">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
              <div className="relative">
                  <div className="w-full h-[500px] bg-gray-100 rounded-2xl overflow-hidden relative">
                      {/* Placeholder Image */}
                       <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400">
                           Image Placeholder: Project Site
                       </div>
                  </div>
                  <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-xl max-w-xs transition-transform hover:-translate-y-2 duration-300">
                      <p className="text-emerald-600 font-bold text-lg mb-2">"Our goal is simple."</p>
                      <p className="text-gray-600 italic">To ensure no child is left behind and every voice is heard.</p>
                  </div>
              </div>
              <div>
                  <h2 className="text-sm font-bold tracking-wide text-amber-500 uppercase mb-2">About Us</h2>
                  <h3 className="text-4xl font-bold text-gray-900 mb-6">We Are The Architects of Social Change</h3>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                      Established in 2010, SAMIKARAN has been at the forefront of social development. We work tirelessly to bridge the gap between resources and those in need.
                  </p>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                      Our multi-faceted approach targets education, women empowerment, health awareness, and environmental conservation.
                  </p>
                  <Link to="/about" className="text-emerald-600 font-bold hover:text-emerald-700 inline-flex items-center gap-2 text-lg group">
                      Read Our Full Story <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
              </div>
          </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
               <div className="text-center mb-16">
                  <h2 className="text-sm font-bold tracking-wide text-amber-500 uppercase mb-2">Our Work</h2>
                  <h3 className="text-4xl font-bold text-gray-900">Recent Projects</h3>
               </div>
               
               <div className="grid md:grid-cols-3 gap-8">
                   {[1, 2, 3].map((i) => (
                       <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group transform hover:-translate-y-2">
                           <div className="h-56 bg-gray-200 relative overflow-hidden">
                               <div className="absolute inset-0 bg-gray-300 group-hover:scale-110 transition-transform duration-700" />
                               <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                               <div className="absolute top-4 right-4 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase shadow-sm">Active</div>
                           </div>
                           <div className="p-8">
                               <h4 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-emerald-600 transition-colors">Project Title {i}</h4>
                               <p className="text-gray-600 mb-6">Brief description of the project focusing on the impact and goals achieved so far.</p>
                               <Link to="/projects" className="text-emerald-600 font-bold hover:text-amber-500 transition-colors uppercase text-sm tracking-wide inline-flex items-center gap-1">
                                   View Details <ArrowRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                               </Link>
                           </div>
                       </div>
                   ))}
               </div>
               
               <div className="text-center mt-12">
                   <Link to="/projects" className="inline-block border-2 border-emerald-600 text-emerald-600 px-8 py-3 rounded-full font-bold hover:bg-emerald-600 hover:text-white transition-all">
                       View All Projects
                   </Link>
               </div>
          </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-amber-400 relative overflow-hidden">
           <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />
           <div className="container mx-auto px-4 text-center relative z-10">
               <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Join Hands With Us</h2>
               <p className="text-xl text-gray-800 mb-10 max-w-2xl mx-auto">
                   Your contribution can light up a life. Volunteer, donate, or spread the word.
               </p>
               <div className="flex gap-4 justify-center">
                   <Link to="/contact" className="bg-gray-900 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-gray-800 transition-colors">
                       Become a Volunteer
                   </Link>
                   <Link to="/donate" className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold shadow-lg hover:bg-gray-100 transition-colors">
                       Make a Donation
                   </Link>
               </div>
           </div>
      </section>
    </div>
  );
};

export default Home;
