import React from 'react'
import { data } from '../data/data';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
/*
  File name: Footer.jsx
  Student Name: Festus Asiyanbi
  Student ID: 301270589
*/
// This component is responsible for rendering the footer on the website.
const Footer = () => {
  const date = new Date();
  const getFullYear = date.getFullYear()
  return (
    <footer
      className='flex flex-col justify-center items-center h-[300px] font-[600] px-10 space-y-10'>
      <div className='text-2xl'>Festus Asiyanbi</div>
      <div className='flex justify-between space-x-14'>
        {data.header.links.map((link, index) => (
            <a
              key={index}
              href={link.link_to}
              className='g-transition capitalize text-black font-[700] hover:text-white'
            >
                {link.name}
            </a>
        ))}
      </div>
      <div className='flex justify-between space-x-5'>
        {data.socials.map((social, index) => (
          <a
            href={social.link}
            key={index}
            className='g-transition bg-black h-[40px] w-[40px] rounded-[10px] flex items-center justify-center border-black hover:bg-transparent hover:border-[1px]'>
            {social.type === 'linkedin' 
              ? <FaLinkedin />
              : social.type === 'twitter'
              ? <FaTwitter />
              : social.type === 'instagram'
              ? <FaInstagram />
              : <FaGithub />
            }
          </a>
        ))}
      </div>
      <div className='text-[12px]'> Copyright &copy; {getFullYear}. All Rights Reserved | Centennial College</div>
    </footer>
  )
}

export default Footer;