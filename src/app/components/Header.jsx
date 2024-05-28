import { NavLink, useLocation } from "react-router-dom";
import { data } from "../data/data";
/*
  File name: Header.jsx
 Student Name: Samuel Osoata
  Student ID: 301407126

*/
// This is the header file where all the navigation entities are rendered.
const Header = () => {
  const location = useLocation(data.header.link_to);
  return (
    <header className="flex justify-between items-center h-[70px] font-[600] px-10">
      <a className="flex lg:flex-1" href="/">
        <img src="/assets/logo.png" width="50" hight="30" />
      </a>
      <div className="flex justify-between space-x-14">
        {data.header.links.map((link, index) => (
          <NavLink
            key={index}
            to={link.link_to}
            className='capitalize'
            style={location.pathname === link.link_to  ? {
              borderBottomWidth: 1,
              borderBottomColor: '#000000',
              color: 'black',
            } : {border: 'none'}}
          >
            {link.name}
          </NavLink>
        ))}
      </div>
    </header>
  );
};

export default Header;
