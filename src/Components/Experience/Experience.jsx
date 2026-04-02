import React from "react";

const Experience = () => {
  return (
    <div id="experience" className="fade-in max-w-250 mx-auto p-4 mt-4">
      <h1 className="text-center text-3xl font-extrabold text-gray-600">
        Professional Experience
      </h1>
      <div id="professional-experience" className=" mt-6">
        <div id="container" className="space-y-5">
          {/* card-1 */}
          <div className="flex flex-col md:flex-row gap-10 border border-gray-500 shadow-2xl p-4 rounded-2xl cursor-pointer transform hover:scale-110 duration-1000">
            <h1 className="border-b md:border-r md:border-b-0 border-b-gray-500 md:border-r-gray-500 p-1 md:p-2 font-semibold text-gray-600">
              July to December, 2024
            </h1>
            <div className="space-y-2">
              <h3 className="font-bold">
                Intern, Human Resource Management Division, Novotel Limited.
              </h3>
              <ul>
                <h2 className="font-bold">Major Responsibilities:</h2>
                <ul className="list-disc p-4 md:p-0">
                  <li>
                    Demonstrated a willingness to learn and adapt to new tasks
                    and responsibilities within a dynamic work environment.
                  </li>
                  <li>
                    Exhibited a proactive learning attitude and adapted
                    efficiently to new tasks and responsibilities in a
                    fast-paced environment.{" "}
                  </li>
                  <li>
                    Generated comprehensive expense reports, bolstering clear
                    financial documentation and effective budgeting.
                  </li>
                  <li>
                    Assisted in upkeeping a dependable and all-inclusive
                    employee database that underpinned diverse HR functions.
                  </li>
                  <li>
                    Interpreted data to offer insights and recommendations for
                    adjustments, enhancing employee satisfaction and retention.
                  </li>
                </ul>
              </ul>
            </div>
          </div>
          {/* card-2 */}
          <div className="flex flex-col md:flex-row gap-10 border border-gray-500 shadow-2xl p-4 rounded-2xl cursor-pointer transform hover:scale-110 duration-1000">
            <h1 className="border-b md:border-r md:border-b-0 border-b-gray-500 md:border-r-gray-500 p-1 md:p-2 font-semibold text-gray-600">
              January to June, 2024
            </h1>
            <div className="space-y-2">
              <h3 className="font-bold">
                Junior HR Executive, Human Resource Management Division,
                Goldsands Group.
              </h3>
              <ul>
                <h2 className="font-bold">Major Responsibilities:</h2>
                <ul className="list-disc p-4 md:p-0">
                  <li>
                    Uphold professionalism and maintain attention to detail in
                    all tasks.
                  </li>
                  <li>
                    Conducted of salary surveys and provide recommendations for
                    competitive compensation.
                  </li>
                  <li>
                    Manage leave to ensure policy compliance and reduce
                    discrepancies.
                  </li>
                  <li>
                    Maintain accurate employee records through manual and
                    database entries.
                  </li>
                  <li>
                    Oversaw and recorded employees' sick, casual, and earned
                    leaves to ensure strict adherence to company policies
                  </li>
                </ul>
              </ul>
            </div>
          </div>
          {/* card-3 */}
          <div className="flex flex-col md:flex-row gap-10 border border-gray-500 shadow-2xl p-4 rounded-2xl cursor-pointer transform hover:scale-110 duration-1000">
            <h1 className="border-b md:border-r md:border-b-0 border-b-gray-500 md:border-r-gray-500 p-1 md:p-2 font-semibold text-gray-600">
              Extracurricular activities 2020 to 2022
            </h1>
            <div className="space-y-2">
              <ul>
                <ul className="list-disc p-4 md:p-0">
                  <li>
                    Organized events and created content as a Senior Executive
                    at the Young Economists' Forum (YEF) at North South
                    University, honing communication, leadership skills, and
                    building professional networks (2020-2021).
                  </li>
                  <li>
                    Managed Logistics operations for hosting Business
                    competitions. Improved my teamwork ability in a competitive
                    situation. (2022).
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
