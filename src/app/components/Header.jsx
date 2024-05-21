import { data } from "../data/data";

const Header = () => {
  return (
    <header className="flex justify-between items-center h-[70px] font-[600] px-10">
      <div className="flex lg:flex-1">
        <a href="/" className="-m-1.5 p-1.5">
          <img src="../../assets/icon.jpg" className="font-bold text-3xl" style={{ color: "#fff" }} />
        </a>
      </div>
      <div className="flex justify-between space-x-14">
        {data.header.links.map((link, index) => (
          <a key={index} href={link.link_to} className="capitalize">
            {link.name}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;
