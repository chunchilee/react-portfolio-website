import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { RiMenu3Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { menu } from "../data/data";

const Header = () => {
  const [mobile, setMobile] = useState(false);

  const renderMenu = menu.map((item) => {
    return (
      <li key={item.id}>
        <Link to={item.url} className="link">
          {item.text}
        </Link>
        <span>{item.icon}</span>
      </li>
    );
  });
  return (
    <header>
      <ul className={`${mobile ? "mobile-nav" : "menu"}`}>{renderMenu}</ul>
      <div className="icons">
        <button onClick={() => setMobile(!mobile)}>
          {mobile ? <AiOutlineClose /> : <RiMenu3Line />}
        </button>
      </div>
    </header>
  );
};

export default Header;
