import React from 'react';
import { FaDotCircle } from 'react-icons/fa';

const Skills = () => {
  return (
    <div id="section" className="bg-gray-100">
      <header className="flex justify-center py-4">
        <h3 className="font-semibold text-blue-500">SKILLS</h3>
      </header>

      <div className="container mx-auto py-8">
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border border-blue-500 rounded-lg transition duration-300 hover:bg-black">
              <div className="flex items-center">
                <FaDotCircle className="text-blue-500 mr-2" />
                <div className="font-semibold">HTML</div>
              </div>
            </div>

            <div className="p-4 border border-blue-500 rounded-lg transition duration-300 hover:bg-black">
              <div className="flex items-center">
                <FaDotCircle className="text-blue-500 mr-2" />
                <div className="font-semibold">CSS</div>
              </div>
            </div>

            <div className="p-4 border border-blue-500 rounded-lg transition duration-300 hover:bg-black">
              <div className="flex items-center">
                <FaDotCircle className="text-blue-500 mr-2" />
                <div className="font-semibold">BOOTSTRAP</div>
              </div>
            </div>

            <div className="p-4 border border-blue-500 rounded-lg transition duration-300 hover:bg-black">
              <div className="flex items-center">
                <FaDotCircle className="text-blue-500 mr-2" />
                <div className="font-semibold">SASS</div>
              </div>
            </div>

            <div className="p-4 border border-blue-500 rounded-lg transition duration-300 hover:bg-black">
              <div className="flex items-center">
                <FaDotCircle className="text-blue-500 mr-2" />
                <div className="font-semibold">TAILWIND</div>
              </div>
            </div>

            <div className="p-4 border border-blue-500 rounded-lg transition duration-300 hover:bg-black">
              <div className="flex items-center">
                <FaDotCircle className="text-blue-500 mr-2" />
                <div className="font-semibold">JAVASCRIPT</div>
              </div>
            </div>

            <div className="p-4 border border-blue-500 rounded-lg transition duration-300 hover:bg-black">
              <div className="flex items-center">
                <FaDotCircle className="text-blue-500 mr-2" />
                <div className="font-semibold">PHP</div>
              </div>
            </div>

            <div className="p-4 border border-blue-500 rounded-lg transition duration-300 hover:bg-black">
              <div className="flex items-center">
                <FaDotCircle className="text-blue-500 mr-2" />
                <div className="font-semibold">LARAVEL</div>
              </div>
            </div>

            <div className="p-4 border border-blue-500 rounded-lg transition duration-300 hover:bg-black">
              <div className="flex items-center">
                <FaDotCircle className="text-blue-500 mr-2" />
                <div className="font-semibold">MongoDB</div>
              </div>
            </div>

            <div className="p-4 border border-blue-500 rounded-lg transition duration-300 hover:bg-black">
              <div className="flex items-center">
                <FaDotCircle className="text-blue-500 mr-2" />
                <div className="font-semibold">SQLite</div>
              </div>
            </div>

            <div className="p-4 border border-blue-500 rounded-lg transition duration-300 hover:bg-black">
              <div className="flex items-center">
                <FaDotCircle className="text-blue-500 mr-2" />
                <div className="font-semibold">Python</div>
              </div>
            </div>

            <div className="p-4 border border-blue-500 rounded-lg transition duration-300 hover:bg-black">
              <div className="flex items-center">
                <FaDotCircle className="text-blue-500 mr-2" />
                <div className="font-semibold">Django</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
