import { 
    FaFlask, 
    FaCalculator, 
    FaHeartbeat, 
    FaGavel, 
    FaPencilAlt,
    FaCog,
    FaCode,
    FaBusinessTime,
    FaMicroscope,
    FaGraduationCap
  } from 'react-icons/fa';
  
  export const facultyIcons = [
    FaFlask,        // علوم
    FaCalculator,   // هندسة
    FaHeartbeat,    // طب
    FaGavel,        // قانون
    FaPencilAlt,    // آداب
    FaCog,          // هندسة ميكانيكية
    FaCode,         // علوم حاسب
    FaBusinessTime, // إدارة أعمال
    FaMicroscope,   // علوم طبية
    FaGraduationCap // تربية
  ];
  
  export const getRandomIcon = () => {
    return facultyIcons[Math.floor(Math.random() * facultyIcons.length)];
  };