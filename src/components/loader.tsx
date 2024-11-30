import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl md:text-6xl text-blue-600 font-bold mb-4"
        >
          {/* <img
            src="https://tirony.me/manny_adroit/wp-content/uploads/2024/01/Adroit-USA-logo-1.jpg"
            alt="Adroit USA Logo"
            className=" h-28"
          /> */}
          LOGO
          {/* <span className="bg-gradient-to-r from-blue-400 to-blue-500 text-transparent bg-clip-text">
            Your Company
          </span> */}
        </motion.h1>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360, 0],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity,
          }}
          className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full mx-auto"
        />
      </motion.div>
    </motion.div>
  );
};

export default Loader;
