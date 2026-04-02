import React from "react";

const SoftwareSkills = () => {
  return (
    <div className="fade-in max-w-250 mx-auto p-4 text-center mt-4">
      <h1 className="text-3xl font-bold text-gray-600">Software Skills</h1>
      <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-3">
        <div className="p-3 rounded-lg border shadow-2xl cursor-pointer bg-blue-500 transform hover:scale-105 duration-1000">
          <h1 className="text-xl text-white">Microsoft Office</h1>
        </div>
        <div className="p-3 rounded-lg border shadow-2xl cursor-pointer bg-blue-500 transform hover:scale-105 duration-1000">
          <h1 className="text-xl text-white">SPSS</h1>
        </div>
        <div className="p-3 rounded-lg border shadow-2xl cursor-pointer bg-blue-500 transform hover:scale-105 duration-1000">
          <h1 className="text-xl text-white">JAVA</h1>
        </div>
        <div className="p-3 rounded-lg border shadow-2xl cursor-pointer bg-blue-500 transform hover:scale-105 duration-1000 col-span-1 md:col-span-3">
          <h1 className="text-xl text-white">MySQL</h1>
        </div>
      </div>
    </div>
  );
};

export default SoftwareSkills;
