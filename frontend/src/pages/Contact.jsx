import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-emerald-100 rounded-full text-emerald-600 font-semibold mb-4">Contact Us</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about our programs or want to volunteer? We'd love to hear from you.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
           {/* Contact Info */}
           <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl h-fit">
              <h3 className="text-2xl font-bold mb-8 text-gray-900 border-b pb-4">Contact Information</h3>
              <div className="space-y-8">
                 <div className="flex items-start gap-4 group">
                    <div className="p-4 bg-emerald-50 text-emerald-600 rounded-2xl group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                        <MapPin size={28} />
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 text-lg mb-1">Our Office</h4>
                        <p className="text-gray-600 leading-relaxed">123 NGO Street, Social Welfare Area,<br/>New Delhi, India - 110001</p>
                    </div>
                 </div>
                 
                 <div className="flex items-start gap-4 group">
                    <div className="p-4 bg-emerald-50 text-emerald-600 rounded-2xl group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                        <Phone size={28} />
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 text-lg mb-1">Phone</h4>
                        <p className="text-gray-600">+91 98765 43210</p>
                        <p className="text-gray-400 text-sm">Mon-Fri 9am to 6pm</p>
                    </div>
                 </div>

                 <div className="flex items-start gap-4 group">
                    <div className="p-4 bg-emerald-50 text-emerald-600 rounded-2xl group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                        <Mail size={28} />
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 text-lg mb-1">Email</h4>
                        <p className="text-gray-600">contact@samikaran.org</p>
                        <p className="text-gray-600">support@samikaran.org</p>
                    </div>
                 </div>
              </div>
           </div>

           {/* Form */}
           <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Send us a Message</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                 <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">First Name</label>
                        <input type="text" placeholder="John" className="w-full p-4 bg-gray-50 rounded-xl border border-gray-100 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Last Name</label>
                        <input type="text" placeholder="Doe" className="w-full p-4 bg-gray-50 rounded-xl border border-gray-100 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all" />
                    </div>
                 </div>
                 
                 <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Email Address</label>
                    <input type="email" placeholder="john@example.com" className="w-full p-4 bg-gray-50 rounded-xl border border-gray-100 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all" />
                 </div>

                 <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Mobile Number</label>
                    <div className="flex gap-2">
                        <select className="p-4 bg-gray-50 rounded-xl border border-gray-100 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all min-w-[120px] cursor-pointer" defaultValue="+91">
                            <option value="+91">🇮🇳 +91</option>
                            <option value="+1">🇺🇸 +1</option>
                            <option value="+44">🇬🇧 +44</option>
                            <option value="+977">🇳🇵 +977</option>
                            <option value="+61">🇦🇺 +61</option>
                            <option value="+81">🇯🇵 +81</option>
                            <option value="+49">🇩🇪 +49</option>
                        </select>
                        <input type="tel" placeholder="Enter mobile number" className="w-full p-4 bg-gray-50 rounded-xl border border-gray-100 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all" />
                    </div>
                 </div>

                 <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Message</label>
                    <textarea placeholder="How can we help?" rows="5" className="w-full p-4 bg-gray-50 rounded-xl border border-gray-100 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all resize-none"></textarea>
                 </div>

                 <button className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold hover:bg-emerald-700 transform hover:-translate-y-1 transition-all shadow-lg hover:shadow-emerald-200 flex items-center justify-center gap-2 text-lg">
                    Send Message <Send size={20} />
                 </button>
              </form>
           </div>
        </div>
      </div>
    </div>
  )
}
export default Contact;
