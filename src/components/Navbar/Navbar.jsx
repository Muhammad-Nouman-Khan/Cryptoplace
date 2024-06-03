import React, { useContext } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import arrow from "../../assets/arrow_icon.png";
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);

  const currencyUpdate = (event) => {
    switch (event.target.value) {
      case "usd": {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
      case "eur": {
        setCurrency({ name: "eur", symbol: "€" });
        break;
      }
      case "pkr": {
        setCurrency({ name: "pkr", symbol: "Rs" });
        break;
      }
      default: {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
    }
  };
  return (
    <div className="navbar">
      <Link to={"/"}>
        <img src={logo} className="logo" alt="" />
      </Link>
      <ul>
        <Link to={"/"}>
          {" "}
          <li>Home</li>{" "}
        </Link>
        {["Features", "Pricing", "Blog"].map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="nav__right">
        <select onChange={currencyUpdate}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="pkr">PKR</option>
        </select>
        <button>
          Sign Up <img src={arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
