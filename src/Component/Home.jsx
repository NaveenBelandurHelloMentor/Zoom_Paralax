import React from "react";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { useRef } from "react";
import "./home.css";

const Home = () => {
  const Container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: Container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1,0]);


  return (
    <>
      <div className="container">
        <div className="sticky">
                        <div className="el" >
                        <motion.div style={{ scale:scale4 }} className="imageContainer">
                          <img className="image" src={'https://wallpapercave.com/uwp/uwp4228501.jpeg'} />
                        </motion.div>
                      </div> 

                      <div className="second" >
                        <motion.div style={{ scale:scale5 }} className="imageContainer">
                          <img className="image" src={'https://wallpapercave.com/uwp/uwp4215970.png'} />
                        </motion.div>
                      </div> 

                      
                      <div className="third" >
                        <motion.div style={{ scale:scale6 }} className="imageContainer">
                          <img className="image" src={'https://wallpapercave.com/uwp/uwp4228499.jpeg'} />
                        </motion.div>
                      </div> 

                              
                      <div className="four" >
                        <motion.div style={{ scale:scale8 }} className="imageContainer">
                          <img className="image" src={'https://wallpapercave.com/uwp/uwp4228515.webp'} />
                        </motion.div>
                      </div> 

                              
                      <div className="five" >
                        <motion.div style={{ scale:scale9 }} className="imageContainer">
                          <img className="image" src={'https://wallpapercave.com/uwp/uwp4228554.jpeg'} />
                        </motion.div>
                      </div> 
        </div>
      </div>
    </>
  );
};

export default Home;
