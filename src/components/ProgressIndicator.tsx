import React from 'react';
import { motion } from 'framer-motion';
interface ProgressIndicatorProps {
  progress: number;
}
const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  progress
}) => {
  return <motion.div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-600 via-teal-500 to-amber-500 z-50" style={{
    width: `${progress * 100}%`,
    scaleX: [0, 1]
  }} initial={{
    scaleX: 0
  }} animate={{
    scaleX: 1
  }} />;
};
export default ProgressIndicator;