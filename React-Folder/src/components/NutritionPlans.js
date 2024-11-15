import React from 'react';

const NutritionPlans = () => {
  return (
    <main className="py-32 px-6 md:px-12 bg-[url('https://images.pexels.com/photos/5946083/pexels-photo-5946083.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover bg-center bg-no-repeat bg-fixed">
      {/* Tailored Nutrition Plans */}
      <section className="mb-16">
        <div className="container mx-auto max-w-4xl bg-white shadow-xl rounded-lg p-8 md:p-12">
          <h2 className="text-4xl font-bold mb-6 text-blue-800">Tailored Nutrition Plans</h2>
          <p className="text-lg mb-4 text-gray-600">Receive nutrition plans customized based on your genetic analysis. Our approach ensures that every plan is specifically designed to fit your unique needs and optimize your health.</p>
          <ul className="list-disc list-inside pl-6 space-y-2">
            <li className="text-gray-700">Personalized daily calorie intake</li>
            <li className="text-gray-700">Macronutrient distribution based on your profile</li>
            <li className="text-gray-700">Vitamins and minerals recommendations</li>
          </ul>
        </div>
      </section>

      {/* Customized Meal Suggestions */}
      <section className="mb-16">
        <div className="container mx-auto max-w-4xl bg-white shadow-xl rounded-lg p-8 md:p-12">
          <h2 className="text-4xl font-bold mb-6 text-blue-800">Customized Meal Suggestions</h2>
          <p className="text-lg mb-4 text-gray-600">Get meal suggestions and recipes that align with your personalized nutrition plan. Enjoy a variety of options that cater to your taste preferences and nutritional requirements.</p>
          <ul className="list-disc list-inside pl-6 space-y-2">
            <li className="text-gray-700">Weekly meal plans with diverse recipes</li>
            <li className="text-gray-700">Easy-to-follow cooking instructions</li>
            <li className="text-gray-700">Options for different dietary preferences (vegan, keto, etc.)</li>
          </ul>
        </div>
      </section>

      {/* Integration with Grocery Delivery Services */}
      <section>
        <div className="container mx-auto max-w-4xl bg-white shadow-xl rounded-lg p-8 md:p-12">
          <h2 className="text-4xl font-bold mb-6 text-blue-800">Integration with Grocery Delivery Services</h2>
          <p className="text-lg mb-4 text-gray-600">For added convenience, we offer integration with grocery delivery services. Get the ingredients for your personalized meal plans delivered right to your door.</p>
          <ul className="list-disc list-inside pl-6 space-y-2">
            <li className="text-gray-700">Seamless ordering from local grocery stores</li>
            <li className="text-gray-700">Track your delivery status</li>
            <li className="text-gray-700">Ensure fresh ingredients and timely delivery</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default NutritionPlans;
