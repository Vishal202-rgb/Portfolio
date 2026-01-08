// import React, { useEffect, useState } from "react";
// import { styles } from "../styles";
// import { navLinks } from "../constants";
// import { logo, menu, close } from "../assets";

// const Navbar = () => {
//   const [active, setActive] = useState("");
//   const [toggle, setToggle] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   // ✅ Background change on scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       setScrolled(scrollTop > 100);

//       // ✅ Active link on scroll
//       navLinks.forEach((nav) => {
//         const section = document.getElementById(nav.id);
//         if (!section) return;

//         const rect = section.getBoundingClientRect();
//         if (rect.top <= 120 && rect.bottom >= 120) {
//           setActive(nav.title);
//         }
//       });
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // ✅ Smooth scroll handler
//   const handleNavClick = (id, title) => {
//     setActive(title);
//     setToggle(false);

//     const section = document.getElementById(id);
//     section?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <nav
//       className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${
//         scrolled ? "bg-primary" : "bg-transparent"
//       }`}
//     >
//       <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        
//         {/* LOGO */}
//         <div
//           className="flex items-center gap-2 cursor-pointer"
//           onClick={() => {
//             setActive("");
//             window.scrollTo({ top: 0, behavior: "smooth" });
//           }}
//         >
//           <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
//           <p className="text-white text-[18px] font-bold">Vishu</p>
//         </div>

//         {/* DESKTOP MENU */}
//         <ul className="list-none hidden sm:flex flex-row gap-10">
//           {navLinks.map((nav) => (
//             <li
//               key={nav.id}
//               className={`${
//                 active === nav.title ? "text-white" : "text-secondary"
//               } hover:text-white text-[18px] font-medium cursor-pointer`}
//               onClick={() => handleNavClick(nav.id, nav.title)}
//             >
//               {nav.title}
//             </li>
//           ))}
//         </ul>

//         {/* MOBILE MENU */}
//         <div className="sm:hidden flex flex-1 justify-end items-center">
//           <img
//             src={toggle ? close : menu}
//             alt="menu"
//             className="w-[28px] h-[28px] object-contain cursor-pointer"
//             onClick={() => setToggle(!toggle)}
//           />

//           <div
//             className={`${
//               toggle ? "flex" : "hidden"
//             } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
//           >
//             <ul className="list-none flex flex-col gap-4">
//               {navLinks.map((nav) => (
//                 <li
//                   key={nav.id}
//                   className={`${
//                     active === nav.title ? "text-white" : "text-secondary"
//                   } font-medium cursor-pointer text-[16px]`}
//                   onClick={() => handleNavClick(nav.id, nav.title)}
//                 >
//                   {nav.title}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);

      navLinks.forEach((nav) => {
        const section = document.getElementById(nav.id);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(nav.title);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id, title) => {
    setActive(title);
    setToggle(false); // ✅ close mobile menu
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`${styles.paddingX} fixed top-0 w-full flex items-center py-5 z-50 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">

        {/* LOGO */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold">Vishu</p>
        </div>

        {/* DESKTOP MENU */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => handleNavClick(nav.id, nav.title)}
            >
              {nav.title}
            </li>
          ))}
        </ul>

        {/* MOBILE MENU */}
        <div className="sm:hidden flex justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] cursor-pointer z-50"
            onClick={() => setToggle(!toggle)}
          />

          {toggle && (
            <div className="absolute top-16 right-4 z-50 p-6 black-gradient rounded-xl min-w-[160px]">
              <ul className="list-none flex flex-col gap-4 items-start">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`${
                      active === nav.title ? "text-white" : "text-secondary"
                    } hover:text-white text-[16px] font-medium cursor-pointer`}
                    onClick={() => handleNavClick(nav.id, nav.title)}
                  >
                    {nav.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
