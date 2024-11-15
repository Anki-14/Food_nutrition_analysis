import React,  { useState } from 'react';

const GeneticAnalysis = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) {
      alert("Please select a file to upload");
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    fetch('http://localhost:5000/upload', {
      method: 'POST',
      body: formData,
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      // Handle the response here (show the analysis result, etc.)
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };
  return (
    <>
      <div className="bg-[url('https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center text-white text-center py-20 pt-32">
        <h1 className="text-4xl font-bold text-black mb-4">Unlock Your Genetic Potential</h1>
        <p className="text-lg text-black mb-8">Upload your genetic data securely and get personalized dietary recommendations.</p>
        <br/>
        {/* File upload input */}
        <input
          type="file"
          onChange={handleFileChange}
          className="mb-4 py-2 px-4 border rounded-lg"
        />
        <button className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-full">Get Started</button>
      </div>

      <div className="py-16 pb-30 bg-gray-100 text-center">
        <h2 className="text-4xl font-extrabold mb-8 pb-12 text-blue-900">How It Works</h2>

        <div className="flex flex-col md:flex-row justify-around items-center gap-4 px-6">
          <div className="bg-white p-6 rounded-lg shadow-lg mb-8 md:mb-0 w-full md:w-1/3">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">Step 1: Upload Your Data</h3>
            <p className="text-gray-700">Securely upload your genetic data for analysis.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg mb-8 md:mb-0 w-full md:w-1/3">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">Step 2: AI Analysis</h3>
            <p className="text-gray-700">Our AI algorithms analyze your genetic variations.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">Step 3: Receive Reports</h3>
            <p className="text-gray-700">Get comprehensive reports on nutrient metabolism.</p>
          </div>
        </div>

      </div>

      {/* Why Choose Us Section */}
      <div className="py-16 bg-white text-center">
        <h2 className="text-4xl font-extrabold mb-8 text-blue-900">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">Secure Data Upload</h3>
            <p className="text-gray-700">We prioritize the security of your genetic data with advanced encryption.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">Advanced AI Analysis</h3>
            <p className="text-gray-700">Our cutting-edge AI technology provides precise genetic analysis.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">Comprehensive Reports</h3>
            <p className="text-gray-700">Receive detailed insights on how your genes affect nutrient metabolism.</p>
          </div>
        </div>
      </div>

      <div className="py-32 bg-gray-100 text-center h-screen">
        <h2 className="text-3xl font-bold text-blue-700 mb-8">Sample Reports</h2>
        <p className="text-lg mb-4">Preview a sample report to see what you’ll get.</p>
        {/* Placeholder for report images or descriptions */}
        <div className="flex justify-center pt-10">
          <div className="mx-5 text-black bg-white p-4 shadow-lg">
            <p className='text-lg pb-10 font-bold text-blue-700'>Sample Report Content</p>
            <ul className="list-disc list-inside">
                <li className='py-5'><strong className='text-blue-700'>Nutrient Metabolism:</strong> Analysis of how your body processes various nutrients.</li>
                <li className='py-5'><strong className='text-blue-700'>Dietary Responses:</strong> Insights on how different diets might affect you based on your genetic profile.</li>
                <li className='py-5'><strong className='text-blue-700'>Genetic Variations:</strong> Understanding of specific genetic variations and their implications.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default GeneticAnalysis;

