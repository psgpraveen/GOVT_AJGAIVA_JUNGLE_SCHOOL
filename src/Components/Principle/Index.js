import React from 'react';
import principalImage from './Principal.jpg'; 

const PrincipalMessage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 font-[sans-serif]">
      <div className="mb-12">
        <h2 className="text-gray-800 text-3xl font-extrabold">PRINCIPAL'S MESSAGE</h2>
        <p className="text-gray-800 text-sm mt-4 leading-relaxed">
         Education at  HR. SEC. SCHOOL AJGAIVA JUNGLE, BASTI
         is designed to meet the needs of each individual student. 
        </p>
      </div>

      <div className="grid md:grid-cols-3 items-center gap-12">
        {/* Principal's Image */}
        <div>
          <img
            src={principalImage}
            alt="Principal"
            className="w-[280px] rounded-lg shadow-[-20px_20px_0px_rgba(23,219,220,1)]"
          />
        </div>

        {/* Principal's Message */}
        <div className="md:col-span-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 fill-blue-200 inline rotate-180"
            viewBox="0 0 475.082 475.081"
          >
            <path
              d="M164.454 36.547H54.818c-15.229 0-28.171 5.33-38.832 15.987C5.33 63.193 0 76.135 0 91.365v109.632c0 15.229 5.327 28.169 15.986 38.826 10.66 10.656 23.606 15.988 38.832 15.988h63.953c7.611 0 14.084 2.666 19.414 7.994 5.33 5.325 7.994 11.8 7.994 19.417v9.131c0 20.177-7.139 37.397-21.413 51.675-14.275 14.271-31.499 21.409-51.678 21.409h-18.27c-4.952 0-9.233 1.813-12.851 5.427-3.615 3.614-5.424 7.898-5.424 12.847v36.549c0 4.941 1.809 9.233 5.424 12.848 3.621 3.613 7.898 5.427 12.851 5.427h18.271c19.797 0 38.688-3.86 56.676-11.566 17.987-7.707 33.546-18.131 46.68-31.265 13.131-13.135 23.553-28.691 31.261-46.679 7.707-17.987 11.562-36.877 11.562-56.671V91.361c0-15.23-5.33-28.171-15.987-38.828s-23.602-15.986-38.827-15.986zm294.635 15.987c-10.656-10.657-23.599-15.987-38.828-15.987H310.629c-15.229 0-28.171 5.33-38.828 15.987-10.656 10.66-15.984 23.601-15.984 38.831v109.632c0 15.229 5.328 28.169 15.984 38.826 10.657 10.656 23.6 15.988 38.828 15.988h63.953c7.611 0 14.089 2.666 19.418 7.994 5.324 5.328 7.994 11.8 7.994 19.417v9.131c0 20.177-7.139 37.397-21.416 51.675-14.274 14.271-31.494 21.409-51.675 21.409h-18.274c-4.948 0-9.233 1.813-12.847 5.427-3.617 3.614-5.428 7.898-5.428 12.847v36.549c0 4.941 1.811 9.233 5.428 12.848 3.613 3.613 7.898 5.427 12.847 5.427h18.274c19.794 0 38.684-3.86 56.674-11.566 17.984-7.707 33.541-18.131 46.676-31.265 13.134-13.135 23.562-28.695 31.265-46.679 7.706-17.983 11.563-36.877 11.563-56.671V91.361c-.003-15.23-5.328-28.171-15.992-38.827z"
              data-original="#000000"
            />
          </svg>

          <p className="text-gray-800 text-sm mt-6 leading-relaxed">
            I am happy and delighted to address you all through the school’s. Education at  HR. SEC. SCHOOL AJGAIVA JUNGLE, BASTI
            is designed to meet the needs of each individual student. It is our foremost priority to bring out the best in your children, but we are not enough. You, the parents, must play a key role in shaping children. Children are always the ultimate winners on the school campus, making the world a better place to live.
          </p>

          <div className="mt-4">
            <p className="text-gray-800 text-base font-semibold">SURESH CHANDRA VERMA</p>
            <p className="text-xs text-gray-400 mt-0.5">Principal, GOVT. HR. SEC. SCHOOL AJGAIVA JUNGLE, BASTI
            </p>
          </div>

          {/* <div className="flex justify-end mt-4 space-x-4">
            <div className="bg-gray-200 w-10 h-10 grid items-center justify-center rounded-full rotate-90 shrink-0 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 fill-gray-800 inline"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                  clipRule="evenodd"
                  data-original="#000000"
                />
              </svg>
            </div>
            <div className="bg-[#17dbdc] w-10 h-10 grid items-center justify-center rounded-full -rotate-90 shrink-0 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 fill-[#fff] inline"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                  clipRule="evenodd"
                  data-original="#000000"
                />
              </svg>
            </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default PrincipalMessage;
