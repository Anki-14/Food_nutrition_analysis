import React from 'react';

const ExpertConsultation = () => {
  return (
    <main className="py-16 px-6 md:px-12 bg-[url('https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center bg-no-repeat bg-fixed">
      {/* Expert Consultation Section */}
      <section className="container mx-auto max-w-4xl bg-white bg-opacity-80 rounded-lg shadow-xl p-8 md:p-12">
        <h2 className="text-4xl font-bold mb-6 text-blue-800">Expert Consultation</h2>
        <p className="text-lg mb-6 text-gray-700">Gain access to top nutritionists and dietitians who provide personalized guidance to help you achieve your health goals. Our expert consultation services include:</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start p-6 bg-blue-50 rounded-lg shadow-md">
            <div className="flex-shrink-0">
              <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M3 6h18M3 14h18M3 18h18" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-semibold mb-2 text-blue-700">Access to Nutritionists and Dietitians</h3>
              <p>Receive expert guidance and support from certified nutritionists and dietitians to help you with personalized nutrition plans and dietary advice.</p>
            </div>
          </div>

          <div className="flex items-start p-6 bg-blue-50 rounded-lg shadow-md">
            <div className="flex-shrink-0">
              <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h3m-3 0V9m0 3v3m6-6h3m-3 0V9m0 3v3M6 6h3m-3 0V3m0 3v3M3 12h3m-3 0V9m0 3v3" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-semibold mb-2 text-blue-700">Virtual Appointments</h3>
              <p>Schedule virtual appointments with experts for one-on-one advice and consultations from the comfort of your home.</p>
            </div>
          </div>

          <div className="flex items-start p-6 bg-blue-50 rounded-lg shadow-md">
            <div className="flex-shrink-0">
              <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16M4 22h16" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-semibold mb-2 text-blue-700">Collaborative Tools</h3>
              <p>Utilize collaborative tools to set goals, track your progress, and stay motivated throughout your journey to better health.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ExpertConsultation;
