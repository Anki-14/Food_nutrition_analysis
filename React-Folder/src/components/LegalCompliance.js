import React from 'react'

const LegalCompliance = () => {
  return (
    <div className="container text-black pb-20 bg-white shadow-md rounded-lg mt-10">
        <div className="bg-gray-100 py-20 mb-10 flex items-center justify-center">
            <h1 className="text-3xl font-bold mb-4 pb-2 text-center">
                Legal and Compliance
            </h1>
        </div>
        <div className="border-2 border-grey p-5 lg:mx-32 m-5 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">TERMS OF SERVICE</h2>
            <p>Understand the terms governing your interaction with Phoenix Labs. Transparency and clarity are paramount in our commitment to ethical and responsible technology use.</p>
        </div>
        <div className="border-2 border-grey p-5 m-5 lg:mx-32 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">PRIVACY POLICY</h2>
            <p>Explore our privacy policy, ensuring your data is handled with the utmost care and respect for your rights. <a href='/privacy'>Read More...</a></p>
        </div>
        <div className="border-2 border-grey p-5 m-5 lg:mx-32 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">COMPLIANCE WITH REGULATIONS</h2>
            <p>Phoenix Labs is committed to strict adherence to global regulations, ensuring our practices meet the highest standards of legal and ethical compliance.</p>
        </div>
    </div>
  )
}

export default LegalCompliance;