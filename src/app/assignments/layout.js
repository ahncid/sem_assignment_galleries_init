import DevAssignmentsNavigation from "@/components/dev/devAssignmentsNavigation/devAssignmentsNavigation"
import styles from "./layout.module.css"
import DevAssignmentsNavBtn from "@/components/dev/devAssignmentsNavigation/devAssignmentsNavBtn/devAssignmentsNavBtn"

export default function AssignmentsLayout({ children }) {
    return <section className={styles.layout}>
        <div className={styles.navigation}>
            <div className={styles.navContainer}>
            <DevAssignmentsNavigation />
           
                navigation - links
            </div>
        </div>
        <div className={styles.content}>
            {children}
        </div>
    </section>
}