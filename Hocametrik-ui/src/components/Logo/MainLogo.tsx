import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MainLogo = () => {
  return (
    <Link to={"/"}>
    <motion.div 
      whileHover={{ scale: 1.05 }} 
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-3 cursor-pointer"
    >
      <img 
        src="https://th.bing.com/th/id/OIP.DifWxwpVMSnoHUZZX6HHmQHaHa?w=216&h=216&c=7&r=0&o=5&dpr=1.1&pid=1.7" 
        alt="Hocametrik Logo" 
        className="w-14 h-14 rounded-full object-cover"
      />
      <span className="text-2xl font-bold text-blue-600">
        Hocametrik
      </span>
    </motion.div>
    </Link>
  );
};

export default MainLogo;
