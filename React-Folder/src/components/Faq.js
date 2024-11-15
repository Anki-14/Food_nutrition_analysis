import React from 'react'

const faqs = [
  {
    question: 'What is the Precision Nutrition System?',
    answer:
      "The Precision Nutrition System is an advanced AI-powered platform developed by Phoenix Labs' G-Lab Neutrogenomics Division. It leverages cutting-edge research in neutrogenomics to explore the intricate interactions between nutrition and the human genome. The system focuses on identifying genetic switches and understanding how nutrition can influence their activity to optimize health outcomes.",
  },
  {
    question: 'How does the Precision Nutrition System work?',
    answer:
      "The Precision Nutrition System analyzes an individual's genetic data alongside dietary intake and health metrics. Using sophisticated algorithms, it identifies genetic markers that can be influenced by specific nutrients. The system then provides personalized nutrition recommendations to optimize gene expression and improve overall health.",
  },
  {
    question: 'Who can benefit from using the Precision Nutrition System?',
    answer:
      'Anyone interested in optimizing their health through personalized nutrition can benefit from the Precision Nutrition System. This includes individuals with genetic predispositions to certain health conditions, athletes looking to enhance performance, and those seeking to manage chronic diseases through diet.',
  },
  {
    question: 'What kind of genetic data is required for the Precision Nutrition System?',
    answer:
      'The system requires a comprehensive genetic profile, typically obtained through a DNA test. This profile includes information on genetic variants that influence nutrient metabolism, disease risk, and other health-related traits.',
  },
  {
    question: 'How is my genetic data protected?',
    answer:
      'Phoenix Labs places a high priority on data security and privacy. All genetic data is encrypted and stored in secure servers. Access is restricted to authorized personnel, and users have full control over their data, including the ability to delete their information at any time.',
  },
  {
    question: 'Can the Precision Nutrition System help with weight management?',
    answer:
      'Yes, the system can provide personalized nutrition plans tailored to an individual’s genetic profile, helping to optimize metabolism and support weight management goals. It considers factors such as how your body processes fats and carbohydrates, and your genetic predisposition to obesity.',
  },
  {
    question: 'Is the Precision Nutrition System suitable for vegetarians or vegans?',
    answer:
      'Absolutely. The system can accommodate various dietary preferences and restrictions, including vegetarian and vegan diets. It will provide nutrient recommendations that align with these dietary choices while ensuring all nutritional needs are met.',
  },
  {
    question: 'How often should I update my dietary information in the Precision Nutrition System?',
    answer:
      'For optimal results, it\'s recommended to update your dietary information regularly, ideally on a daily basis. This ensures the system can accurately track your nutrient intake and provide the most relevant recommendations.',
  },
  {
    question: 'Can the system identify food intolerances or allergies?',
    answer:
      'While the Precision Nutrition System can highlight potential genetic predispositions to certain food intolerances or allergies, it is not a diagnostic tool. Users with suspected food allergies should consult with a healthcare professional for proper testing and diagnosis.',
  },
  {
    question: 'How does the system address chronic diseases like diabetes or hypertension?',
    answer:
      'The system provides personalized nutrition recommendations that can help manage chronic diseases by targeting genetic factors influencing disease progression. For example, it may suggest specific nutrients that help regulate blood sugar levels or reduce blood pressure.',
  },
  {
    question: 'Can I share my nutrition plan with my healthcare provider?',
    answer:
      'Yes, the system allows users to export their personalized nutrition plans and share them with healthcare providers. This can facilitate integrated care and ensure that dietary recommendations align with other medical treatments.',
  },
  {
    question: 'How are the nutrition recommendations generated?',
    answer:
      'Nutrition recommendations are generated using a combination of genetic data analysis, current dietary intake, and health metrics. The system employs advanced machine learning algorithms to identify optimal nutrient combinations that can positively influence genetic switches and overall health.',
  },
  {
    question: 'What if I have specific health goals, like improving athletic performance?',
    answer:
      'The system can tailor recommendations to specific health goals, including athletic performance. It will analyze genetic markers related to muscle growth, endurance, and recovery, providing nutrition plans that support these objectives.',
  },
  {
    question: 'How does the Precision Nutrition System stay updated with the latest research?',
    answer:
      'Phoenix Labs continuously monitors advancements in neutrogenomics and nutrition science. The system is regularly updated with new findings, ensuring that users receive recommendations based on the latest and most accurate scientific data.',
  },
  {
    question: 'Is there customer support available if I have questions or issues with the system?',
    answer:
      'Yes, Phoenix Labs provides comprehensive customer support for users of the Precision Nutrition System. Support can be accessed through the platform’s help center, which includes FAQs, tutorials, and the option to contact support staff directly.',
  },
  {
    question: 'How long does it take to see results using the Precision Nutrition System?',
    answer:
      'The time frame for seeing results can vary depending on individual health goals and conditions. However, many users report noticeable improvements in energy levels, digestion, and overall well-being within a few weeks of following the personalized nutrition plan.',
  },
  {
    question: 'Can the system accommodate dietary restrictions due to medical conditions?',
    answer:
      'Yes, the system can accommodate various dietary restrictions and medical conditions. Users can input specific dietary needs, and the system will adjust its recommendations accordingly to ensure all nutritional requirements are met.',
  },
  {
    question: 'How is the Precision Nutrition System different from other nutrition apps?',
    answer:
      'The Precision Nutrition System stands out due to its integration of neutrogenomics, which allows for highly personalized nutrition recommendations based on genetic data. This scientific approach provides a deeper understanding of how nutrition impacts individual health at a genetic level.',
  },
  {
    question: 'What is neutrogenomics?',
    answer:
      'Neutrogenomics is the study of the relationship between nutrition and the genome. It explores how genetic variations affect nutrient metabolism and how diet can influence gene expression, aiming to optimize health through personalized nutrition.',
  },
  {
    question: 'Can the system help with mental health and cognitive function?',
    answer:
      'Yes, the system can provide nutrition recommendations that support mental health and cognitive function. It identifies nutrients that influence brain health, such as omega-3 fatty acids, and provides personalized plans to enhance cognitive performance and mood.',
  },
  {
    question: 'Are there any age restrictions for using the Precision Nutrition System?',
    answer:
      'The system is designed for adults, but it can be adapted for use by children and adolescents with appropriate parental guidance and input from healthcare professionals. It’s important to tailor recommendations to the specific nutritional needs of growing individuals.',
  },
  {
    question: 'How are personalized nutrition plans delivered to users?',
    answer:
      'Personalized nutrition plans are delivered through the Precision Nutrition System’s online platform. Users can access their plans via a secure dashboard, which includes detailed dietary guidelines, meal plans, and nutrient tracking tools.',
  },
  {
    question: 'Does the Precision Nutrition System integrate with other health and fitness apps?',
    answer:
      'Yes, the system is designed to integrate with popular health and fitness apps, allowing for seamless tracking of dietary intake, physical activity, and other health metrics. This integration helps provide a comprehensive view of an individual’s health.',
  },
  {
    question: 'What if I have a genetic mutation that is not covered by the system?',
    answer:
      'Phoenix Labs continually expands the genetic markers covered by the Precision Nutrition System. If you have a specific genetic mutation not currently included, you can contact customer support for more information on future updates and custom analyses.',
  },
  {
    question: 'How do I get started with the Precision Nutrition System?',
    answer:
      'To get started, you need to create an account on the Precision Nutrition System platform and submit your genetic data. Once your profile is set up, you can begin inputting dietary information and health goals to receive personalized nutrition recommendations.',
  },
];

const Faq = () => {
  return (
    <div className='bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 py-16'>
      <div className='lg:mx-64 mx-5 my-32 py-16 bg-white rounded-lg shadow-lg'>
        <div className="mx-auto max-w-2xl mb-10 lg:text-center">
            <p className="mt-2 text-3xl font-extrabold tracking-tight text-indigo-900 sm:text-4xl">
              Browse our FAQs for answers to common queries
            </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6 px-6 py-4">
        {faqs.map((faq, index) => (
          <div key={index} className="collapse collapse-plus bg-white border-2 border-indigo-200 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300">
              <input type="radio" name="faq-accordion" id={faq.question} />
              <div className="collapse-title text-lg font-semibold bg-indigo-50 px-4 py-3 rounded-t-lg">
                <label htmlFor={faq.question} className="cursor-pointer text-indigo-700">
                  {faq.question}
                </label>
              </div>
              <div className="collapse-content px-4 py-3 text-gray-700 bg-indigo-50 rounded-b-lg">
                  <p>{faq.answer}</p>
              </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Faq