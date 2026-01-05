// import { motion } from "framer-motion";
// import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";

// const Hero = () => {
//   return (
//     <section className="relative w-full h-screen mx-auto overflow-hidden">

//       {/* 🔥 HERO TEXT */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-10`}
//       >
//         <div className="flex flex-col justify-center items-center mt-5">
//           <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
//           <div className="w-1 sm:h-80 h-40 violet-gradient" />
//         </div>

//         <div>
//           <h1 className={`${styles.heroHeadText} text-white`}>
//             Hi, I'm <span className="text-[#915EFF]">Vishal</span>
//           </h1>

//           <p className={`${styles.heroSubText} mt-2 text-white-100`}>
//             I develop 3D visuals, user
//             <br className="sm:block hidden" />
//             interfaces and web applications
//           </p>
//         </div>
//       </motion.div>

//       {/* 🔥 3D CANVAS (BACKGROUND ONLY) */}
//       <div className="absolute inset-0 z-0 pointer-events-none">
//         <ComputersCanvas />
//       </div>

//       {/* 🔥 SCROLL INDICATOR */}
//       <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10">
//         <a href="#about">
//           <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
//             <motion.div
//               animate={{ y: [0, 24, 0] }}
//               transition={{
//                 duration: 1.5,
//                 repeat: Infinity,
//                 repeatType: "loop",
//               }}
//               className="w-3 h-3 rounded-full bg-secondary mb-1"
//             />
//           </div>
//         </a>
//       </div>

//     </section>
//   );
// };

// export default Hero;


import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen mx-auto overflow-x-hidden">

      {/* HERO TEXT */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`relative sm:absolute inset-0 sm:top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-10`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className="text-[40px] sm:text-[60px] md:text-[80px] font-black text-white">
            Hi, I'm <span className="text-[#915EFF]">Vishal</span>
          </h1>

          <p className="mt-2 text-[16px] sm:text-[18px] text-white-100">
            I develop 3D visuals, user
            <br className="sm:block hidden" />
            interfaces and web applications
          </p>
        </div>
      </motion.div>

      {/* 3D CANVAS → DESKTOP ONLY */}
      <div className="absolute inset-0 z-0 pointer-events-none hidden sm:block">
        <ComputersCanvas />
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-10 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>

    </section>
  );
};

export default Hero;
