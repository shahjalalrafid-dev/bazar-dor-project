
import React from 'react';

const Footer = () => {
  return (
    <footer className='px-3 sm:px-5 lg:px-7 bg-base-200'>
      <section className='container mx-auto py-6'>
        <div className='flex flex-col gap-3 text-sm sm:text-base md:flex-row md:justify-between md:items-center'>

          <p>
            বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
          </p>

          <p className='text-gray-500 md:text-right'>
            সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
          </p>

        </div>
      </section>
    </footer>
  );
};

export default Footer;
