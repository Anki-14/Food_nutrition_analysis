import React from 'react';
import { History, MissionIcon, AI, Principles } from '../assets/Icon';

const features = [
  {
    name: 'mission',
    description:
      'Phoenix Labs is on a mission to redefine possibilities through technology. Our goal is to drive positive change by leveraging AI to address societal challenges, fostering inclusivity, and empowering communities worldwide.',
    href:'mission',
    icon: MissionIcon
  },
  {
    name: 'history of phoenix labs',
    description:
      'Founded on a vision of technological excellence, Phoenix Labs has a rich history of groundbreaking achievements. From our humble beginnings to becoming a global force, our journey is marked by a relentless pursuit of innovation and a commitment to shaping a better future through technology.',
    href:'history',
    icon: History,
  },
  {
    name: 'commitment to ai equity and inclusion',
    description:
      'At Phoenix Labs, we believe in the ethical use of AI. Our commitment to equity and inclusion is embedded in every facet of our work. We actively strive to mitigate biases and ensure that our technologies contribute to a more equitable and diverse world.',
    href:'commitment',
    icon: AI,
  },
  {
    name: 'founding principles',
    description:
    'Our founding principles are the bedrock of Phoenix Labs. They guide our decisions, inspire our teams, and drive our pursuit of excellence. Transparency, integrity, and a passion for positive impact define who we are and how we approach every endeavor.',
    href:'principles',
    icon: Principles,
  },
]


const About = () => {
  return (
    <section id="about" className="p-0 pb-10 bg-white">
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">About Us</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
          At Phoenix Labs, we stand at the forefront of global technology, dedicated to crafting innovative solutions that tackle real-world challenges, including the poverty/wealth gap, disease, and equity. Our commitment is unwavering, as we harness the transformative power of artificial intelligence to create cutting-edge solutions that make a positive impact on people's lives.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {features.map((feature) => (
              <a key={feature.name} href={`#${feature.href}`} className='capitalize'>
                {feature.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
        </div>
        </div>
      </div>
        <div className=" mt-16 mx-auto max-w-2xl sm:mt-18 lg:mt-20 lg:max-w-4xl">
          <dl className="flex flex-col">
          {features.map((feature) => (
          <div key={feature.name} className="mb-16 p-10 relative border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out pl-16 pb-12 mb-6" id={feature.href}>
            <dt className="text-lg font-semibold leading-7 text-gray-900 uppercase mb-2">
              <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white shadow-md">
                {feature.icon()}
              </div>
              {feature.name}
            </dt>
            <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
          </div>
          ))}
          </dl>
        </div>
    </section>
  );
}

export default About;
