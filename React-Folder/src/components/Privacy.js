// src/PrivacyPolicy.js

import React from 'react';

const Privacy = () => {
  return (
    <div className="container text-black mx-auto  pb-10 bg-white shadow-md rounded-lg mt-10">
      <div className="bg-gray-100 py-20 mb-10 flex items-center justify-center">
        <h1 className="text-3xl font-bold mb-4 pb-2 text-center">
            Privacy Policy
        </h1>
      </div>
      <div className='px-10 lg:px-32'>
      <p className="mb-4">Thank you for choosing UniCare, a revolutionary AI-powered phone application created by Phoenix Labs. This Privacy Policy explains how we collect, use, disclose, and protect your personal information as you use our application. We are committed to ensuring the privacy and security of your information and complying with applicable data protection laws. Please carefully read this Privacy Policy to understand our practices regarding your personal information.</p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 border-b border-gray-300 pb-1">1. Information We Collect</h2>
      <h3 className="text-xl font-semibold mt-4 mb-2">1.1. Personal Information</h3>
      <p className="mb-4">We collect various categories of personal information, including but not limited to:</p>
      <ul className="list-disc ml-6 mb-4">
        <li>
          <strong>Contact information:</strong> This includes your name, email address, and phone number, which we use to communicate with you and provide support.
        </li>
        <li>
          <strong>Demographic information:</strong> To better understand our user base and cater to diverse needs, we may collect demographic data such as age, gender, ethnicity, and language preferences.
        </li>
        <li>
          <strong>Health-related information:</strong> To provide effective health management services, we may collect information about your medical history, symptoms, medications, and other health-related data.
        </li>
        <li>
          <strong>Biometric data:</strong> With your explicit consent, UniCare may utilize advanced technologies such as retinal scanning or biometric sensors to collect data for personalized health assessments and monitoring.
        </li>
        <li>
          <strong>User-generated content:</strong> When you interact with UniCare, you may provide additional information through comprehensive questionnaires or other means. This information helps us tailor our services to your specific needs.
        </li>
      </ul>

      <h3 className="text-xl font-semibold mt-4 mb-2">1.2. Automatically Collected Information</h3>
      <p className="mb-4">As you use UniCare, certain information is automatically collected, including but not limited to:</p>
      <ul className="list-disc ml-6 mb-4">
        <li>
          <strong>Device information:</strong> We collect data about the type of device you use, operating system, unique device identifiers, and other technical information necessary for providing our services.
        </li>
        <li>
          <strong>Log data:</strong> Our servers automatically record certain information when you access or use UniCare. This includes your IP address, timestamps, interactions within the application, and other system activity logs.
        </li>
        <li>
          <strong>Usage information:</strong> We collect data on your use of UniCare, such as the features and functionalities you access, preferences, and settings. This helps us improve our services and enhance your experience.
        </li>
        <li>
          <strong>Location information:</strong> With your explicit consent, we may collect and process your location data to provide location-specific services or personalized health recommendations.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2 border-b border-gray-300 pb-1">2. Use of Information</h2>
      <h3 className="text-xl font-semibold mt-4 mb-2">2.1. Providing Services</h3>
      <p className="mb-4">We use the collected information for the following purposes:</p>
      <ul className="list-disc ml-6 mb-4">
        <li>
          <strong>Providing Services:</strong> We use your personal information to deliver personalized health management services tailored to your needs and preferences. This includes analyzing and interpreting the collected data to generate insights, recommendations, and reminders to help you effectively manage your health.
        </li>
        <li>
          <strong>Improving and Developing the Application:</strong> We analyze the collected information to enhance user experience, optimize application performance, and develop new features and functionalities. This analysis may involve data aggregation and anonymization to generate insights about health trends and patterns.
        </li>
        <li>
          <strong>Communication and Support:</strong> We may use your contact information to respond to your inquiries, feedback, and support requests. Additionally, we may send you important notices, updates, and administrative messages related to your use of UniCare. We may also provide you with relevant information about our services, promotions, or events with your consent.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2 border-b border-gray-300 pb-1">3. Data Sharing and Disclosure</h2>
      <h3 className="text-xl font-semibold mt-4 mb-2">3.1. Service Providers</h3>
      <p className="mb-4">We may share your personal information in the following circumstances:</p>
      <ul className="list-disc ml-6 mb-4">
        <li>
          <strong>Service Providers:</strong> We may engage trusted third-party service providers to perform certain functions on our behalf. These providers may include hosting and data storage providers, data analysis and processing companies, customer support services, and marketing partners. These service providers are contractually obligated to handle your personal information confidentially and securely and are only permitted to use it for the specific purposes outlined in our agreements with them.
        </li>
        <li>
          <strong>Legal Requirements:</strong> We may disclose your personal information if required to do so by law, regulation, legal process, or governmental request. This includes responding to lawful requests from public authorities to meet national security or law enforcement requirements.
        </li>
        <li>
          <strong>User Consent:</strong> We may share your personal information with your explicit consent. For example, if you choose to share your data with healthcare professionals or participate in research studies, we may disclose relevant information as per your preferences and consent.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2 border-b border-gray-300 pb-1">4. Data Security</h2>
      <p className="mb-4">We are committed to protecting the security of your personal information. We implement appropriate technical and organizational measures to safeguard your data from unauthorized access, disclosure, alteration, or destruction. These measures include encryption, access controls, secure data storage, and regular security assessments. However, please note that no data transmission or storage system can guarantee complete security. While we strive to protect your information, we cannot guarantee its absolute security.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 border-b border-gray-300 pb-1">5. Data Retention</h2>
      <p className="mb-4">We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy unless a longer retention period is required or permitted by law. We will securely delete or anonymize your information when it is no longer needed.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 border-b border-gray-300 pb-1">6. Your Rights</h2>
      <p className="mb-4">You have certain rights regarding your personal information, which may include the right to access, correct, delete, or restrict its processing. You may also have the right to withdraw consent or object to the processing of your information. To exercise your rights or make any inquiries regarding your personal information, please contact us using the information provided in Section 8.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 border-b border-gray-300 pb-1">7. Children's Privacy</h2>
      <p className="mb-4">UniCare is intended for users who are at least 18 years old. We do not knowingly collect personal information from individuals under the age of 18. If we become aware that we have inadvertently collected personal information from a child without parental consent, we will take prompt steps to delete such information from our systems.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 border-b border-gray-300 pb-1">8. Contact Us</h2>
      <p className="mb-4">If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at:</p>
      <ul className="list-disc ml-6 mb-4">
        <li>
          <p><strong>Anastasia Short</strong></p>
          <p>Email: <a href="mailto:aeshort@jmediacorp.com" className="text-blue-500 hover:underline">aeshort@jmediacorp.com</a></p>
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2 border-b border-gray-300 pb-1">9. Changes to the Privacy Policy</h2>
      <p className="mb-4">We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated Privacy Policy within the UniCare application or through other communication channels. We encourage you to periodically review this Privacy Policy to stay informed about how we collect, use, and protect your personal information.</p>
      <p className="mb-4">By using UniCare, you signify your acceptance of this Privacy Policy. If you do not agree to this Privacy Policy, please do not use UniCare.</p>
      </div>
    </div>
  );
}

export default Privacy;
