import React, { useState } from "react";
import Feedback from "./Feedback";
import background from "../assets/background.mp4";

const features = [
  {
    id: 1,
    title: "Genetic Analysis",
    description:
      "Our platform begins by delving into your genetic makeup, unraveling the intricate strands of your DNA to uncover key insights into your nutrient metabolism and dietary responses. Through state-of-the-art AI algorithms and advanced data analysis techniques, we decode your genetic variations to provide you with a comprehensive understanding of how your body processes different nutrients.",
    imageUrl:
      "https://images.unsplash.com/photo-1583912267856-1fcdf6e0a1f9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Personalized Nutrition Plans",
    description:
      "Armed with the knowledge gained from genetic analysis, we craft personalized nutrition plans tailored specifically to your unique genetic profile. Say goodbye to generic diet advice – our platform delivers meal suggestions, recipes, and dietary guidelines meticulously curated to meet your individual health needs and goals.",
    imageUrl:
      "https://images.pexels.com/photos/3872373/pexels-photo-3872373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    title: "Health Dashboard",
    description:
      "Track your progress and stay informed about your health journey with our intuitive health dashboard. Monitor key health metrics, receive real-time feedback on your dietary choices, and seamlessly integrate data from wearable devices for a holistic view of your well-being.",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1714510332132-b3074b75a312?q=80&w=2007&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
const services = [
  {
    id: 1,
    title: "Expert Consultation",
    href: "#",
    description:
      "Need additional guidance or support? Our platform connects you with a team of experienced nutritionists and dietitians who are ready to provide personalized advice and assistance. Schedule virtual appointments, set goals, and work collaboratively towards achieving optimal health.",
    imageUrl:
      "https://images.unsplash.com/photo-1576091358783-a212ec293ff3?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Community Support",
    href: "#",
    description:
      "Join a vibrant community of like-minded individuals who are on a similar quest for improved health and well-being. Engage in discussions, share recipes, and offer support and encouragement to one another as you embark on your nutritional journey together",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1661699717204-82c08926c77a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Future Concepts",
    href: "#",
    description:
      "Experience the future of nutrition with our visionary concepts and futuristic technologies. Immerse yourself in virtual cooking experiences, analyze your meals in real-time using augmented reality overlays, and harness the power of predictive analytics to stay one step ahead of your health.",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1661421687248-7bb863c60723?q=80&w=1838&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
const HomePage = () => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  const toggleFeedbackForm = () => {
    setShowFeedbackForm(!showFeedbackForm);
  };

  return (
    <div>
      <section id="home" className="bg-white pb-4">
        <div className="relative bg-black">
          <video
            autoPlay
            loop
            muted
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={background} type="video/mp4" />
            {/* Add additional sources for other video formats if needed */}
            Your browser does not support the video tag.
          </video>
          <div className="relative isolate px-6 lg:px-8">
            <div
              className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
            <div className="m-auto max-w-2xl py-32 sm:py-48 px-2">
              <div
                className="text-center p-10"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  maxHeight: "1000vh",
                  borderRadius: "50px",
                }}
              >
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Nutrition Precision
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Welcome to the forefront of personalized nutrition, where
                  cutting-edge technology meets individual health needs. At
                  Phoenix Labs, we believe that every individual is unique, and
                  so are their nutritional requirements. Our Precision Nutrition
                  Platform, powered by the pioneering work of Team Legion within
                  G-Lab, is revolutionizing the way we approach diet and health.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="#getStarted"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get started
                  </a>
                  <a
                    href="#learnMore"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
          </div>
        </div>

        <div className="lg:mx-16 px-4">
          <h1 className="font-sofadi text-4xl font-roboto font-bold text-gray-900 text-center mt-16 mb-10">
            Our Features
          </h1>
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-center justify-center sm:flex-col lg:flex-row lg:gap-12 mx-5 pt-10 lg:mx-32 lg:my-10 bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105"
            >
              <img
                className={`w-64 h-64 sm:min-w-3 lg:rounded-full lg:w-2/3 lg:h-2/3 object-cover border-4 border-gray-300 ${
                  feature.id % 2 === 0 ? "lg:order-2" : "lg:order-1"
                }`}
                src={feature.imageUrl}
                alt={feature.title}
              />
              <div
                className={`lg:max-w-md text-center lg:text-left mt-6 lg:mt-0 ${
                  feature.id % 2 === 0 ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  {feature.title}
                </h2>
                <p className="text-gray-600 leading-relaxed text-justify lg:text-left tracking-wide mb-4">
                  {feature.description}
                </p>
                <button className="mt-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-lg shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-teal-500 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <h1 className="font-sofadi text-4xl font-bold text-gray-900 text-center mt-10 mb-8 lg:mb-16">
  Our Services...
</h1>
<div className="bg-gray-50 py-10 sm:py-16">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {services.map((service) => (
        <article
          key={service.id}
          className="flex flex-col items-center lg:items-start max-w-xl justify-between group transform transition-transform hover:scale-105"
        >
          <img
            src={service.imageUrl}
            alt=""
            className="w-80 h-80 object-cover rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
          />
          <div className="group relative mt-6 text-center lg:text-left">
            <h3 className="text-lg font-semibold leading-6 text-gray-900 group-hover:text-blue-600 transition-colors">
              <a href={service.href}>
                <span className="absolute inset-0" />
                {service.title}
              </a>
            </h3>
            <p className="mt-4 line-clamp-3 text-sm leading-6 text-gray-600 group-hover:text-gray-800 transition-colors">
              {service.description}
            </p>
            <button className="mt-6 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
              Learn More
            </button>
          </div>
        </article>
      ))}
    </div>
  </div>
</div>


        <div className="flex justify-center items-center m-10 ">
          <button
            onClick={toggleFeedbackForm}
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Share Your Feedback
          </button>
          <Feedback show={showFeedbackForm} onClose={toggleFeedbackForm} />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
