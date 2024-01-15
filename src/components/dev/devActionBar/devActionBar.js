'use client'
import {useRef, useEffect} from "react";
import styles from "./devBar.module.css";



const DevActionBar = ({setSizeFunction, size, config}) => {
    const activeSlideRef = useRef(null);

    useEffect(() => {

        let slider = activeSlideRef.current;
        slider.value = size;

    }, [size])
    return (
        <div className={styles.container}>
        <div className={styles.status}><h1>{size}</h1></div>
     
<div className={styles.actionBar}>
<span className={styles.btn} onClick={() => setSizeFunction(config.small)}>{config.small}
<input type="range" ref={activeSlideRef} defaultValue={size} min="25" max="150" onChange={(e) => setSizeFunction(e.target.value)}></input>
  KNAP LiLLE
</span>
<span className={styles.btn} onClick={() => setSizeFunction(config.medium)}>{config.medium}
<input type="range" ref={activeSlideRef} defaultValue={size} min="50" max="150" onChange={(e) => setSizeFunction(e.target.value)}></input>
  KNAP MELLEM
</span>
<span className={styles.btn} onClick={() => setSizeFunction(config.large)}>{config.large}
<input type="range" ref={activeSlideRef} defaultValue={size} min="75" max="150" onChange={(e) => setSizeFunction(e.target.value)}></input>
  KNAP STOR
</span>
</div>
</div>
)}
export default DevActionBar;