"use client";
import DevActionBar from "../dev/devactionbar/devactionbar";
import { useState } from "react";
import styles from "./devicons.module.css";
import {
  FaAngleRight,
  FaAngleLeft,
  FaAngleDown,
  FaAngleUp,
  FaCircleUser,
  FaClover,
  FaDice,
  FaInstalod,
  FaInfinity,
  FaItunesNote,
} from "react-icons/fa6";




const DevIcons = ({initialSize, initialColor}) => {
  const [size, setSize] = useState(initialSize || 50);
  const [color, setColor] = useState(initialColor || "#000000");
  let style = { width: `${size}px`, height: `${size}px`, color: `${color}` };
  let config = {
    small : 50,
    medium : 100,
    large : 150
};
  return (
    
    <div className={styles.container}>
         <DevActionBar setSizeFunction={setSize} size={size} config={config}/><span className={styles.btn}>
         <input 
        type="color" 
        value={color} 
        onChange={(e) => setColor(e.target.value)}
      />
</span>
      <div className={styles.icons}>
        <FaAngleRight style={style} />
        <FaAngleLeft style={style}/>
        <FaAngleDown style={style} />
        <FaAngleUp style={style} />
        <FaCircleUser style={style} />
        <FaClover style={style} />
        <FaDice style={style} />
        <FaInstalod style={style} />
        <FaInfinity style={style} />
        <FaItunesNote style={style} />
      </div>

  
    </div>
  );
};

export default DevIcons;