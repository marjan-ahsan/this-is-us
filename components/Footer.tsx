import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-6 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6 text-center text-gray-500 dark:text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} ThisIsUs. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
