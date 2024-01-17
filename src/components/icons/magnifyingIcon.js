
import { FaMagnifyingGlass } from "react-icons/fa6";
import styles from './magnify.module.css';

const MagnifyingGlassToggle = ({ toggleShowMeta }) => {
    return (
        <div className={styles.magnify} onClick={toggleShowMeta}>
            <FaMagnifyingGlass />
        </div>
    );
};

export default MagnifyingGlassToggle;