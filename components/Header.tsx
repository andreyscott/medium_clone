import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="mx-auto flex max-w-7xl bg-[#c4e2ff] justify-between p-5">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img
            src="/images/logo/medium-logo.svg"
            className="w-44 cursor-pointer object-contain"
          />
        </Link>

        <div className="hidden items-center space-x-5 md:inline-flex">
          <h3>About</h3>
          <h3>Contact</h3>
          <h3 className="rounded-full border border-black  px-4 py-1  text-black ">
            Follow
          </h3>
        </div>
      </div>

      <div className="flex items-center space-x-5 text-black">
        <h3>Sign In</h3>
        <h3 className="rounded-full border border-black bg-black px-4 py-1">
         <span className='text-white'>
         Get Started
           </span> 
        </h3>
      </div>
    </header>
  );
};

export default Header;
