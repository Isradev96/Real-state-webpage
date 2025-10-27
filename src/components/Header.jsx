import React, { useEffect, useRef, useState } from "react";
import { RiCloseFill, RiMenuFill } from "@remixicon/react";
import { navItems } from "../constant/data";
import Button from "./Button";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    }
    const headerRef = useRef(null)
    useEffect(()=>{
      const handleScroll = () => {
        if(window.scrollY > 100){
          headerRef.current.classList.add('active')
        }
        else{
          headerRef.current.classList.remove('active')
        }
      }

      window.addEventListener('scroll', handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    },[])
  return (
    <header className="header" ref={headerRef}>
      <div className="container flex items-center justify-between">
        <a href="#">
          <img src="/images/Logo.png" alt="Logo" width={115} height={59} />
        </a>
        {/* mobile menu */}
        <nav className={`navbar ${isOpen ? "active" : ""}`}>
          <button className="ml-auto mb-10" onClick={handleClick}>
            <RiCloseFill size={30} />
          </button>

          <ul className="flex flex-col flex-1 justify-center items-center gap-10">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={item.href} className="hover:text-sky-600 transition-colors text-lg font-medium">{item.label}</a>
              </li>
            ))}
          </ul>

          <Button label="Get Stared" className="secondary-btn" />
        </nav>

        {/* Menu Toggle */}
        <button className="md:hidden" onClick={handleClick}>
            <RiMenuFill size={30} />
        </button>

        {/* lg Menu */}
        <ul className="hidden md:flex md:gap-10 md:items-center">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={item.href} className="hover:text-gray-200 font-medium transition-colors">{item.label}</a>
              </li>
            ))}
            <Button label="Get Stared" className="primary-btn" />
          </ul>

          {/* Overlay */}
            <div className={`overlay ${isOpen ? 'active' : ''}`} onClick={handleClick}></div>

      </div>
    </header>
  );
};

export default Header;
