import React, { useState } from 'react';
import { Star, MapPin, Clock, ChefHat, Coffee, Heart, Quote } from 'lucide-react';
import './Cafe'

const CafeSection = () => {
  const [activeTab, setActiveTab] = useState('photos');
  const [likedReviews, setLikedReviews] = useState(new Set());

  const toggleLike = (reviewId) => {
    const newLiked = new Set(likedReviews);
    if (newLiked.has(reviewId)) {
      newLiked.delete(reviewId);
    } else {
      newLiked.add(reviewId);
    }
    setLikedReviews(newLiked);
  };

  const hotelPhotos = [
    { id: 1, url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=600&fit=crop', caption: 'Main Dining Area' },
    { id: 2, url: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&h=600&fit=crop', caption: 'Cozy Corner Seating' },
    { id: 3, url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop', caption: 'Outdoor Terrace' },
    { id: 4, url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop', caption: 'Coffee Bar' },
    { id: 5, url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop', caption: 'Private Dining Room' },
    { id: 6, url: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?w=800&h=600&fit=crop', caption: 'Chef\'s Kitchen View' }
  ];

  const menuItems = [
    {
      category: 'Breakfast',
      items: [
        { name: 'Artisan Croissant', price: '$12', description: 'Butter croissant with seasonal jam', image: 'https://images.unsplash.com/photo-1555507036-ab794f575c5f?w=300&h=200&fit=crop' },
        { name: 'Avocado Toast Deluxe', price: '$18', description: 'Sourdough, smashed avocado, poached egg', image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=300&h=200&fit=crop' },
        { name: 'Pancake Stack', price: '$16', description: 'Fluffy pancakes with maple syrup & berries', image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=300&h=200&fit=crop' }
      ]
    },
    {
      category: 'Lunch',
      items: [
        { name: 'Truffle Burger', price: '$28', description: 'Wagyu beef, truffle aioli, brioche bun', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop' },
        { name: 'Caesar Salad Supreme', price: '$22', description: 'Romaine, parmesan, house croutons', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=200&fit=crop' },
        { name: 'Salmon Teriyaki', price: '$32', description: 'Grilled salmon, jasmine rice, vegetables', image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=300&h=200&fit=crop' }
      ]
    },
    {
      category: 'Beverages',
      items: [
        { name: 'Signature Latte', price: '$8', description: 'House blend with oat milk foam art', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=200&fit=crop' },
        { name: 'Fresh Smoothie Bowl', price: '$14', description: 'Acai, banana, granola, coconut', image: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=300&h=200&fit=crop' },
        { name: 'Craft Cocktail', price: '$18', description: 'Seasonal ingredients, premium spirits', image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=300&h=200&fit=crop' }
      ]
    }
  ];

  const reviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      rating: 5,
      text: 'Absolutely incredible experience! The ambiance is perfect and the food exceeded all expectations. The truffle burger was divine.',
      date: '2 days ago',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      verified: true
    },
    {
      id: 2,
      name: 'Marcus Chen',
      rating: 5,
      text: 'Best coffee in the city! The baristas are true artists and the atmosphere is so welcoming. Perfect spot for meetings or relaxation.',
      date: '5 days ago',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      verified: true
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      rating: 4,
      text: 'Stunning interior design and fantastic service. The avocado toast was fresh and delicious. Will definitely be returning soon!',
      date: '1 week ago',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      verified: false
    },
    {
      id: 4,
      name: 'David Thompson',
      rating: 5,
      text: 'Exceptional dining experience from start to finish. The salmon teriyaki was cooked to perfection and the staff was incredibly attentive.',
      date: '2 weeks ago',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      verified: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-rose-50">
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1920&h=1080&fit=crop" 
          alt="Cafe Interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center text-white px-6 max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-wide">
              EXPLORE
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-rose-200">
              Our Café
            </h2>
            <p className="text-xl md:text-2xl font-semibold mb-12 max-w-2xl mx-auto leading-relaxed">
              A culinary journey through exquisite flavors and unforgettable moments
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
             
              <button className="px-8 py-4 bg-rose-600 text-white rounded-full hover:bg-rose-700 transition-all duration-300 transform hover:scale-105">
                Make Reservation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center space-x-8 py-6">
            {[
              { id: 'photos', label: 'Gallery', icon: <MapPin className="w-5 h-5" /> },
              { id: 'menu', label: 'Menu', icon: <ChefHat className="w-5 h-5" /> },
              { id: 'reviews', label: 'Reviews', icon: <Star className="w-5 h-5" /> }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-rose-600 text-white shadow-lg transform scale-105'
                    : 'text-gray-600 hover:text-rose-600 hover:bg-rose-50'
                }`}
              >
                {tab.icon}
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Photos Section */}
        {activeTab === 'photos' && (
          <div className="space-y-12 animate-fade-in">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-semibold mb-6 text-gray-800">Our Spaces</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover the elegant atmosphere and sophisticated design that makes our café unique
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hotelPhotos.map((photo, index) => (
                <div
                  key={photo.id}
                  className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <img
                    src={photo.url}
                    alt={photo.caption}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-light">{photo.caption}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Menu Section */}
        {activeTab === 'menu' && (
          <div className="space-y-16 animate-fade-in">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-thin mb-6 text-gray-800">Our Menu</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Carefully crafted dishes using the finest ingredients and innovative techniques
              </p>
            </div>
            {menuItems.map((category, categoryIndex) => (
              <div key={category.category} className="space-y-8">
                <h3 className="text-3xl font-light text-center text-rose-600 mb-12">
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={item.name}
                      className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:scale-105"
                      style={{ animationDelay: `${(categoryIndex * 3 + itemIndex) * 0.1}s` }}
                    >
                      <div className="relative overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                          <span className="text-rose-600 font-semibold">{item.price}</span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h4 className="text-xl font-semibold mb-2 text-gray-800">{item.name}</h4>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Reviews Section */}
        {activeTab === 'reviews' && (
          <div className="space-y-12 animate-fade-in">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-thin mb-6 text-gray-800">Guest Reviews</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Hear what our valued guests have to say about their dining experience
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {reviews.map((review, index) => (
                <div
                  key={review.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 relative overflow-hidden group transform hover:scale-102"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute top-4 right-4 text-rose-200 opacity-50">
                    <Quote className="w-12 h-12" />
                  </div>
                  <div className="flex items-start space-x-4 mb-6">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-rose-100"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="text-lg font-semibold text-gray-800">{review.name}</h4>
                        {review.verified && (
                          <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                            Verified
                          </div>
                        )}
                      </div>
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6 text-lg">{review.text}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>Recent diner</span>
                    </div>
                    <button
                      onClick={() => toggleLike(review.id)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                        likedReviews.has(review.id)
                          ? 'bg-rose-100 text-rose-600'
                          : 'text-gray-500 hover:text-rose-600 hover:bg-rose-50'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${likedReviews.has(review.id) ? 'fill-current' : ''}`} />
                      <span className="text-sm">Helpful</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <button className="px-8 py-4 bg-rose-600 text-white rounded-full hover:bg-rose-700 transition-all duration-300 transform hover:scale-105">
                Read More Reviews
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Footer CTA */}
      <div className="bg-gray-800 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-light mb-6">Ready for an Unforgettable Experience?</h2>
          <p className="text-xl mb-8 opacity-90">Reserve your table today and discover why we're the city's premier dining destination</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-rose-600 text-white rounded-full hover:bg-rose-800 transition-all duration-300 transform hover:scale-105 font-semibold">
              Make Reservation
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-rose-600 transition-all duration-300 transform hover:scale-105">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default CafeSection;