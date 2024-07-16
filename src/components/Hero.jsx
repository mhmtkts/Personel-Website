import React from 'react';
import { useSelector } from 'react-redux';

const Hero = () => {
  const translations = useSelector((state) => state.mode.translations);

  return (
    <div className="flex justify-between items-start mt-16 p-8">
      <div className="w-1/2 space-y-6">
        <div className="flex items-center space-x-4">
          <div className="border-b-2 border-[#3e3ecf] w-20 dark:border-[#b8b4e5]"></div>
          <h2 className="text-[#3e3ecf] dark:text-[#b8b4e5] text-lg">{translations.name}</h2>
        </div>
        <div className="space-y-2">
          <h1 className="text-7xl font-bold text-[#1f2a36] dark:text-[#aebdce]">{translations.creativeThinker}</h1>
          <h1 className="text-7xl font-bold text-[#1f2a36] dark:text-[#aebdce]">{translations.minimalismLover}</h1>
        </div>
        <p className="text-lg text-gray-300">{translations.intro}</p>
        <div className="flex space-x-4">
          <button className="bg-white text-[#3138a0] border-[#3138a0]/75 border-2 text-lg font-semibold px-4 py-2 rounded">{translations.hireMe}</button>
          <button className="bg-gray-700 text-white border-gray-600 border-2 text-lg font-semibold px-4 py-2 rounded">{translations.github}</button>
          <button className="bg-blue-700 text-white border-blue-600 border-2 text-lg font-semibold px-4 py-2 rounded">{translations.linkedin}</button>
        </div>
      </div>
      <div className="w-1/2">
        <img src="https://www.techpeak.co/wp-content/uploads/2022/07/software-developer-coding.jpg" alt={translations.name} className="rounded-lg shadow-lg" />
      </div>
    </div>
  );
};

export default Hero;
