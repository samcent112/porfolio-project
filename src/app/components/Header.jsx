import { NavLink, useLocation } from "react-router-dom";
import { data } from "../data/data";
/*
  File name: Header.jsx
  Student Name: Festus Asiyanbi
  Student ID: 301270589
*/
// This is the header file where all the navigation entities are rendered.
const Header = () => {
  const location = useLocation(data.header.link_to);
  return (
    <header className="flex justify-between items-center h-[70px] font-[600] px-10">
      <a className="flex lg:flex-1" href="/">
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="120.000000pt"
          height="120.000000pt"
          viewBox="0 0 1242.000000 1247.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,1247.000000) scale(0.100000,-0.100000)"
            fill="#fff"
            stroke="none"
          >
            <path d="M0 12455 c0 -13 697 -15 6210 -15 5513 0 6210 2 6210 15 0 13 -697 15 -6210 15 -5513 0 -6210 -2 -6210 -15z" />
            <path
              d="M6075 8193 c-175 -15 -445 -77 -560 -127 -289 -128 -431 -220 -614 -399 
                -297 -291 -472 -636 -542 -1067 -18 -107 -14 -443 5 -552 94 -531 361 
                -953 789 -1246 188 -129 388 -218 607 -271 186 -44 293 -54 513 -48 220 
                6 321 23 527 90 488 156 951 590 1123 1052 109 295 131 413 132 705 0 287 
                -22 421 -110 658 -59 158 -79 202 -142 307 -144 237 -337 441 -564 592 -326 
                220 -783 339 -1164 306z m348 -79 c221 -28 351 -67 612 -184 121 -54 327 -213 
                467 -358
                202 -211 377 -515 421 -732 3 -14 12 -52 20 -85 35 -149 42 -214 42 -420 0
                -216 -4 -254 -52 -454 -49 -209 -135 -393 -274 -586 -84 -117 -113 -150 -230
                -260 -251 -238 -541 -388 -881 -457 -98 -20 -143 -23 -338 -23 -176 0 -247 4
                -325 19 -282 52 -556 177 -790 359 -81 63 -233 216 -299 302 -198 255 -309
                513 -367 855 -17 95 -17 414 0 500 6 36 17 90 22 120 17 89 88 297 135 395
                122 256 328 507 553 674 363 269 838 393 1284 335z"
            />
            <path
              d="M5508 6343 c-378 -378 -688 -691 -688 -695 0 -5 383 -8 850 -8 468 0
                850 3 850 6 0 7 -183 208 -400 437 l-44 47 104 105 c58 58 108 104 112 103 8
                -3 91 -84 529 -515 l185 -183 285 0 c157 0 289 3 293 7 7 8 -1363 1383 -1379
                1383 -5 0 -319 -309 -697 -687z"
            />
            <path d="M10546 2071 c-3 -5 1 -11 9 -15 9 -3 15 0 15 9 0 16 -16 20 -24 6z" />
          </g>
        </svg>
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
