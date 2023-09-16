// components/Card.js

import React from "react";
import Image from "next/image";

const Card = ({ title, content, image, buttonText, url, category, badge }) => {
  return (
    <div className="max-w-sm  bg-white border border-gray-200 hover:border-blue-400 hover:dark:border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      {/* <a href={url}>You can add an image here if needed</a> */}
      <div className="p-5 ">
        <div className=" ">
          <div className="p-2 mb-2 flex justify-between">
            <Image src={image} alt="" width={80} height={50} />

            <div className="p-5">
              <span className=" inline-flex items-center rounded-md bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800">
                {badge}
              </span>
            </div>
          </div>

          <a href="#">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </a>

          <p className="mb-3    font-normal text-gray-700 dark:text-gray-400">
            {content}
          </p>
        </div>

        <div>
          <div className="flex  items-center mb-5 text-gray-500">
            {/* <span className="bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
            {category}
          </span> */}
          </div>
          <a
            href={url}
            className="mt-6 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
