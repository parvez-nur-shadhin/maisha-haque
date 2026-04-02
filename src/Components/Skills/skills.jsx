import React from 'react';

const skills = () => {
    return (
        <div className='fade-in max-w-250 mx-auto p-4 text-center mt-4'>
            <h1 className='text-3xl font-bold text-gray-600'>Skills</h1>
            <div className='mt-4 grid grid-cols-2 md:grid-cols-3 gap-3'>
                <div className='p-3 rounded-lg border shadow-2xl cursor-pointer bg-blue-500 transform hover:scale-105 duration-1000'>
                    <h1 className='text-xl text-white'>Teamwork</h1>
                </div>
                <div className='p-3 rounded-lg border shadow-2xl cursor-pointer bg-blue-500 transform hover:scale-105 duration-1000'>
                    <h1 className='text-xl text-white'>Communication</h1>
                </div>
                <div className='p-3 rounded-lg border shadow-2xl cursor-pointer bg-blue-500 transform hover:scale-105 duration-1000'>
                    <h1 className='text-xl text-white'>Problem Solving</h1>
                </div>
                <div className='p-3 rounded-lg border shadow-2xl cursor-pointer bg-blue-500 transform hover:scale-105 duration-1000'>
                    <h1 className='text-xl text-white'>Time Management</h1>
                </div>
                <div className='p-3 rounded-lg border shadow-2xl cursor-pointer bg-blue-500 transform hover:scale-105 duration-1000'>
                    <h1 className='text-xl text-white'>Empathy</h1>
                </div>
                <div className='p-3 rounded-lg border shadow-2xl cursor-pointer bg-blue-500 transform hover:scale-105 duration-1000'>
                    <h1 className='text-xl text-white'>Conflict Resolution</h1>
                </div>
            </div>
        </div>
    );
};

export default skills;