import React from 'react';

const Advertisement = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <header className="bg-blue-600 text-white p-6">
        <div className="container mx-auto mt-10">
          <h1 className="text-3xl font-bold">Precision Nutrition Platform</h1>
          <p className="mt-2">Optimize your nutrition, maximize your potential</p>
        </div>
      </header>

      <main className="container mx-auto p-6">
        <section className="my-12">
          <h2 className="text-2xl font-bold mb-4">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-100 p-4 rounded shadow">
              <h3 className="text-xl font-semibold">Product 1</h3>
              <p className="mt-2">Description of Product 1.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded shadow">
              <h3 className="text-xl font-semibold">Product 2</h3>
              <p className="mt-2">Description of Product 2.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded shadow">
              <h3 className="text-xl font-semibold">Product 3</h3>
              <p className="mt-2">Description of Product 3.</p>
            </div>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-2xl font-bold mb-4">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-100 p-4 rounded shadow">
              <h3 className="text-xl font-semibold">Service 1</h3>
              <p className="mt-2">Description of Service 1.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded shadow">
              <h3 className="text-xl font-semibold">Service 2</h3>
              <p className="mt-2">Description of Service 2.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded shadow">
              <h3 className="text-xl font-semibold">Service 3</h3>
              <p className="mt-2">Description of Service 3.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Advertisement;
