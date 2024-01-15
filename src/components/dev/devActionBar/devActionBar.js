
import { useRef, useEffect } from "react";
import styles from "./devActionBar.module.css";



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
           
            </span>

            <span className={styles.btn} onClick={() => setSizeFunction(config.medium)}>{config.medium}
           
            </span>

            <span className={styles.btn} onClick={() => setSizeFunction(config.large)}>{config.large}
          
            </span>
            <input type="range" ref={activeSlideRef} defaultValue={size} min="25" max="200" onChange={(e) => setSizeFunction(e.target.value)}></input>
                </div>
        </div>
)}
export default DevActionBar;