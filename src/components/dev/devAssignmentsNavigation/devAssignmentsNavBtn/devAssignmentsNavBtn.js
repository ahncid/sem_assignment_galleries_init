import styles from './devAssignmentsNavBtn.module.css';
import { 
    FaJsSquare,
} from "react-icons/fa";

const DevAssignmentsNavBtn = ({link, title}) => { 

    return (
        <div className={styles.navBtn}>
            <DevAssignmentsNavBtn link={'/assignments'} title={'Assignments'} />
<DevAssignmentsNavBtn link={'/assignments/icons'} title={'Icons'} />
            <a href={`/assignments/icons`}><FaJsSquare / > icons</a>
        </div>
    );

};

export default DevAssignmentsNavBtn;