import React, { useState } from "react";
import styled from "styled-components";
import { Facebook, Instagram, Menu, Twitter } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  color: #d7bbf9;
  position: relative;
  @media (max-width: 768px) {
    margin-top: 20px;
  }

  .logo {
    font-size: 1.5rem;
    font-weight: bold;
  }

  nav {
    ul {
      list-style: none;
      display: flex;
      gap: 20px;

      @media (max-width: 768px) {
        display: none;
      }

      li {
        a {
          text-decoration: none;
          color: #d7bbf9;
          padding: 0 0.5rem;
          font-weight:500;
          font-size: 1rem;
        }
        a:hover {
         color: #fff;
        }
      }
    }
  }

  .maintoggle {
    display: none;
    
    @media (max-width:768px) {
      display:flex;
      gap:20px;
    }
  }

  .hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;

    @media (max-width: 768px) {
      display: flex;
    }
  }

  .mobile-menu {
    display: none;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0px;
    width: 91%;
    background: #fff;
    color: #000;
    padding: 0 20px;
    z-index: 1000;

    ul {
      list-style: none;
      width: 100%;
      padding: 0;
      margin: 0;

      li {
        border-bottom: 1px solid #f3f3f3;
        text-align: left;
        padding: 20px 0px;

        a {
          text-decoration: none;
          color: #000;
          opacity: 60%;
          font-size: 1.2rem;
        }

        a:hover {
          font-weight: 500;
        }
      }
    }

    .close-btn {
      align-self: flex-end;
      cursor: pointer;
      font-size: 2rem;
    }

    &.active {
      display: flex;
    }
  }
`;

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Reviews", href: "#reviews" },
  { name: "Why Us", href: "#whyus" },
  { name: "Contact", href: "/contact" },
  { name: <Instagram size={20} />, href: "#instagram" },
  { name: <Facebook size={20} />, href: "#facebook" },
  { name: <Twitter size={20} />, href: "#twitter" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <HeaderWrapper>
      <div className="logo">ASTRA</div>
      <nav>
        <ul>
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
          <li style={{ cursor: "pointer" }}>
            <ThemeToggle />
          </li>
        </ul>
      </nav>
      <div className="maintoggle">
        <ThemeToggle />
        <div className="hamburger" onClick={toggleMenu}>
          <Menu />
        </div>
      </div>
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <div className="close-btn" onClick={toggleMenu}>
          ×
        </div>
        <ul>
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.href} onClick={toggleMenu}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
