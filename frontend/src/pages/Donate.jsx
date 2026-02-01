import React from 'react';
import { Heart, CreditCard, Gift, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Donate = () => {
    const programs = [
        { id: 'education', title: 'Sponsor a Child Education', desc: 'Provide books, uniform, and tuition for a year.', amount: '₹12,000' },
        { id: 'health', title: 'Medical Camp Support', desc: 'Medicine and equipment for rural village camps.', amount: '₹5,000' },
        { id: 'environment', title: 'Plant 100 Trees', desc: 'Contribution towards green cover initiatives.', amount: '₹2,500' },
    ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-emerald-600 text-white py-16 text-center rounded-b-[3rem] shadow-xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-black/10" />
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber-400 rounded-full blur-3xl opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-5xl font-bold mb-4">Make a Difference</h1>
            <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
                Your small contribution can create a massive impact. 100% of your donation goes directly to the cause.
            </p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-10">
        <div className="bg-white p-8 rounded-3xl shadow-xl max-w-4xl mx-auto border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Choose a Cause</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
                {programs.map(prog => (
                    <div key={prog.id} className="border-2 border-transparent hover:border-emerald-500 bg-gray-50 p-6 rounded-2xl cursor-pointer transition-all hover:bg-emerald-50 group text-center">
                        <div className="w-12 h-12 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm text-emerald-600 mb-4 group-hover:scale-110 transition-transform">
                            <Gift size={24} />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">{prog.title}</h3>
                        <p className="text-sm text-gray-500 mb-4">{prog.desc}</p>
                        <div className="text-lg font-bold text-emerald-600">{prog.amount}</div>
                    </div>
                ))}
            </div>

            <div className="text-center">
                <p className="text-gray-500 mb-6">Or enter a custom amount</p>
                <div className="flex gap-4 justify-center max-w-md mx-auto mb-8">
                    <span className="p-4 bg-gray-100 rounded-l-xl font-bold text-gray-500 text-xl">₹</span>
                    <input type="number" placeholder="Enter Amount" className="w-full p-4 bg-gray-100 rounded-r-xl font-bold text-xl outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
                
                <button className="w-full md:w-auto px-12 py-4 bg-amber-400 text-gray-900 font-bold text-xl rounded-full shadow-lg hover:bg-amber-500 hover:shadow-amber-200 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 mx-auto">
                    Proceed to Pay <ArrowRight size={24} />
                </button>
            </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
            <div className="p-6">
                <CheckCircle className="mx-auto text-emerald-600 mb-4" size={32} />
                <h3 className="font-bold text-lg mb-2">Tax Benefits</h3>
                <p className="text-gray-600">All donations are tax deductible under Section 80G.</p>
            </div>
            <div className="p-6">
                <Heart className="mx-auto text-emerald-600 mb-4" size={32} />
                <h3 className="font-bold text-lg mb-2">Secure Payment</h3>
                <p className="text-gray-600">We use SSL encryption to ensure your data is safe.</p>
            </div>
            <div className="p-6">
                <CreditCard className="mx-auto text-emerald-600 mb-4" size={32} />
                <h3 className="font-bold text-lg mb-2">Transparency</h3>
                <p className="text-gray-600">Receive regular updates on how your funds are used.</p>
            </div>
        </div>
      </div>
    </div>
  )
}
export default Donate;
