import { motion } from "framer-motion";
import Steps from "./Steps";
import { FaCheck } from "react-icons/fa";

const Stepper = ({ stepNumber }: { stepNumber: number }) => {
  const progress =
    Steps.length === 1
      ? 1
      : (stepNumber - 1) / (Steps.length - 1);

  return (
    <div className="w-full max-w-3xl mx-auto mb-8">
      <div className="relative flex items-center justify-between px-2 md:px-8 mb-2">
        <div
          className="absolute top-1/2 left-0 w-full h-1 rounded-full z-0 bg-gray-300 transition-all duration-300"
          style={{ transform: "translateY(-50%)" }}
        />
        <motion.div
          className="absolute top-1/2 left-0 h-1 rounded-full z-0 bg-gradient-to-r from-blue-400 to-purple-400"
          style={{
            width: `calc(${progress * 100}% )`,
            transform: "translateY(-50%)",
          }}
          transition={{ duration: 0.5 }}
        />
        {Steps.map((step, idx) => (
          <div key={step.label} className="flex flex-col items-center flex-1 z-10">
            <motion.div
              animate={{
                scale: stepNumber === idx + 1 ? 1.18 : 1,
              }}
              className={`w-14 h-14 flex items-center justify-center rounded-full border-4
                ${
                  stepNumber > idx + 1
                    ? "border-purple-500 bg-gradient-to-br from-blue-600 to-purple-600 text-white"
                    : stepNumber === idx + 1
                    ? "border-blue-600 bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-lg"
                    : "border-gray-300 bg-gray-100 text-gray-400"
                }
                font-bold text-2xl transition-all duration-300`}
            >
              {stepNumber > idx + 1 ? <FaCheck /> : idx + 1}
            </motion.div>
            <span
              className={`mt-3 text-xs md:text-base font-semibold transition-all duration-300 ${
                stepNumber === idx + 1
                  ? "text-blue-700"
                  : stepNumber > idx + 1
                  ? "text-purple-600"
                  : "text-gray-400"
              }`}
            >
              {step.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stepper;