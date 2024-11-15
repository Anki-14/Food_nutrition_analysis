import React from 'react';

const CommunitySupport = () => {
  return (
    <>
      <div className="relative text-white text-center py-20 pt-64 bg-cover bg-center">
        <div className="absolute inset-0" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1529209076408-5a115ec9f1c6?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", filter: "grayscale(100%)", backgroundSize: "cover", backgroundPosition: "center" }}></div>
        <div className="absolute inset-0 bg-blue-900 opacity-30"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-4">Join Our Supportive Community</h1>
          <p className="text-lg mb-8">Connect with others, share experiences, and find support for your nutritional journey.</p>
          <button className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-full z-20 relative">Join Now</button>
        </div>
      </div>

      <div className="text-black py-16 px-5 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-8 text-blue-700">Community Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Join Forums & Groups</h3>
          <p>Connect with others who share similar goals and experiences.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Peer Support & Encouragement</h3>
          <p>Find motivation and support from peers on the same journey.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Exchange Recipes & Tips</h3>
          <p>Share and discover recipes and tips for optimal nutrition.</p>
        </div>
      </div>
    </div>

    <div className="text-black py-16 px-5 bg-white text-center">
      <h2 className="text-3xl font-bold mb-8 text-blue-700">Join the Community</h2>
      <p className="text-lg mb-8">Sign up today and become part of a thriving community dedicated to better nutrition.</p>
      <button className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-full">Sign Up</button>
    </div>

    <div className="text-black px-5 py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-8 text-blue-700">Success Stories</h2>
      <p className="text-lg mb-12">Read about the positive impact our community has had on people's lives.</p>
    <div className="flex flex-wrap justify-center gap-8">
    {/* Card 1 */}
    <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-lg">
      <img className="w-16 h-16 rounded-full mx-auto mb-4" src="https://via.placeholder.com/100" alt="User 1" />
      <p className="text-gray-800 font-semibold mb-2">John Doe</p>
      <p className="text-gray-600 mb-4">"Joining this community has been a life-changing experience. I've never felt more supported on my health journey."</p>
    </div>
    {/* Card 2 */}
    <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-lg">
      <img className="w-16 h-16 rounded-full mx-auto mb-4" src="https://via.placeholder.com/100" alt="User 2" />
      <p className="text-gray-800 font-semibold mb-2">Jane Smith</p>
      <p className="text-gray-600 mb-4">"The support and encouragement I've received here have been instrumental in reaching my goals."</p>
    </div>
    {/* Card 3 */}
    <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-lg">
      <img className="w-16 h-16 rounded-full mx-auto mb-4" src="https://via.placeholder.com/100" alt="User 3" />
      <p className="text-gray-800 font-semibold mb-2">Emily Johnson</p>
      <p className="text-gray-600 mb-4">"This community has provided me with the knowledge and tools to improve my nutrition and overall well-being."</p>
    </div>
  </div>
</div>

    </>
  );
}

export default CommunitySupport;
