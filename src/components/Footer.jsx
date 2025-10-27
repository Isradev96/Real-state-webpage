import React from "react";
import { footerListItems, footerSocialIcons } from "../constant/data";

const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-neutral-100 pb-9 pt-[60px]">
      <div className="container">
        {/* footer top */}
        <div className="grid gap-7 sm:grid-cols-2 md:grid-cols-[1fr_0.5fr_1fr_1fr]">
          {/* footer brand */}
          <div>
            <a href="#" className="inline-block">
              <img src="/images/Logo.png" alt="Footer Logo" />
            </a>
            <p className="my-[14px] text-neutral-50/60">
              Helping you find the perfect home with expert guidance and a
              seamless experience.
            </p>

            <div className="flex mt-3 gap-6">
              {footerSocialIcons.map((item, index) => (
                <a key={index} href="#" className="hover:text-sky-500 transition-colors">
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* footer list */}
          {footerListItems.map(item => (
            <div key={item.id}>
                <p className="text-white text-xl font-bold mb-3">{item.title}</p>
                <ul className="grid gap-2">
                    {item.links.map((link, index)=>(
                        <li key={index}>
                            <a href="#" className="text-neutral-50/60 hover:text-neutral-100 transition">{link.label}</a>
                        </li>
                    ))}
                </ul>
            </div>
          ))}
        </div>
        {/* footer bottom */}
        <div className="grid gap-4 md:mt-20 mt-10">
            <div className="w-full h-[1px] bg-gray-500"></div>
            <p className="text-white/80">&copy; {new Date().getFullYear()} copyright  Homely.All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
