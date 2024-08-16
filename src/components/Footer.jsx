import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => (
  <div className="mt-24">
    <p className="dark:text-gray-200 text-gray-700 text-center m-20">
      © 2024 All rights reserved by 
       <Link to = 'https://e-com-client-coral.vercel.app/' className='hover:text-blue-500 '> Simplekart.com</Link>
      
    </p>
  </div>
);

export default Footer;