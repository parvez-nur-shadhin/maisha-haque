import React from 'react';

const Education = () => {
    return (
        <div className='fade-in max-w-250 mx-auto p-4 text-center mt-4'>
            <h1 className='text-3xl font-bold text-gray-600'>Education</h1>
            <div id='container' className='text-center grid grid-cols-1 md:grid-cols-3 gap-6 mt-4'>
                <div className='border border-gray-400 rounded-xl shadow-2xl p-4 space-y-2 transform hover:scale-110 duration-1000 cursor-pointer'>
                    <h2 className='text-md font-extrabold'>Bachelor of Business Administration (BBA)</h2>
                    <h3 className='text-md text- font-bold'>North South University</h3>
                    <h4 className='font-light text-gray-500'>HRM & MIS – CGPA-3.02 (4 Basis)</h4>
                    <h5 className='text-sm'>2018 – 2024</h5>
                </div>
                <div className='border border-gray-400 rounded-xl shadow-2xl p-4 space-y-2 transform hover:scale-110 duration-1000 cursor-pointer'>
                    <h2 className='text-lg font-extrabold'>Higher Secondary Certificate (H.S.C)</h2>
                    <h3 className='text-md font-bold'>Dhaka City College</h3>
                    <h4 className='font-light text-gray-500'>Business Studies – CGPA-5.00 (5 Basis)</h4>
                    <h5 className='text-sm'>2017 – 2018</h5>
                </div>
                <div className='border border-gray-400 rounded-xl shadow-2xl p-4 space-y-2 transform hover:scale-110 duration-1000 cursor-pointer'>
                    <h2 className='text-lg font-extrabold'>Secondary School Certificate (S.S.C)</h2>
                    <h3 className='text-md font-bold'>Ideal School & College</h3>
                    <h4 className='font-light text-gray-500'>Business Studies – CGPA-5.00 (5 Basis)</h4>
                    <h5 className='text-sm'>2015 – 2017</h5>
                </div>
            </div>
        </div>
    );
};

export default Education;