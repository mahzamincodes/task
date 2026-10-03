import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div className='my-10 container mx-auto'>
            <h2 className='text-4xl text-center font-bold text-red-500 border-4 border-purple-500 p-5 rounded-2xl'>You are now Homepage</h2>

            <div className='flex justify-between items-center py-15'>
                {/* <Link href="/sign-up">
                    <button className='border-4 border-red-500 py-3 px-5 rounded-2xl font-bold text-purple-700 text-2xl'>Sign Up</button>
                </Link>
               <Link href="/sign-in">
                    <button className='border-4 border-green-500 py-3 px-5 rounded-2xl font-bold text-purple-700 text-2xl'>Sign In</button>
                </Link> */}

            </div>

        </div>
    );
};

export default page;

