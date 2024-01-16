import styles from './devAssignmentsNavigation.module.css';

const DevAssignmentsNavigation = () => {

  return (
    <div className={styles.navigation}>
      <div className={styles.header}>
         <h3>Assigments</h3>
      </div>
      <div className={styles.links}>
        <div>LINK BTN</div>
      </div>
    </div>
  );
}

export default DevAssignmentsNavigation;