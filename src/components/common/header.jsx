import React from "react";
import logo from '../../assets/thong-tin-tuyen-sinh-dai-hoc-cong-nghe-removebg-preview.png'
const Header = () => {
  // const [toggleAside, setToggleAside] = useState(true);
  const scrollElement = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <header className="text-neutral-700 bg-cyan-200 fixed top-0 left-0 w-full border-b border-gray-500 flex justify-center items-center px-4 py-6 z-50">
      <nav className="container m-auto flex justify-between items-center">
        <button className="text-3xl font-bold" onClick={scrollElement}>
          Trang chủ báo cháy
        </button>
        <img className="w-[72px] h-[72px]" src={logo} alt="logo" />
      </nav>
    </header>
  );
};

export default Header;
