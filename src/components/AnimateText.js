'use client'
import { motion } from "framer-motion";

const AnimateText = ({ title, classNames, animateDelay }) => {

    const container = {
        hidden: { opacity: 1, y: 0},
        visible: {
          opacity: 1,
          y:-12,
          transition: {
            delayChildren: animateDelay,
            staggerChildren: 0.1
          }
        }
      }
        
      const item = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1
        }
      }


  return <motion.h1  className={`${classNames}  font-extrabold container duration-700`} 
    variants={container}
    initial="hidden"
    animate="visible"
  >
    {
        title.split(' ').map((word, index)=> {
            
            return(
                <motion.span className="item" variants={item} key={index}>{word} </motion.span>
            )
        })
    }
    </motion.h1>;
};

export default AnimateText;
