import React from 'react';

const SingleProduct = ({ data }) => {
    let {images, title,description}=data;
    return (
        <div className='py-5 px-10'>

            <div className=" bg-white border h-[550px] border-gray-200 rounded-lg shadow dark:bg-white dark:border-black">
                <a href="#">
                    <img className="rounded-t-lg h-80" src={images[0]} alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-black dark:text-black">{title}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-900 dark:text-gray-400">{description}</p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Details
                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
            </div>

        </div>
    );
};

export default SingleProduct;